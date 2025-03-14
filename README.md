# Proyecto Cultural

Este proyecto cultural tiene como objetivo promover la diversidad cultural y la interacción entre artistas y audiencias, creando un espacio donde el arte y la cultura se encuentren de manera orgánica y natural. El proyecto incluye secciones de circulación artística, intercambios culturales y sesiones virtuales.

## Características

- **Circulación Artística**: Presentación de artistas y sus actividades.
- **Intercambios Culturales**: Conexión entre artistas y comunidades en diferentes ciudades.
- **Sesiones Virtuales**: Contenido multimedia de eventos culturales.
- **Diseño Responsivo**: Adaptado para diferentes dispositivos y tamaños de pantalla.
- **Optimización de Imágenes**: Uso de `sharp` para optimizar imágenes.

## Tecnologías Implementadas

- **Astro**: Framework principal para la construcción del sitio.
- **Tailwind CSS**: Utilizado para el diseño y la estilización.
- **Sharp**: Para la optimización de imágenes.

## Comandos de Desarrollo y Despliegue

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio de producción en `./dist/`    |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda usando la CLI de Astro               |

## Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── .astro/
│   ├── collections/
│   ├── content-assets.mjs
│   ├── content-modules.mjs
│   ├── content.d.ts
│   ├── data-store.json
│   ├── settings.json
│   └── types.d.ts
├── .gitignore
├── .vscode/
│   ├── extensions.json
│   └── launch.json
├── astro.config.mjs
├── Estructura We juntxs
├── optimize-image.js
├── package.json
├── public/
│   └── imagenes/
├── README.md
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Circulacion.astro
│   │   ├── Hero.astro
│   │   ├── Intercambios.astro
│   │   ├── SesionesVirtuales.astro
│   │   └── Welcome.astro
│   ├── data/
│   │   ├── artistas.ts
│   │   └── ciudades.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── acercade/
│   │   │   └── index.astro
│   │   ├── circulacion/
│   │   │   ├── index.astro
│   │   │   ├── laura/
│   │   │   │   └── dialogos-del-agua.astro
│   │   │   ├── maria/
│   │   │   │   ├── micro-ficciones-1.astro
│   │   │   │   ├── micro-ficciones-2.astro
│   │   │   │   └── micro-ficciones-con-agueros-encuentro2.astro
│   │   │   ├── sandra/
│   │   │   │   └── memorias-de-elena-y-el-oro.astro
│   │   │   └── [artistaId]/
│   │   │       └── [actividadId].astro
│   │   ├── index.astro
│   │   ├── intercambios/
│   │   │   ├── bogota/
│   │   │   │   ├── taller-danzar-la-vida.astro
│   │   │   │   ├── taller-de-art-of-hosing.astro
│   │   │   │   └── visita-a-proyectos.astro
│   │   │   ├── index.astro
│   │   │   ├── medellin/
│   │   │   │   ├── actividad-en-plato.astro
│   │   │   │   ├── visita-el-faro.astro
│   │   │   │   └── visita-motivando-a-las-gyal.astro
│   │   │   └── [ciudadId].astro
│   │   ├── mockups.astro
│   │   └── sesiones-virtuales/
│   │       └── index.astro
├── tailwind.config.mjs
└── tsconfig.json

