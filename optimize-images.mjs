/**
 * Script d'optimisation des images
 * Convertit les images en WebP et les compresse
 */
import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = './public/images/produits';
const outputDir = './public/images/produits';

const extensions = ['.jpg', '.jpeg', '.png'];

const files = readdirSync(inputDir).filter(f => {
  const ext = extname(f).toLowerCase();
  return extensions.includes(ext) && !f.includes('.webp');
});

console.log(`📸 Optimisation de ${files.length} images...`);

for (const file of files) {
  const inputPath = join(inputDir, file);
  const name = basename(file, extname(file));
  const outputPath = join(outputDir, `${name}.webp`);

  try {
    await sharp(inputPath)
      .resize(900, 900, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath);

    console.log(`  ✅ ${file} → ${name}.webp`);
  } catch (err) {
    console.error(`  ❌ Erreur pour ${file}:`, err.message);
  }
}

console.log('\n✨ Optimisation terminée !');
