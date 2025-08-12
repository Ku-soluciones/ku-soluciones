#!/usr/bin/env python3
"""
Genera títulos, descripciones y H1 sugeridos desde un CSV con columnas:
- url
- primary_keyword
- secondary_keywords (separadas por "|")
- brand (opcional)
- usp (propuesta de valor breve, opcional)

Uso:
  python3 meta_generator.py --input metas.csv --output metas_out.csv --lang es

Reglas (es):
- Título: 60–65 chars. Formato: "{primary} | {beneficio/USP} | {brand}" si hay brand.
- Descripción: 150–160 chars, intención + beneficio + diferenciador + CTA.
- H1: keyword principal natural.
"""
from __future__ import annotations
import argparse
import csv
from pathlib import Path
from typing import List, Dict


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generador de metadatos SEO")
    parser.add_argument("--input", required=True, help="CSV de entrada")
    parser.add_argument("--output", default="metas_out.csv", help="CSV de salida")
    parser.add_argument("--lang", default="es", choices=["es", "en"], help="Idioma de plantillas")
    return parser.parse_args()


def clamp_text(text: str, max_len: int) -> str:
    text = (text or "").strip()
    if len(text) <= max_len:
        return text
    # evita cortar palabras abruptamente
    cut = text[: max_len - 1]
    last_space = cut.rfind(" ")
    return (cut if last_space == -1 else cut[:last_space]) + "…"


def build_title_es(primary: str, usp: str, brand: str) -> str:
    parts: List[str] = []
    if primary:
        parts.append(primary)
    if usp:
        parts.append(usp)
    if brand:
        parts.append(brand)
    return " | ".join(parts)


def build_desc_es(primary: str, secondary: List[str], usp: str) -> str:
    sec = (secondary[0] if secondary else "").strip()
    base = f"{primary}. {usp}. " if usp else f"{primary}. "
    extra = f"Incluye {sec}. " if sec else ""
    cta = "Descubre más y empieza hoy."
    return base + extra + cta


def build_h1(primary: str) -> str:
    return primary


def process_row(row: Dict[str, str], lang: str) -> Dict[str, str]:
    primary = (row.get("primary_keyword", "").strip())
    secondary = [s.strip() for s in (row.get("secondary_keywords", "").split("|") if row.get("secondary_keywords") else []) if s.strip()]
    brand = row.get("brand", "").strip()
    usp = row.get("usp", "").strip()

    if lang == "es":
        title_raw = build_title_es(primary, usp, brand)
        desc_raw = build_desc_es(primary, secondary, usp)
    else:
        # versión simple en inglés
        title_raw = " | ".join([t for t in [primary, usp, brand] if t])
        sec = (secondary[0] if secondary else "")
        desc_raw = f"{primary}. {usp}. " + (f"Includes {sec}. " if sec else "") + "Learn more and get started today."

    title = clamp_text(title_raw, 65)
    description = clamp_text(desc_raw, 160)
    h1 = build_h1(primary)

    return {
        "url": row.get("url", "").strip(),
        "primary_keyword": primary,
        "secondary_keywords": " | ".join(secondary),
        "title": title,
        "description": description,
        "h1": h1,
    }


def main() -> int:
    args = parse_args()
    input_path = Path(args.input)
    if not input_path.exists():
        raise SystemExit(f"No existe el archivo: {input_path}")

    rows_in: List[Dict[str, str]] = []
    with input_path.open("r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows_in.append(row)

    rows_out: List[Dict[str, str]] = []
    for row in rows_in:
        rows_out.append(process_row(row, args.lang))

    fieldnames = ["url", "primary_keyword", "secondary_keywords", "title", "description", "h1"]
    with Path(args.output).open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows_out)

    print(f"[OK] Metadatos generados: {args.output} ({len(rows_out)} filas)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())