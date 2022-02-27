import os
import torch
from torch import nn
from django.conf import settings
from torchvision.transforms import transforms


class AerofoilNN(nn.Module):
    def __init__(self):
        super(AerofoilNN, self).__init__()

        self.lossList = []
        self.valid_lossList = []

        self.conv1 = nn.Sequential(
            nn.Conv2d(3, 10, 13),
            nn.BatchNorm2d(10),
            nn.MaxPool2d(2, 2),
            nn.ReLU()
        )

        self.conv2 = nn.Sequential(
            nn.Conv2d(10, 20, 7),
            nn.BatchNorm2d(20),
            nn.MaxPool2d(2, 2),
            nn.ReLU()
        )

        self.conv3 = nn.Sequential(
            nn.Conv2d(20, 40, 7),
            nn.BatchNorm2d(40),
            nn.MaxPool2d(2, 2),
            nn.ReLU()
        )

        self.conv4 = nn.Sequential(
            nn.Conv2d(40, 80, 5),
            nn.BatchNorm2d(80),
            nn.MaxPool2d(2, 2),
            nn.ReLU()
        )

        self.fc1 = nn.Sequential(
            nn.Linear(720, 400),
            nn.ReLU(),
        )

        self.fc2 = nn.Linear(400, 3)

    def forward(self, x):
        f1 = self.conv1(x)
        f2 = self.conv2(f1)
        f3 = self.conv3(f2)
        f4 = self.conv4(f3)
        f4_flat = f4.view(f4.size(0), -1)
        f5 = self.fc1(f4_flat)

        return self.fc2(f5)


def get_prediction(img=None):
    transform = transforms.Compose([
        transforms.Resize(128),
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])

    model = AerofoilNN()
    filename = os.path.join(settings.STATIC_ROOT, "cnn", "aerocnn.pt")
    model.load_state_dict(
        torch.load(filename, map_location=torch.device('cpu'))
    )
    model.eval()

    if img:
        img.save(os.path.join(settings.STATIC_ROOT, "cnn", "naca0012.jpg"))
        img = transform(img).unsqueeze(0)
        pred = model(img)
        pred = pred.detach().cpu().numpy() * 0.5 + 0.5  # Denormalize

        print(pred[0])
