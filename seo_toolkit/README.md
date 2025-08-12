# SEO Toolkit (gratis)

Este toolkit te ayuda a ejecutar tareas SEO sin coste: generación de `robots.txt`, `sitemap.xml`, metadatos, esquemas JSON‑LD, calendario editorial, plantillas de link building y más.

## Contenido
- `robots.txt`: plantilla básica lista para subir a la raíz del dominio.
- `htaccess-cache-snippet.conf` y `nginx-cache-snippet.conf`: caché de estáticos en Apache/Nginx.
- `urls.sample.txt`: ejemplo de lista de URLs para generar sitemap.
- `sitemap_generator.py`: genera `sitemap.xml` desde lista/CSV de URLs.
- `meta_generator.py`: crea títulos, descripciones y H1 sugeridos desde un CSV.
- `keyword_research_template.csv`: plantilla para investigación de palabras clave.
- `editorial_calendar_template.csv`: calendario editorial (4 semanas base).
- `internal_linking_template.csv`: plan de enlaces internos.
- `schema/organization.jsonld`, `schema/localbusiness.jsonld`, `schema/article.jsonld`: esquemas JSON‑LD listos para personalizar.
- `outreach_templates.md`: plantillas de emails para guest posts y menciones.
- `ga4_gsc_checklist.md`: checklist de configuración y seguimiento.
- `image_alt_generator.py`: genera textos ALT sugeridos para imágenes desde CSV.

## Requisitos
- Python 3.8+ para los scripts.

## Uso rápido
1) Generar sitemap
```bash
python3 sitemap_generator.py --input urls.sample.txt --base https://tudominio.com --output sitemap.xml
```

2) Generar metadatos (títulos/descripciones/H1)
- Prepara un CSV con columnas: `url,primary_keyword,secondary_keywords,brand,usp`
```bash
python3 meta_generator.py --input metas.csv --output metas_out.csv --lang es
```

3) ALT de imágenes
- Prepara `alts.csv` con: `filename,context,page_keyword`
```bash
python3 image_alt_generator.py --input alts.csv --output alts_out.csv --lang es
```

4) Esquemas JSON‑LD
- Abre los JSON en `schema/` y reemplaza los campos `REPLACE_WITH_*`.

5) Snippets de caché
- Copia el snippet correspondiente en tu servidor (Apache/Nginx) y recarga el servicio.

6) Plantillas
- Abre los CSV/MD, rellena y úsalo como guía de trabajo.

## Notas
- Mantén `robots.txt` en `/robots.txt` y el `sitemap.xml` en la raíz (`/sitemap.xml`).
- Sube el sitemap a Google Search Console.