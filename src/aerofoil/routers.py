from fastapi import APIRouter


app_router = APIRouter()

@app_router.get("/", tags=["app"])
async def index():
    return dict(msg="This page is intentionally blank")
