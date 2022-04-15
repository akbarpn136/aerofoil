import torch
from os import getcwd

from src.aerofoil.models.arch import AerofoilNN


async def model_cnn():
    model = AerofoilNN()
    filename = f"{getcwd()}/aerofoil.pt"
    model.load_state_dict(
        torch.load(filename, map_location=torch.device("cpu"))
    )
    model.eval()

    return model
