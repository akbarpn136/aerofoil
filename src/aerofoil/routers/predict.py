from fastapi import APIRouter, Depends

from src.aerofoil.models.arch import AerofoilNN
from src.aerofoil.configs.loader import model_cnn
from src.aerofoil.models.geometry import Geometry
from src.aerofoil.services.predict import AirfoilPrediction


predict_router = APIRouter()

@predict_router.post(
    "/predict",
    tags=["app"],
    description="This predict coefficient aerodynamic of the airfoil"
)
async def render(
    geom: Geometry,
    model: AerofoilNN = Depends(model_cnn)
):
    coef = AirfoilPrediction.predict(model, geom.angle, geom.x, geom.y)

    return dict(msg="Predicting aerodynamic coefficient of the airfoil", data=coef)
