from fastapi import APIRouter

from src.aerofoil.routers.rendering import rendering_router


app_router = APIRouter()

@app_router.get("/", tags=["app"])
async def index():
    return dict(msg="This page is intentionally blank")

app_router.include_router(rendering_router)
