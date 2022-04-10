from fastapi import FastAPI

from src.aerofoil.routers import app_router

app = FastAPI(
    title="Aerofoil",
    version="1.0.0",
    description="Web-based applications to help users in predicting aerodynamic coefficients of airfoils."
)

app.include_router(app_router)
