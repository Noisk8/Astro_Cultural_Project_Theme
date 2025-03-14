import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = path.join(process.cwd(), 'Diseño sin título.png');
const outputPath = path.join(process.cwd(), 'public/imagenes/background.webp');

// Asegúrate de que el directorio existe
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Optimiza la imagen
sharp(inputPath)
  .resize(1920) // Redimensiona a un ancho máximo de 1920px
  .webp({ quality: 80 }) // Convierte a WebP con 80% de calidad
  .toFile(outputPath)
  .then(info => {
    console.log('Imagen optimizada con éxito:', info);
    console.log(`Tamaño original: ${fs.statSync(inputPath).size / 1024} KB`);
    console.log(`Nuevo tamaño: ${info.size / 1024} KB`);
  })
  .catch(err => console.error('Error al optimizar la imagen:', err));
