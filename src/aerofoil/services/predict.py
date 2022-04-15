from torchvision.transforms import transforms

from src.aerofoil.models.arch import AerofoilNN
from src.aerofoil.services.process import ImageProcessing


class AirfoilPrediction:
    def predict(model: AerofoilNN, angle: float, px: list[float], py: list[float]):
        transform = transforms.Compose([
            transforms.Resize(128),
            transforms.ToTensor(),
            transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
        ])

        img = ImageProcessing.sdf(angle, px, py, prediction=True)
        img = transform(img).unsqueeze(0)
        pred = model(img)
        pred = pred.detach().cpu().numpy() * 0.5 + 0.5  # Denormalize
        coef = dict(cl=pred[0, 1].item(), cd=pred[0,1].item(), cm=pred[0, 2].item())

        return coef
