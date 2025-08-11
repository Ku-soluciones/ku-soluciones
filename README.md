# KU Soluciones

Sitio web corporativo con chatbot inteligente para automatización de procesos y soluciones digitales.

## Setup para desarrollo

**Prerequisites:** Node.js 18+

1. Clona el repositorio
2. Instala dependencias: `npm install`
3. Copia el archivo de ejemplo: `cp .env.example .env`
4. Agrega tu API key de DeepSeek en `.env`
5. Ejecuta el proyecto: `npm run dev`

## Variables de entorno

- `VITE_DEEPSEEK_API_KEY`: API key de DeepSeek para el chatbot

## Deployment

Las variables de entorno se configuran en:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables  
- **GitHub Actions**: Repository Settings → Secrets

⚠️ **Importante**: Nunca commitees el archivo `.env` al repositorio. Usa `.env.example` como plantilla.
