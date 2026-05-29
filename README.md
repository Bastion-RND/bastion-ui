# @bs-solutions/bastion-ui-v2

Web UI библиотека на базе [shadcn/ui](https://ui.shadcn.com/) и Tailwind CSS.

## Установка

```sh
npm install @bs-solutions/bastion-ui-v2
```

## Подключение стилей

В корневом CSS файле:

```css
@import '@bs-solutions/bastion-ui-v2/globals.css';
```

## Подключение Tailwind

```ts
// tailwind.config.ts
import { preset } from '@bs-solutions/bastion-ui-v2/tailwind-preset';

export default {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@bs-solutions/bastion-ui-v2/src/**/*.{ts,tsx}',
  ],
};
```

## Использование

```tsx
import { Button, Text, Input } from '@bs-solutions/bastion-ui-v2';
```
