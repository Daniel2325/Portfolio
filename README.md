# Daniel Domínguez — Portfolio

Portfolio profesional desarrollado con React 18, diseñado como carta de presentación para roles de Desarrollador Full Stack con especialización en DevOps y Salesforce.

**Demo en vivo:** [daniel2325.github.io/Portfolio](https://daniel2325.github.io/Portfolio/)

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Inicio rápido](#inicio-rápido)
- [Scripts disponibles](#scripts-disponibles)
- [Despliegue](#despliegue)
- [Personalización](#personalización)

---

## Descripción

Single Page Application (SPA) de navegación por scroll con cinco secciones principales:

| Sección      | Contenido                                          |
|--------------|----------------------------------------------------|
| **Home**     | Presentación con efecto typewriter, bio y tech stack |
| **Expertise**| Áreas de especialización con skill tags            |
| **Projects** | Proyectos destacados con filtro por tipo           |
| **Experience**| Timeline interactivo de experiencia laboral       |
| **Contact**  | Información de contacto y formulario de mensaje    |

---

## Características

- Cursor personalizado con seguimiento de mouse
- Animación typewriter en el título hero
- Pantalla de carga con spinner animado
- Navbar fijo con detección de sección activa por scroll
- Modal DevOps con información de perfil
- Timeline de experiencia expandible/colapsable
- Filtro de proyectos por categoría
- Botón scroll-to-top flotante
- Formulario de contacto funcional (abre cliente de correo)
- Diseño totalmente responsive (mobile-first breakpoint: 768px)
- SEO básico: meta tags, Open Graph, Twitter Cards
- PWA-ready con `manifest.json` personalizado

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.3.1 | Framework UI |
| Create React App | 5.0.1 | Toolchain |
| FontAwesome | 6.6.0 | Iconografía (navbar, hero) |
| React Icons | 5.3.0 | Iconografía (contact, projects) |
| CSS3 | — | Estilos personalizados |
| GitHub Pages | — | Hosting y despliegue |

---

## Estructura del proyecto

```
src/
├── assets/
│   ├── docs/          # CV en PDF
│   └── images/        # Fotos de perfil y logos
├── components/
│   ├── LoadingScreen/ # Pantalla de carga inicial
│   ├── Navbar/        # Navegación fija con detección de sección
│   ├── Footer/        # Pie de página
│   └── ScrollToTop/   # Botón flotante para volver al inicio
├── data/
│   └── portfolio.js   # Fuente única de verdad para todo el contenido
├── hooks/
│   └── useActiveSection.js  # Hook para detectar sección visible
├── sections/
│   ├── Home.js        # Hero section
│   ├── Expertise.js   # Áreas de expertise con skill tags
│   ├── Projects.js    # Grid de proyectos con filtro
│   ├── Experience.js  # Timeline de experiencia laboral
│   └── Contact.js     # Información y formulario de contacto
├── styles/
│   └── main.css       # Estilos globales
└── utils/
    └── scrollTo.js    # Utilidad de scroll suave
```

---

## Inicio rápido

**Prerequisitos:** Node.js 16+ y npm.

```bash
# Clonar el repositorio
git clone https://github.com/Daniel2325/Portfolio.git
cd Portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción optimizado en `/build` |
| `npm test` | Ejecuta los tests con Jest |

---

## Despliegue

El proyecto está configurado para desplegarse en GitHub Pages. El campo `homepage` en `package.json` apunta a la URL de producción.

```bash
# Build y deploy a GitHub Pages
npm run build
# Subir el contenido de /build a la rama gh-pages
```

Recomendado: usar el paquete `gh-pages` para automatizar el proceso.

---

## Personalización

Todo el contenido del portfolio está centralizado en **`src/data/portfolio.js`**. Para actualizar la información:

1. Editar `PERSONAL_INFO` con tus datos de contacto
2. Actualizar `BIO` con tu descripción profesional
3. Modificar `EXPERTISE` con tus áreas de conocimiento y skills
4. Actualizar `EXPERIENCES` con tu historial laboral
5. Editar `PROJECTS` con tus proyectos destacados
6. Reemplazar la foto en `src/assets/images/` y actualizar la referencia en `Home.js`
7. Reemplazar el CV en `src/assets/docs/` y actualizar la referencia en `Home.js`

---

## Arquitectura

Ver [ARCHITECTURE.md](./ARCHITECTURE.md) para decisiones técnicas, diagrama de componentes y guías de contribución.

---

*Desarrollado por Daniel Domínguez — [LinkedIn](https://www.linkedin.com/in/daniel-domínguez-04a866210/)*
