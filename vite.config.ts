import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Plugin personnalisé pour copier les fichiers sans hashing
function copyStaticFiles() {
  return {
    name: 'copy-static-files',
    closeBundle() {
      // Copier js/, css/, et images/ vers dist/
      const dirs = ['js', 'css', 'images']
      dirs.forEach(dir => {
        copyDirSync(join('public', dir), join('dist', dir))
      })
    }
  }
}

function copyDirSync(src: string, dest: string) {
  try {
    mkdirSync(dest, { recursive: true })
    const entries = readdirSync(src)
    entries.forEach(entry => {
      const srcPath = join(src, entry)
      const destPath = join(dest, entry)
      const stat = statSync(srcPath)
      if (stat.isDirectory()) {
        copyDirSync(srcPath, destPath)
      } else {
        copyFileSync(srcPath, destPath)
      }
    })
  } catch (e) {
    // Ignorer si le répertoire n'existe pas
  }
}

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: 'public/index.html',
        produits: 'public/produits.html',
        produit: 'public/produit.html',
        apropos: 'public/a-propos.html',
        contact: 'public/contact.html',
      },
      output: {
        // Garder les chemins d'assets tels quels
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      }
    }
  },
  publicDir: false,
  plugins: [copyStaticFiles()]
})
