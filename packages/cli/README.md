# ruru-ui-cli

A CLI for adding components to your project.

## Usage

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies, adds the `cn` util, configures `tailwind.config.js`, and CSS variables for the project.

```bash
npx ruru-ui-cli init
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx ruru-ui-cli add [component]
```

### Example

```bash
npx ruru-ui-cli add button
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx ruru-ui-cli add
```

## Documentation

Visit https://ruru-ui.vercel.app/docs/typography/cli to view the documentation.

## License

Licensed under the [MIT license](https://github.com/ruru-m07/ruru-ui/blob/main/LICENSE).
