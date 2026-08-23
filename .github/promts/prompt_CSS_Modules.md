# CSS Modules — Migración por archivo

Ejecuta **un componente a la vez**, en este orden. No expliques, no resumas — solo código. Al terminar cada componente, pasa al siguiente sin pausas.

## Reglas fijas (aplican a todos)
- kebab-case → camelCase (`.hero-tag` → `.heroTag`)
- `import styles from './X.module.css'` en cada `.jsx`
- Clases condicionales: `` `${styles.a} ${cond ? styles.b : ''}` ``
- NO tocar: `icon`, `icon--*`, `btn*`, `glass-card`, `seccion*`, `skip-link` (son globales)
- NO modularizar `.revelar` / `.visible` (usadas por `classList.add` en `useScrollReveal.js`)
- 0 cambios visuales — solo mover código
- Rama: `feature/fase1-foundation`

---

## 1. `src/components/Hero.jsx` + `Hero.module.css`

**Mover desde** `src/styles/hero.css` completo + keyframes `pulsarScroll`/`aparecerArriba` (hoy en `sections.css`) + reglas `.hero-*` de los media 768px/480px (hoy en `sections.css`).

**Renombrar:** `cursor-glow`→`cursorGlow`, `is-active`→`isActive`, `hero-content`→`heroContent`, `hero-info`→`heroInfo`, `hero-tag`→`heroTag`, `hero-nombre`→`heroNombre`, `hero-nombre-highlight`→`heroNombreHighlight`, `hero-ubicacion`→`heroUbicacion`, `hero-botones`→`heroBotones`, `hero-avatar`→`heroAvatar`, `avatar-placeholder`→`avatarPlaceholder`, `hero-scroll-hint`→`heroScrollHint`, `scroll-line`→`scrollLine`.

**Ojo:** conservar `<img>` inmediatamente antes de `.avatarPlaceholder` en el JSX (selector `img:not([src=""]) + .avatarPlaceholder` depende del orden). No tocar el `<h1 className="hero-nombre">` ya existente.

---

## 2. `src/components/Skills.jsx` + `Skills.module.css`

**Mover desde** `src/styles/components.css`: bloque `marquee-*`/`tech-chip`/`tech-svg` + keyframes `scrollLeft`/`scrollRight` + su media `prefers-reduced-motion`.

**Renombrar:** `marquee-stack`→`marqueeStack`, `marquee-row`→`marqueeRow`, `marquee-track`→`marqueeTrack`, `tech-chip`→`techChip`, `tech-svg`→`techSvg`, `marquee-row--left`→`marqueeRowLeft`, `marquee-row--right`→`marqueeRowRight`.

**Eliminar (CSS muerto, no usar en ningún componente):** `.tech-grid`, `.tech-nombre` (en `sections.css`).

---

## 3. `src/components/Education.jsx` + `Education.module.css`

**Mover desde** `src/styles/sections.css`: bloque `linea-tiempo`/`tiempo-*` + regla `.tiempo-cabecera` del media 640px.

**Renombrar:** `linea-tiempo`→`lineaTiempo`, `tiempo-item`→`tiempoItem`, `tiempo-punto`→`tiempoPunto`, `tiempo-contenido`→`tiempoContenido`, `tiempo-cabecera`→`tiempoCabecera`, `tiempo-titulo`→`tiempoTitulo`, `tiempo-sub`→`tiempoSub`, `tiempo-desc`→`tiempoDesc`, `tiempo-badge`→`tiempoBadge`.

---

## 4. `src/components/Extras.jsx` + `Extras.module.css`

**Mover desde** `src/styles/sections.css`: bloque `extra-*` + reglas `.extra-grid` de los media 768px/480px.

**Renombrar:** `extra-grid`→`extraGrid`, `extra-card`→`extraCard`, `extra-img-wrap`→`extraImgWrap`, `extra-img`→`extraImg`, `extra-img-placeholder`→`extraImgPlaceholder`, `extra-cuerpo`→`extraCuerpo`, `extra-titulo`→`extraTitulo`, `extra-desc`→`extraDesc`.

---

## 5. `src/components/Footer.jsx` + `Footer.module.css`

**Mover desde** `src/styles/sections.css`: bloque `pie-*` completo.

**Renombrar:** `pie-interior`→`pieInterior`, `pie-nombre`→`pieNombre`, `pie-links`→`pieLinks`, `pie-copia`→`pieCopia`. (`pie` se queda igual.)

---

## 6. `src/components/Projects.jsx`, `src/components/ProjectCard.jsx` + `Projects.module.css`

**Mover desde** `src/styles/sections.css`: bloque `projects-grid`/`project-*` completo (incluye clases hoy sin usar en JSX: `project-img-wrap`, `project-body`, `project-links` — consérvalas, se conectan en otra fase) + reglas `.projects-grid` de los media 768px/920px/640px.

**Renombrar:** `projects-grid`→`projectsGrid`, `project-card`→`projectCard`, `project-img-wrap`→`projectImgWrap`, `project-img`→`projectImg`, `project-img-placeholder`→`projectImgPlaceholder`, `project-body`→`projectBody`, `project-title`→`projectTitle`, `project-sub`→`projectSub`, `project-desc`→`projectDesc`, `project-tags`→`projectTags`, `project-chip`→`projectChip`, `project-links`→`projectLinks`.

**Eliminar (CSS muerto):** `.btn-sm` (en `components.css`), `.etiqueta` (en `sections.css`).

---

## 7. Cierre — solo después de los 6 anteriores

**`src/main.jsx`** — reemplazar todos los imports de CSS + el import muerto de `Footer.jsx` por:
```jsx
import './styles/global.css'
```

**Eliminar archivos:** `src/styles/base.css`, `navigation.css`, `hero.css`, `components.css`, `sections.css`

**Verificar:** `npm run build` sin errores; `npm run dev` visualmente idéntico al estado previo.
