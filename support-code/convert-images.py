from PIL import Image
import os

__location__ = os.path.join(os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__))), "..")
ingest_path = os.path.join(__location__, "images-import")
destination_path = os.path.join(__location__, "images/homelab")

for file_names in os.listdir(ingest_path):
    file_name_only = file_names.split(".")[0]
    image = Image.open(os.path.join(ingest_path, file_names))  # Open image
    image.save(os.path.join(destination_path, file_name_only + ".webp"), format="webp")
    

