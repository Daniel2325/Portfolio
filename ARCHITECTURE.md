# Arquitectura del Proyecto

Documento de referencia sobre las decisiones de arquitectura, estructura de componentes y patrones utilizados en este portfolio.

---

## Visión general

El portfolio es una **Single Page Application (SPA)** de navegación por scroll. No tiene routing basado en URL — cada sección es un `<section>` con un `id` único al que el navbar navega mediante scroll suave.

```
URL única: /
│
├── #home       → Hero + typewriter + bio
├── #expertise  → Áreas de conocimiento
├── #projects   → Grid de proyectos
├── #experience → Timeline laboral
└── #contact    → Formulario + links
```

---

## Árbol de componentes

```
App
├── Navbar
│   └── useActiveSection (hook)
├── Home
│   └── LoadingScreen
├── Expertise
├── Projects
├── Experience
├── Contact
├── Footer
└── ScrollToTop
```

---

## Capa de datos (`src/data/portfolio.js`)

Toda la información del portfolio (bio, expertise, proyectos, experiencias) vive en un único archivo de datos. Los componentes importan estos datos y los renderizan — nunca tienen contenido hardcodeado.

**Ventajas:**
- Una sola edición actualiza el contenido en toda la app
- Los componentes quedan limpios y enfocados en presentación
- Facilita futura migración a un CMS o API

**Exportaciones:**
| Constante | Tipo | Usado en |
|---|---|---|
| `PERSONAL_INFO` | Object | Navbar, Contact, Home |
| `BIO` | String[] | Home |
| `EXPERTISE` | Object[] | Expertise |
| `EXPERIENCES` | Object[] | Experience |
| `PROJECTS` | Object[] | Projects |

---

## Custom Hook: `useActiveSection`

Centraliza la lógica de detección de sección activa que antes estaba dentro de `Navbar`. Escucha el evento `scroll` y determina qué sección ocupa el centro del viewport.

```js
// Antes: lógica duplicable y acoplada al Navbar
// Después: hook reutilizable
const activeSection = useActiveSection();
```

La lista de secciones rastreadas está definida en el hook como `SECTIONS` — actualizar esta constante es suficiente para agregar o quitar secciones del tracker.

---

## Gestión de estilos

El proyecto utiliza **CSS global en un único archivo** (`src/styles/main.css`) sin módulos CSS ni CSS-in-JS. Esta decisión es consistente con el alcance del proyecto.

**Estructura del CSS:**
```
main.css
├── Reset y tipografía global
├── Navbar
├── Cursor personalizado
├── Home section
├── Skill Tags (compartido)
├── Expertise section
├── Projects section
├── Experience section
├── Contact section
├── Scroll To Top button
└── Footer
```

**Variables de color utilizadas** (no formalizadas como custom properties aún):
| Nombre | Valor | Uso |
|---|---|---|
| Cyan primario | `#00ffff` | Acentos, activos, borders |
| Rosa/Magenta | `#ff007f` | Hover, highlights |
| Fondo dark | `#0f2027` | Loading screen, base |
| Texto secundario | `#cfd8dc` | Body text, subtítulos |
| Fondo gradiente | `135deg, #0f2027 → #2c5364` | Body background |

---

## Decisiones técnicas

### ¿Por qué scroll-based navigation en lugar de React Router?

Un portfolio de una página con 5 secciones no necesita router. El scroll navigation es más simple, evita cargas de página y proporciona una experiencia fluida. Agregar React Router añadiría complejidad sin beneficio real para este caso.

### ¿Por qué dos librerías de iconos (FontAwesome + React Icons)?

FontAwesome se usa para el navbar y el modal (iconos de marcas: LinkedIn, React, Docker, etc.) y React Icons en Contact y Projects. Lo ideal sería unificar en una sola librería. La recomendación es migrar todo a `react-icons` en una futura iteración, ya que tiene mayor variedad y mejor tree-shaking.

### ¿Por qué `window.location.href` para el formulario de contacto?

Sin backend, la opción más confiable es abrir el cliente de correo del usuario via `mailto:`. Alternativas a considerar para el futuro:
- **Formspree**: servicio gratuito, sin backend propio, excelente UX
- **EmailJS**: envío directo desde el browser sin backend
- **Backend serverless**: AWS Lambda / Vercel Functions

### ¿Por qué no TypeScript?

El proyecto fue inicializado con Create React App en JavaScript. La migración a TypeScript es recomendable para el futuro dado que el desarrollador tiene experiencia con TS. Se trataría de cambiar extensiones a `.tsx`, agregar los tipos de las exportaciones de `portfolio.js`, y ajustar `tsconfig.json`.

---

## Patrones utilizados

| Patrón | Dónde se aplica |
|---|---|
| Single Source of Truth | `src/data/portfolio.js` |
| Custom Hook | `useActiveSection.js` |
| Render from data | `Expertise`, `Experience`, `Projects` mapean arrays |
| Presentational / Container | `ProjectCard` (presentational) dentro de `Projects` (lógica de filtro) |

---

## Rendimiento

- Google Fonts se carga con `rel="preconnect"` para reducir latencia
- Los assets de imagen (foto de perfil) están en formato JPEG — candidatos a conversión a WebP para mayor eficiencia
- No hay lazy loading implementado — con el tamaño actual del bundle no es necesario, pero es recomendable si se agregan más secciones o imágenes
- El cursor personalizado usa `position: absolute` + scroll offset, lo que puede causar jank en scroll rápido — alternativa: `position: fixed` con solo `clientX/clientY`

---

## Mejoras futuras sugeridas

1. **TypeScript**: migrar toda la base de código
2. **CSS Custom Properties**: formalizar la paleta de colores como variables CSS
3. **Formspree/EmailJS**: reemplazar el mailto del formulario
4. **WebP**: convertir imágenes JPEG/PNG a WebP
5. **React.lazy + Suspense**: code splitting por sección
6. **Testing**: agregar tests de componentes con React Testing Library
7. **Unificar iconos**: migrar todo a `react-icons` y eliminar FontAwesome
8. **Dark/Light mode**: toggle de tema con `prefers-color-scheme`
9. **Animaciones de entrada**: Intersection Observer para animar secciones al scroll

---

*Última actualización: 2026 — Daniel Domínguez*
