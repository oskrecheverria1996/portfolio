# Portafolio de Oscar Echeverría

Portafolio personal en Angular con diseño oscuro, adaptable a móviles y contenido en español.

## Ejecutar localmente

```bash
npm install
npm start
```

Abre `http://localhost:4200` en el navegador. Para generar la versión de producción:

```bash
npm run build
```

## Personalizar el contenido

- Edita `src/app/projects.json` para reemplazar los cuatro casos de ejemplo por proyectos reales.
- Edita `src/app/personal-projects.json` con los nombres, descripciones, tecnologías y URLs de tus repositorios personales; los enlaces aparecen al completar `repoUrl`.
- Actualiza el correo y los enlaces de LinkedIn y GitHub en `src/app/app.component.ts`.
- Ajusta el texto del perfil y las habilidades agrupadas en la plantilla de `src/app/app.component.ts`.
- El CV se sirve desde `public/cv-oscar-echeverria.pdf`; reemplaza ese archivo cuando actualices tu currículum.
- Cambia el título y la descripción para buscadores en `src/index.html`.
