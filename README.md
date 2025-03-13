# bastion-ui

This component library is designed for use in building user interfaces for applications within the Bastion ecosystem.

## Documentation

- [Installation](#installation)
- [Initialization](#initialization)
- [Maintainer](#maintainer)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install, run the following command:

```sh
npm i @bs-solutions/bastion-ui
```


## Initialization

To use the project, follow these steps:

- import the styles file at the root of your application.
```js
// root file
import '@bs-solutions/bastion-ui/bastion-ui.css';
```
- wrap the entire application in the `BastUiProvider`.
```js
// root file
<BastUiProvider>
  <App />
</BastUiProvider>
```
- if `sass` is installed in your project, use the global `bastion-ui` variables in your `.scss` or `.sass` files like in example bellow.

```scss
@use "@bs-solutions/bastion-ui/dist/styles/_globals.scss" as bs-globals;

@media (width >= bs-globals.$xl) {
  margin-top: 0;
}
```

## Maintainer

[@VladSolyony](https://github.com/VladSolyony)

## Contributing

Please contribute! [Look at the issues](https://github.com/Bastion-RND/bastion-ui/issues).

## License

MIT © 2025
