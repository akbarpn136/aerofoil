from fastapi import APIRouter

from .render import render_router
from .predict import predict_router


app_router = APIRouter()

@app_router.get("/", tags=["app"])
async def index():
    return dict(msg="This page is intentionally blank", data=None)

app_router.include_router(render_router)
app_router.include_router(predict_router)
