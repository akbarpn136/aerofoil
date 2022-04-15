from fastapi import APIRouter, Body

from src.aerofoil.models.geometry import Geometry
from src.aerofoil.services.processing import ImageProcessing


render_router = APIRouter()

@render_router.post(
    "/render",
    tags=["app"],
    description="This render airfoil geometry representation"
)
async def render(geom: Geometry):
    grayscale = ImageProcessing.grayscale(angle=geom.angle, px=geom.x, py=geom.y)

    return dict(msg="Rendering airfoil image", data=grayscale)
