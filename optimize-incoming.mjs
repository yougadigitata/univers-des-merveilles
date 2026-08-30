/**
 * Optimisation ponctuelle des nouvelles images (dossier incoming/)
 * → WebP, largeur max 1200px, qualité 80
 */
import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = './incoming';
const outputDir = './public/images/produits';

const files = readdirSync(inputDir).filter(f =>
  ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
);

console.log(`📸 Optimisation de ${files.length} nouvelles images...`);

for (const file of files) {
  const name = basename(file, extname(file));
  const outputPath = join(outputDir, `${name}.webp`);
  const info = await sharp(join(inputDir, file))
    .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(outputPath);
  console.log(`  ✅ ${file} → ${name}.webp (${(info.size / 1024).toFixed(0)} Ko)`);
}

console.log('✨ Terminé !');
