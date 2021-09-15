import os

import pandas as pd
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

            for al in alpha:
                AirfoilGenerator.sdf_image(al, 128, 2, coord_points, f"{airfoil}_{al}", gen_sdf=True, save=True)
        except FileNotFoundError as err:
            raise CommandError(str(err))

        self.stdout.write(self.style.SUCCESS('Successfully closed poll "%s"' % coord_file))
