#!/usr/bin/env python3
"""
Genera un sitemap.xml desde una lista de rutas (txt) o un CSV con columnas:
- url (absoluta o relativa)
- lastmod (YYYY-MM-DD opcional)
- changefreq (opcional, ej: monthly)
- priority (opcional, ej: 0.8)

Uso:
  python3 sitemap_generator.py --input urls.txt --base https://tudominio.com --output sitemap.xml
  python3 sitemap_generator.py --input urls.csv --output sitemap.xml

Si `--base` se proporciona, las rutas relativas se convertirán a URLs absolutas.
"""
from __future__ import annotations
import argparse
import csv
import datetime as dt
import sys
from pathlib import Path
from typing import Iterable, List, Dict
from xml.sax.saxutils import escape


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generador simple de sitemap.xml")
    parser.add_argument("--input", required=True, help="Ruta del archivo de entrada (txt o csv)")
    parser.add_argument("--output", default="sitemap.xml", help="Archivo de salida (por defecto sitemap.xml)")
    parser.add_argument("--base", default="", help="Base absoluta para rutas relativas, ej: https://tudominio.com")
    return parser.parse_args()


def normalize_url(url: str, base: str) -> str:
    url = url.strip()
    if not url:
        return ""
    if url.startswith("http://") or url.startswith("https://"):
        return url.rstrip()
    if base:
        if not url.startswith("/"):
            url = "/" + url
        return base.rstrip("/") + url
    return url


def read_input(input_path: Path) -> List[Dict[str, str]]:
    rows: List[Dict[str, str]] = []
    if input_path.suffix.lower() == ".csv":
        with input_path.open("r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                rows.append({k.strip(): (v or "").strip() for k, v in row.items()})
    else:
        with input_path.open("r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                rows.append({"url": line})
    return rows


def is_valid_date(value: str) -> bool:
    try:
        dt.date.fromisoformat(value)
        return True
    except Exception:
        return False


def generate_sitemap(url_rows: Iterable[Dict[str, str]], base: str) -> str:
    parts: List[str] = []
    parts.append('<?xml version="1.0" encoding="UTF-8"?>')
    parts.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

    for row in url_rows:
        loc = normalize_url(row.get("url", ""), base)
        if not loc:
            continue
        parts.append("  <url>")
        parts.append(f"    <loc>{escape(loc)}</loc>")
        lastmod = row.get("lastmod", "").strip()
        if is_valid_date(lastmod):
            parts.append(f"    <lastmod>{lastmod}</lastmod>")
        changefreq = row.get("changefreq", "").strip()
        if changefreq:
            parts.append(f"    <changefreq>{escape(changefreq)}</changefreq>")
        priority = row.get("priority", "").strip()
        if priority:
            parts.append(f"    <priority>{escape(priority)}</priority>")
        parts.append("  </url>")

    parts.append("</urlset>")
    return "\n".join(parts) + "\n"


def main() -> int:
    args = parse_args()
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"[ERROR] No existe el archivo de entrada: {input_path}", file=sys.stderr)
        return 1

    rows = read_input(input_path)
    xml = generate_sitemap(rows, args.base)
    Path(args.output).write_text(xml, encoding="utf-8")
    print(f"[OK] Sitemap generado: {args.output} ({len(rows)} entradas)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())