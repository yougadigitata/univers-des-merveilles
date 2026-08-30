/**
 * Script de build simple pour site statique
 * Copie public/ → dist/ sans transformation
 */
import { cpSync, mkdirSync, rmSync } from 'fs'
import { resolve } from 'path'

const srcDir = resolve('public')
const distDir = resolve('dist')

// Nettoyage
console.log('🧹 Nettoyage du dossier dist...')
try {
  rmSync(distDir, { recursive: true, force: true })
} catch (e) {}

// Copie
mkdirSync(distDir, { recursive: true })
console.log('📦 Copie de public/ → dist/...')
cpSync(srcDir, distDir, { recursive: true })

console.log('✅ Build terminé !')
console.log(`📁 Fichiers dans dist/ :`)

import { readdirSync, statSync } from 'fs'
function listDir(dir, indent = '') {
  try {
    const entries = readdirSync(dir)
    entries.forEach(e => {
      const p = `${dir}/${e}`
      const s = statSync(p)
      if (s.isDirectory()) {
        console.log(`${indent}📂 ${e}/`)
        listDir(p, indent + '  ')
      } else {
        const kb = Math.round(s.size / 1024 * 10) / 10
        console.log(`${indent}📄 ${e} (${kb} KB)`)
      }
    })
  } catch(e) {}
}
listDir(distDir)
