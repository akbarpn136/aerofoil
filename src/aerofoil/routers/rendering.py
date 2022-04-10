from fastapi import APIRouter, Body

from src.aerofoil.models.geometry import Geometry


rendering_router = APIRouter()

@rendering_router.post(
    "/render",
    tags=["app"],
    description="This render airfoil geometry representation"
)
async def render(geom: Geometry):
    return dict(msg=geom)
