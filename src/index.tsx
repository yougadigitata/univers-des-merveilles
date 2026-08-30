import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Servir tous les fichiers statiques depuis le dossier public
app.use('/*', serveStatic({ root: './' }))

export default app
