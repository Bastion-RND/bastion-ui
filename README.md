# @bs-solutions/bastion-ui-v2

Cross-platform UI библиотека на базе [shadcn/ui](https://ui.shadcn.com/) (web) и [react-native-reusables](https://github.com/mrzachnugent/react-native-reusables) (native).

## Установка

```sh
npm install @bs-solutions/bastion-ui-v2
```

### React Native / Expo

Дополнительно установить нативные примитивы:

```sh
npm install @rn-primitives/accordion @rn-primitives/checkbox @rn-primitives/dialog @rn-primitives/dropdown-menu @rn-primitives/label @rn-primitives/popover @rn-primitives/progress @rn-primitives/radio-group @rn-primitives/select @rn-primitives/separator @rn-primitives/slot @rn-primitives/switch @rn-primitives/tabs
```

## Подключение стилей

### Web

В корневом CSS файле:

```css
@import '@bs-solutions/bastion-ui-v2/globals.css';
```

### React Native

Обернуть корневой компонент:

```tsx
import { lightTheme, darkTheme } from '@bs-solutions/bastion-ui-v2';
import { useColorScheme } from 'react-native';

const colorScheme = useColorScheme();

<View style={colorScheme === 'dark' ? darkTheme : lightTheme}>
  <App />
</View>
```

## Подключение Tailwind

```ts
// tailwind.config.ts
import bastionPreset from '@bs-solutions/bastion-ui-v2/tailwind-preset';

export default {
  presets: [bastionPreset],
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
