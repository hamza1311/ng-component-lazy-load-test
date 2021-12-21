# Lazy Loading Angular Modules

This project serves as a proof-of-concept to demostrate how lazy loading works in Angular 13 with Ivy.

## Project Structure

There are two Angular applications

- `angular-components`
- `component-lazy-load-test`

### `angular-components`

This is an Angular workspace, created by passing `--no-create-application` to `ng new`. It houses components, which are Angular library projects placed inside `projects` directory. Each project contains one component which is lazy-loaded by the main application. In order to create a new component project, run the following command:

```shell
$ ng generate library <component-name>
```

Then edit the `.module.ts` file to import `BrowserModule` and `CommonModule`. This allows Angular features, like directives, to be used.

### `component-lazy-load-test`

This is the Angular application which imports and displays components from `angular-components`. The components are lazy-loaded.

Currently, the `app.component` imports the only available component, `angular-component-library`. See the `loadComponent` method to see how it is imported.

## Building

Building this project is a multi-step process.

First, build the components induvidually:

```bash
$ cd angular-components
$ ng build <project-name>
```

This will place the built package under `dist/<project-name>` directory.

Now, run the main application:

```bash
$ cd component-lazy-load-test
$ ng serve
```

> Note: right now, the only available component, `angular-component-library` is imported and displayed by the main application. Any other component can be imported by running `npm install ../angular-components/dist/<project-name>` once the Angular library project has been built.

