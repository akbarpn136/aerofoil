import io
import cv2
import skfmm
import base64
import matplotlib
import numpy as np
from matplotlib import pyplot as plt


class ImageProcessing:
    def _rotate_vector(pts, radians, origin=(0, 0)):
        origin = np.array(origin)
        rot = np.array([
            [np.cos(radians), -np.sin(radians)],
            [np.sin(radians), np.cos(radians)]
        ])
        adjusted = pts - origin
        res = origin + np.dot(adjusted, rot)

        return res

    def grayscale(angle: float, px: list[float], py: list[float]):
        placeholder = io.BytesIO()
        pts = np.stack((px, py), axis=1)
        pts = ImageProcessing._rotate_vector(pts, angle)
        x = pts[:, 0]
        y = pts[:, 1]

        matplotlib.use("Agg")
        plt.style.use("dark_background")
        fig, ax = plt.subplots(figsize=(10, 10))
        fig.tight_layout()
        ax.plot(x, y)
        ax.fill(x, y, "white", zorder=10)
        ax.axes.axis("off")
        ax.axes.set_aspect("equal", "datalim")
        fig.savefig(placeholder, bbox_inches="tight", pad_inches=0)
        plt.close(fig)

        return f"data:image/jpg;base64,{base64.b64encode(placeholder.getvalue()).decode()}"

    def _rotate_image(draw, angle):
        center = (draw.shape[0] // 2, draw.shape[1] // 2)
        rotate_matrix = cv2.getRotationMatrix2D(center=center, angle=-angle, scale=1)
        rotated = cv2.warpAffine(
            src=draw,
            M=rotate_matrix,
            dsize=(draw.shape[1], draw.shape[0]),
            borderMode=cv2.BORDER_CONSTANT,
            borderValue=-1
        )

        return rotated

    def sdf(angle: float, px: list[float], py: list[float]):
        colormap = "jet"
        dimension = 2
        padding = 110
        resolution = 1024
        offset_y = resolution // 2
        phi = -1 * np.ones((resolution, resolution, 1), dtype="uint8")
        airfoils = np.empty((0, dimension), int)
        pts = np.stack((px, py), axis=1)
        placeholder = io.BytesIO()

        for point in pts:
            airfoils = np.append(
                airfoils,
                np.array([[
                    round(resolution * point[0]),
                    round(resolution * point[1] + offset_y)
                ]]),
                axis=0
            )

        airfoils = airfoils.reshape((-1, 1, 2))
        cv2.fillPoly(phi, [airfoils], (255, 255, 255), lineType=cv2.LINE_AA)
        phi = cv2.flip(phi, 0)
        phi = cv2.copyMakeBorder(phi, padding, padding, padding, padding, cv2.BORDER_CONSTANT, value=[-1, -1, -1])
        phi = ImageProcessing._rotate_image(phi, angle)
        phi = skfmm.distance(phi, dx=1, order=2)

        matplotlib.use("Agg")
        fig, ax = plt.subplots()
        fig.tight_layout()
        ax.imshow(phi, cmap=plt.get_cmap(colormap))
        ax.axes.axis("off")
        fig.savefig(placeholder, bbox_inches="tight", pad_inches=0)
        plt.close(fig)

        return f"data:image/jpg;base64,{base64.b64encode(placeholder.getvalue()).decode()}"
