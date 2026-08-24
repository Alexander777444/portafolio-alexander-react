**Reporte del Proyecto — Portafolio React + Vite**

**Resumen**: Reporte completo del proyecto que incluye stack, árbol de archivos, componentes, rutas, dependencias, sistema de estilos, assets, animaciones, configuración de build y problemas detectados.

**Stack Tecnológico**
- **React**: ^19.2.7
- **Vite**: ^8.1.0
- **@vitejs/plugin-react**: ^6.0.2
- **ESLint**: ^10.5.0 (con `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- **TypeScript types** (dev): `@types/react` ^19.2.17, `@types/react-dom` ^19.2.3
- **Node**: no declarado en `package.json` (recomendar especificar `engines.node`).

**Árbol de carpetas y archivos principales**
- eslint.config.js
- index.html
- package.json
- package-lock.json
- README.md
- vite.config.js
- .gitignore
- public/icons.svg
- public/favicon.svg
- public/Assets/avatarAlexander.jpg
- public/Assets/CV_VERSION1.2.pdf
- public/Assets/icons/burger.svg
- public/Assets/icons/css.svg
- public/Assets/icons/envelope-black.svg
- public/Assets/icons/envelope-red.svg
- public/Assets/icons/file-icon.svg
- public/Assets/icons/file-pdf.svg
- public/Assets/icons/git.svg
- public/Assets/icons/github.svg
- public/Assets/icons/html5.svg
- public/Assets/icons/js-icon.svg
- public/Assets/icons/laptop-code.svg
- public/Assets/icons/linkedin-black.svg
- public/Assets/icons/linkedin-icon.svg
- public/Assets/icons/location-dot.svg
- public/Assets/icons/monitor-play.png
- public/Assets/icons/notion.svg
- public/Assets/icons/python.svg
- public/Assets/icons/react.svg
- src/main.jsx
- src/App.jsx
- src/components/Avatar.jsx
- src/components/About.jsx
- src/components/BackgroundGlow.jsx
- src/components/Education.jsx
- src/components/Extras.jsx
- src/components/Footer.jsx
- src/components/Hero.jsx
- src/components/ProjectCard.jsx
- src/components/Navbar.jsx
- src/components/Projects.jsx
- src/components/Skills.jsx
- src/hooks/useCursorGlow.js
- src/hooks/useNavbar.js
- src/hooks/useScrollReveal.js
- src/data/education.js
- src/data/extras.js
- src/data/projects.js
- src/data/skills.js
- src/styles/base.css
- src/styles/components.css
- src/styles/hero.css
- src/styles/navigation.css
- src/styles/sections.css

**Lista de componentes y propósito**
- **Avatar** — `src/components/Avatar.jsx`: Muestra avatar del autor y fallback de texto. (export default)
- **About** — `src/components/About.jsx`: Sección "Sobre mí"; usa revelado por scroll. (export default)
- **BackgroundGlow** — `src/components/BackgroundGlow.jsx`: Orbs/efecto de glow de fondo. (export default)
- **Education** — `src/components/Education.jsx`: Timeline/lista de formación (usa `src/data/education`). (export default)
- **Extras** — `src/components/Extras.jsx`: Muestra logros/certificados (usa `src/data/extras`). (export default)
- **Footer** — `src/components/Footer.jsx`: Pie con enlaces de contacto. (export default)
- **Hero** — `src/components/Hero.jsx`: Sección principal con CTA y descarga de CV; integra cursor glow. (export default)
- **ProjectCard** — `src/components/ProjectCard.jsx`: Tarjeta individual de proyecto (título, descripción, tags). (export default)
- **Navbar** — `src/components/Navbar.jsx`: Barra de navegación anclada con control de menú y sección activa. (export default)
- **Projects** — `src/components/Projects.jsx`: Sección que mapea `src/data/projects` y renderiza `ProjectCard`. (export default)
- **Skills** — `src/components/Skills.jsx`: Lista/marquee de iconos de tecnologías (usa `src/data/skills`). (export default)

**Páginas / Rutas existentes**
- No se detecta `react-router` ni carpeta `src/pages`.
- Tipo de navegación: Single Page Application con anclas internas (`href="#seccion"`) manejadas por la `Navbar`.

**Dependencias (`package.json`)**
- **dependencies**:
  - react: ^19.2.7
  - react-dom: ^19.2.7
- **devDependencies**:
  - @eslint/js: ^10.0.1
  - @types/react: ^19.2.17
  - @types.react-dom: ^19.2.3
  - @vitejs/plugin-react: ^6.0.2
  - eslint: ^10.5.0
  - eslint-plugin-react-hooks: ^7.1.1
  - eslint-plugin-react-refresh: ^0.5.3
  - globals: ^17.6.0
  - vite: ^8.1.0

**Sistema de estilos**
- Enfoque: CSS globales importados desde `src/main.jsx`. No se usan CSS Modules ni frameworks tipo Tailwind.
- Archivos principales:
  - `src/styles/base.css`
  - `src/styles/navigation.css`
  - `src/styles/hero.css`
  - `src/styles/components.css`
  - `src/styles/sections.css`
- Variables CSS principales detectadas:
  - `--fondo`, `--fondo-alt`, `--superficie`, `--borde`, `--bg-deep`
  - `--glass-bg`, `--glass-bg-strong`, `--glass-border`
  - `--acento`, `--acento-oscuro`, `--acento-brillo`, `--red`, `--red-deep`
  - `--texto`, `--texto-apagado`, `--texto-tenue`
  - `--fuente-mono`, `--fuente-sans`, `--radio`, `--radius-lg`, `--radius-md`, `--alto-nav`, `--transicion`
- Breakpoints / responsive: media queries alrededor de `768px`, `920px`, `640px`, `480px`. Uso de `clamp()` para tipografías en `hero`.

**Manejo de assets e imágenes**
- Ubicación: `public/Assets` y `public/Assets/icons`.
- Formatos: `svg`, `jpg` (avatar), `png` (monitor-play), `pdf` (CV).
- Patrón de uso: assets en `public` referenciados desde componentes y CSS mediante rutas relativas/absolutas.
- Lazy loading: no se detectó `loading="lazy"` ni `import()` dinámico para imágenes.
- Observación: rutas inconsistentes (`/avatarAlexander.jpg`, `../Assets/avatarAlexander.jpg`, `../../Assets/icons/...`) — puede fallar tras build.

**Librerías de animación**
- No hay librerías externas (framer-motion, gsap, etc.).
- Animaciones implementadas con CSS keyframes y hooks personalizados:
  - Keyframes: `drift-orb-*`, `scrollLeft`, `scrollRight`, `pulsarScroll`, `aparecerArriba`.
  - Hooks: `useCursorGlow.js` (usa `requestAnimationFrame` y CSS variables), `useScrollReveal.js` (IntersectionObserver), `useNavbar.js` (gestión de estado/navegación).

**Configuración de build relevante**
- `vite.config.js`: configuración mínima — `export default defineConfig({ plugins: [react()] })` (sin alias, base o configuraciones personalizadas).
- `index.html`: meta básica (`charset`, `viewport`, `title`) y enlace a favicon cuyo `href` parece usar una ruta de sistema de archivos (`../portafolio-react/public/Assets/icons/laptop-code.svg`) — corregir a `/Assets/icons/laptop-code.svg`.
- `scripts` en `package.json`: `dev`, `build`, `preview`, `lint`.

**Code smells, TODOs y problemas detectados**
1. **Rutas de imágenes inconsistentes / avatar** — `src/components/Avatar.jsx` usa `src="/avatarAlexander.jpg"` mientras el archivo está en `public/Assets/avatarAlexander.jpg`.
   - Recomendación: usar rutas consistentes `/Assets/avatarAlexander.jpg` o importar el activo desde `src` para que Vite gestione la referencia.
2. **Favicon con ruta incorrecta** — `index.html` contiene `../portafolio-react/public/Assets/icons/laptop-code.svg`.
   - Recomendación: cambiar a `/Assets/icons/laptop-code.svg`.
3. **Import redundante en `src/main.jsx`** — posible import innecesario de `Footer.jsx`.
   - Recomendación: eliminar import si no hay side effects.
4. **Valor de `height` inusualmente grande en CSS** — `.nav-social a { height: 280px; }` probablemente es un typo.
   - Recomendación: ajustar a valor correcto (p. ej. `28px`).
5. **Keys no únicas al mapear tags en `ProjectCard`** — `key={tag}` puede colisionar.
   - Recomendación: usar `${tag}-${index}` o un id único.
6. **Icon masks en CSS con rutas relativas** — `../../Assets/icons/*.svg` puede romperse tras build.
   - Recomendación: usar rutas públicas `/Assets/icons/...` o importar en JS/CSS con el pipeline de Vite.
7. **No se declara versión mínima de Node** en `package.json`.
   - Recomendación: agregar `"engines": { "node": ">=18" }` si se requiere una versión mínima.
8. **Metatags SEO ausentes (mejora opcional)** — añadir `meta description`, `theme-color` y Open Graph.

**Acciones sugeridas siguientes**
- Corregir rutas de assets y favicon.
- Añadir `loading="lazy"` a imágenes grandes (avatar o previews) para optimizar carga.
- Corregir CSS (`height` typo) y claves en listas.
- Considerar añadir `engines.node` en `package.json` y/o un README con requisitos.
- Si se desea navegación multi-página, integrar `react-router`.

----
Reporte generado automáticamente y guardado en la raíz del proyecto como `REPORT_PORTAFOLIO.md`.
