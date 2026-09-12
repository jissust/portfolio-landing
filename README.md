# Mi Portfolio — Landing Page

Esqueleto de proyecto React (Vite) + Tailwind CSS v4, listo para agregarle diseño.

## Stack

- **React 19** + **Vite** (última versión de ambos al momento de generar el proyecto)
- **Tailwind CSS v4** (vía `@tailwindcss/vite`, sin `tailwind.config.js` clásico: los tokens
  del design system viven en `src/index.css` dentro de `@theme`)
- **react-router-dom** para el ruteo entre pantallas
- **react-i18next** + **i18next-browser-languagedetector** para multi-idioma (es/en)
- Alias `@` → `src/` (configurado en `vite.config.js` y `jsconfig.json`)

## Instalación

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/
    layout/       Navbar (fijo), Footer, Layout (wrapper de Navbar+contenido+Footer)
    sections/     Bloques de la landing: Hero, About, Skills, Experience, Projects, Contact
    ui/           Componentes chicos reutilizables: LanguageSwitcher, SocialLinks
  pages/          Home.jsx (arma la landing con los bloques), Test.jsx (pantalla de ejemplo), NotFound.jsx
  data/           Mocks en JSON: skills.json, experience.json, projects.json, social.json
  hooks/          useSkills, useExperience, useProjects, useSocialLinks (leen los mocks;
                  el día de mañana se puede cambiar la implementación por un fetch a una API
                  sin tocar los componentes)
  i18n/
    index.js          Configuración de i18next e idiomas soportados
    locales/es.json    Textos en español
    locales/en.json    Textos en inglés
  App.jsx         Rutas de la app
  main.jsx        Entry point: monta BrowserRouter + i18n + App
  index.css       Design system con Tailwind (@theme): colores, tipografías, espaciados
```

## Design system (colores, tipografías, etc.)

Tailwind v4 no usa `tailwind.config.js` para los tokens: se definen como variables CSS
dentro de un bloque `@theme` en `src/index.css`. Ahí están (con valores de placeholder,
para reemplazar cuando definas el diseño final):

- `--color-primary`, `--color-primary-dark`, `--color-secondary`, `--color-accent`
- `--color-bg`, `--color-bg-alt`, `--color-surface`, `--color-heading`, `--color-body`, `--color-muted`, `--color-border`
- `--font-heading`, `--font-body`
- `--spacing-navbar` (alto del navbar fijo, usado también para el offset del scroll)

Al definir estas variables, Tailwind genera automáticamente las utilidades
(`bg-primary`, `text-heading`, `font-heading`, etc.), así que alcanza con cambiar
los valores en `@theme` para que se propaguen a todo el proyecto.

## Multi-idioma

Los textos NO están hardcodeados en los componentes: se leen con `useTranslation()` de
`react-i18next` desde `src/i18n/locales/es.json` y `en.json`.

Para agregar un idioma nuevo:
1. Crear `src/i18n/locales/<código>.json` con las mismas claves que `es.json`.
2. Importarlo y sumarlo a `resources` en `src/i18n/index.js`.
3. Agregarlo al array `SUPPORTED_LANGUAGES` (esto alimenta automáticamente el `LanguageSwitcher`).

El idioma se detecta con `i18next-browser-languagedetector` (localStorage → navegador → tag del html)
y se persiste en `localStorage`.

## Mocks (skills, experiencia, proyectos, redes)

Viven en `src/data/*.json` y se consumen a través de hooks (`src/hooks/*`). Los campos de texto
"largo" (descripciones, títulos de proyectos) no están en el JSON de datos, sino que apuntan a una
clave de traducción (`descriptionKey`, `titleKey`) para que también sean multi-idioma.

## Agregar una pantalla nueva

1. Crear el archivo en `src/pages/NuevaPagina.jsx`.
2. Agregar la ruta en `src/App.jsx`:
   ```jsx
   <Route path="/nueva-ruta" element={<NuevaPagina />} />
   ```
3. (Opcional) Sumar el link en `src/components/layout/Navbar.jsx` y su texto en los JSON de `i18n/locales`.

Como ejemplo de este flujo ya está armada la ruta `/test` (`src/pages/Test.jsx`).

## Pendiente / a definir con el diseño final

- Reemplazar los valores placeholder del `@theme` (colores, fuentes) por los definitivos.
- Maquetar cada sección (`src/components/sections/*`) con las clases de Tailwind.
- Reemplazar los datos de ejemplo en `src/data/*.json` por los reales.
- Conectar el formulario de contacto (`src/components/sections/Contact.jsx`) a un servicio real
  (API propia, Formspree, EmailJS, etc.).
