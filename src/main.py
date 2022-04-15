from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.aerofoil.routers.base import app_router

app = FastAPI(
    title="AEROFOIL",
    version="1.0.0",
    description="Web-based applications to help users in predicting aerodynamic coefficients of airfoils."
)

app.add_middleware(CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(app_router)
