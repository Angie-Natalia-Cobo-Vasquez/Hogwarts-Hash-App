# HogwartsHashApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Enrutamiento

Esta aplicación usa **Hash Location Strategy** (`withHashLocation()` en `src/app/app.config.ts`),
por lo que las rutas llevan `#`, por ejemplo `/#/casas`, `/#/personajes` y `/#/hechizos`.

Como GitHub Pages publica el proyecto dentro de una ruta del repositorio, el build usa
`--base-href "/Hogwarts-Hash-App/"`. Al utilizar Hash Location Strategy, no es necesario
generar un archivo `404.html` para manejar las rutas.

**## Despliegue**

El workflow `.github/workflows/deploy-github-pages.yml` ejecuta las pruebas, compila y publica en
GitHub Pages cada vez que se hace push a la rama `master`.

- Repositorio: [https://github.com/Angie-Natalia-Cobo-Vasquez/Hogwarts-Hash-App](https://github.com/Angie-Natalia-Cobo-Vasquez/Hogwarts-Hash-App)
- Página: [https://angie-natalia-cobo-vasquez.github.io/Hogwarts-Hash-App/](https://angie-natalia-cobo-vasquez.github.io/Hogwarts-Hash-App/)
