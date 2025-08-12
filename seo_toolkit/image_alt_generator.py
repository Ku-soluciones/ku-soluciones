#!/usr/bin/env python3
"""
Genera ALT text sugeridos desde un CSV con columnas:
- filename (ej: hero-servicio.jpg)
- context (breve contexto de la imagen)
- page_keyword (keyword de la página)

Uso:
  python3 image_alt_generator.py --input alts.csv --output alts_out.csv --lang es
"""
from __future__ import annotations
import argparse
import csv
from pathlib import Path
from typing import Dict


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generador de ALT text para imágenes")
    parser.add_argument("--input", required=True, help="CSV de entrada")
    parser.add_argument("--output", default="alts_out.csv", help="CSV de salida")
    parser.add_argument("--lang", default="es", choices=["es", "en"], help="Idioma")
    return parser.parse_args()


def build_alt_es(filename: str, context: str, keyword: str) -> str:
    base = context.strip() or keyword.strip() or filename.rsplit('.', 1)[0]
    # Capitaliza primera letra y evita palabras vacías
    alt = base[:1].upper() + base[1:]
    return alt


def build_alt_en(filename: str, context: str, keyword: str) -> str:
    base = context.strip() or keyword.strip() or filename.rsplit('.', 1)[0]
    return base


def main() -> int:
    args = parse_args()
    input_path = Path(args.input)
    if not input_path.exists():
        raise SystemExit(f"No existe el archivo: {input_path}")

    rows_out = []
    with input_path.open("r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            filename = (row.get("filename", "").strip())
            context = (row.get("context", "").strip())
            keyword = (row.get("page_keyword", "").strip())
            if args.lang == "es":
                alt = build_alt_es(filename, context, keyword)
            else:
                alt = build_alt_en(filename, context, keyword)
            rows_out.append({"filename": filename, "alt": alt})

    with Path(args.output).open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["filename", "alt"])
        writer.writeheader()
        writer.writerows(rows_out)

    print(f"[OK] ALT sugeridos generados: {args.output} ({len(rows_out)} filas)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())