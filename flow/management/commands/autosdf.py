import os

import pandas as pd
import multiprocessing
from functools import partial
from django.conf import settings
from django.core.management import BaseCommand, CommandError

from flow.services.airfoil import AirfoilGenerator


class Command(BaseCommand):
    help = "Generate Airfoil SDF Image from airfoil coordinate."

    def add_arguments(self, parser):
        parser.add_argument("airfoilname",
                            metavar="Airfoil",
                            type=str,
                            help="Airfoil name code such as naca2412")
        parser.add_argument("filename",
                            metavar="Filename",
                            type=str,
                            help="Airfoil coordinate file in csv from current directory")
        parser.add_argument("alpha",
                            metavar="Alpha",
                            nargs="+",
                            type=float,
                            help="define range of alpha, ex: 10 20 30...")

    def handle(self, *args, **options):
        alpha = options.get("alpha")
        name = options.get("filename")
        airfoil = options.get("airfoilname")
        curr_dir = settings.BASE_DIR
        coord_file = os.path.join(curr_dir, name)

        try:
            df = pd.read_csv(coord_file, delim_whitespace=True)
            df.columns = ["x", "y"]
            coord_points = df.to_dict("records")

            # Generate many SDF for airfoil using multiprocessing
            mpool = multiprocessing.Pool()
            first_arg = partial(work_on_sdf, points=coord_points, airfoil=airfoil)
            mpool.map(first_arg, alpha)

        except FileNotFoundError as err:
            raise CommandError(str(err))

        self.stdout.write(self.style.SUCCESS("Successfully generate SDF."))


def work_on_sdf(alpha, points, airfoil):
    AirfoilGenerator.sdf_image(alpha, 1024, 2, points, f"{airfoil}_{alpha}", gen_sdf=True, save=True)
