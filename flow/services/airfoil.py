import io
import os

import cv2
import skfmm
import base64
import numpy as np
from django.conf import settings
from rest_framework import status
from matplotlib import pyplot as plt
from django.http import JsonResponse


class AirfoilGenerator:
    @staticmethod
    def _rotate_img(draw, angle):
        center = (draw.shape[0] // 2, draw.shape[1] // 2)
        rotate_matrix = cv2.getRotationMatrix2D(center=center, angle=-angle, scale=1)
        rotated_image = cv2.warpAffine(
            src=draw,
            M=rotate_matrix,
            dsize=(draw.shape[1], draw.shape[0]),
            borderMode=cv2.BORDER_CONSTANT,
            borderValue=-1
        )

        return rotated_image

    @staticmethod
    def sdf_image(angle: int, resolution: int,
                  dimension: int, points, filename: str = None,
                  gen_sdf: bool = True, save: bool = False):
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
        cv2.fillPoly(phi, [airfoils], (255, 255, 255), lineType=cv2.LINE_AA)
        phi = cv2.flip(phi, 0)
        phi = AirfoilGenerator._rotate_img(phi, angle)
        plt.axis('off')

        if gen_sdf:
            colormap = "plasma"
            phi = skfmm.distance(phi, dx=1, order=2)
        else:
            colormap = "gray"

        plt.imshow(phi, cmap=colormap)
        if save:
            name = filename if filename else "airfoil"
            curr_dir = settings.PUBLIC_DIR
            save_path = os.path.join(curr_dir, "public", "media", "airfoil", f"{name}.png")
            plt.savefig(save_path, bbox_inches="tight", pad_inches=0)

            return None
        else:
            flike = io.BytesIO()
            plt.savefig(flike, bbox_inches="tight", pad_inches=0)

            return base64.b64encode(flike.getvalue()).decode()

    @staticmethod
    def parse_input(points_input, angle, pixels):
        try:
            points = points_input.strip().splitlines()
            coords = [{
                "x": float(point.split(maxsplit=1)[0]),
                "y": float(point.split(maxsplit=1)[1])
            } for point in points]

            ori = AirfoilGenerator.sdf_image(angle, pixels, 2, coords, gen_sdf=False)
            img = AirfoilGenerator.sdf_image(angle, pixels, 2, coords, gen_sdf=True)

            return JsonResponse(
                {"data": {"ori": ori, "sdf": img}},
                status=status.HTTP_200_OK
            )

        except IndexError as err:
            return JsonResponse(
                {"data": str(err)},
                status=status.HTTP_400_BAD_REQUEST
            )

        except TypeError as err:
            return JsonResponse(
                {"data": str(err)},
                status=status.HTTP_400_BAD_REQUEST
            )

        except AttributeError as err:
            return JsonResponse(
                {"data": str(err)},
                status=status.HTTP_400_BAD_REQUEST
            )

        except ValueError as err:
            return JsonResponse(
                {"data": str(err)},
                status=status.HTTP_400_BAD_REQUEST
            )
