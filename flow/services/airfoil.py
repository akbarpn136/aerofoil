import io
import cv2
import skfmm
import base64
import numpy as np
from matplotlib import pyplot as plt


class AirfoilGenerator:
    @staticmethod
    def sdf_image(angle: int, resolution: int, dimension: int, points):
        offset_y = resolution // 2
        phi = -1 * np.ones((resolution, resolution, 1), dtype="uint8")
        airfoils = np.empty((0, dimension), int)

        for point in points:
            airfoils = np.append(
                airfoils,
                np.array([[
                    round(resolution * point["x"]),
                    round(resolution * point["y"] + offset_y)
                ]]),
                axis=0
            )

        airfoils = airfoils.reshape((-1, 1, 2))
        cv2.fillPoly(phi, [airfoils], (255, 255, 255))
        phi = cv2.flip(phi, 0)
        sdf = skfmm.distance(phi, dx=2.0 / 500)
        plt.imshow(sdf, cmap='turbo')
        plt.axis('off')
        flike = io.BytesIO()
        plt.savefig(flike)

        return base64.b64encode(flike.getvalue()).decode()
