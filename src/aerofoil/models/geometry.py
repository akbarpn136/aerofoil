from pydantic import BaseModel, validator


class Geometry(BaseModel):
    angle: float
    x: list[float]
    y: list[float]

    @validator("angle")
    def set_angle_range(cls, val):
        if val < -20.0 or val > 20.0:
            raise ValueError("Angle must be between -20 and 20 degree.")

        return val

    @validator("x")
    def set_x_range(cls, val):
        if min(val) < 0 or max(val) > 1:
            raise ValueError("Each x coordinate must be in range 0 to 1")

        return val
