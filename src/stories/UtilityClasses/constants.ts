export const COLORS = {
  brand: {
    '--color-brand-1000': '#0C2C46',
    '--color-brand-900': '#0A3A61',
    '--color-brand-800': '#07487C',
    '--color-brand-700': '#055697',
    '--color-brand-600': '#0263B1',
    '--color-brand-500': '#0071CC',
    '--color-brand-400': '#2485D3',
    '--color-brand-300': '#499ADB',
    '--color-brand-200': '#6DAEE2',
    '--color-brand-100': '#92C2E9',
    '--color-brand-50': '#B6D6F0',
    '--color-brand-25': '#DBEBF8',
  },
  warning: {
    '--color-warning-1000': '#55421F',
    '--color-warning-900': '#775A26',
    '--color-warning-800': '#99722E',
    '--color-warning-700': '#BB8A35',
    '--color-warning-600': '#DDA33C',
    '--color-warning-500': '#FFBB43',
    '--color-warning-400': '#FFC55E',
    '--color-warning-300': '#FFCE79',
    '--color-warning-200': '#FFD894',
    '--color-warning-100': '#FFE2AE',
    '--color-warning-50': '#FFECC9',
    '--color-warning-25': '#FFF5E4',
  },
  gray: {
    '--color-gray-1200': '#414751',
    '--color-gray-1000': '#606974',
    '--color-gray-900': '#6F7A86',
    '--color-gray-800': '#7F8B97',
    '--color-gray-700': '#8E9CA9',
    '--color-gray-600': '#9EADBA',
    '--color-gray-500': '#ADBECC',
    '--color-gray-400': '#B9C7D3',
    '--color-gray-300': '#C4D1DB',
    '--color-gray-200': '#D0DAE2',
    '--color-gray-100': '#DCE3E9',
    '--color-gray-50': '#E8ECF0',
    '--color-gray-25': '#F3F6F8',
  },
  danger: {
    '--color-danger-1000': '#51252D',
    '--color-danger-900': '#712F3B',
    '--color-danger-800': '#913A4A',
    '--color-danger-700': '#B14458',
    '--color-danger-600': '#D14E66',
    '--color-danger-500': '#F15874',
    '--color-danger-400': '#F37088',
    '--color-danger-300': '#F5889C',
    '--color-danger-200': '#F7A0B0',
    '--color-danger-100': '#F9B7C3',
    '--color-danger-50': '#FBCFD7',
    '--color-danger-25': '#FDE7EB',
  },
  success: {
    '--color-success-1000': '#1A4835',
    '--color-success-900': '#1E6447',
    '--color-success-800': '#228059',
    '--color-success-700': '#269C6B',
    '--color-success-600': '#2BB77D',
    '--color-success-500': '#2FD38F',
    '--color-success-400': '#4DD99F',
    '--color-success-300': '#6AE0AF',
    '--color-success-200': '#88E6BF',
    '--color-success-100': '#A6ECCF',
    '--color-success-50': '#C4F2DF',
    '--color-success-25': '#E1F9EF',
  },
};

export const DISPLAY_VALUES = [
  { ui: '.d-f', css: 'display: flex;' },
  { ui: '.d-b', css: 'display: block;' },
  { ui: '.d-ib', css: 'display: inline-block;' },
  { ui: '.d-i', css: 'display: inline;' },
  { ui: '.fd-column', css: 'flex-direction: column;' },
  { ui: '.fd-row', css: 'flex-direction: row;' },
  { ui: '.fd-column-reverse', css: 'flex-direction: column-reverse;' },
  { ui: '.fd-row-reverse', css: 'flex-direction: row-reverse;' },
  { ui: '.ai-center', css: 'align-items: center;' },
  { ui: '.ai-stretch', css: 'align-items: stretch;' },
  { ui: '.ai-start', css: 'align-items: start;' },
  { ui: '.ai-end', css: 'align-items: end;' },
  { ui: '.jc-center', css: 'justify-content: center;' },
  { ui: '.jc-start', css: 'justify-content: start;' },
  { ui: '.jc-end', css: 'justify-content: end;' },
  { ui: '.jc-between', css: 'justify-content: space-between;' },
  { ui: '.jc-around', css: 'justify-content: space-around;' },
  { ui: '.jc-evenly', css: 'justify-content: space-evenly;' },
  { ui: '.jc-stretch', css: 'justify-content: stretch;' },
  { ui: '.as-start', css: 'align-self: start;' },
  { ui: '.as-end', css: 'align-self: end;' },
  { ui: '.as-center', css: 'align-self: center;' },
  { ui: '.as-stretch', css: 'align-self: stretch;' },
  { ui: '.ac-start', css: 'align-content: start;' },
  { ui: '.ac-end', css: 'align-content: end;' },
  { ui: '.ac-center', css: 'align-content: center;' },
  { ui: '.ac-between', css: 'align-content: space-between;' },
  { ui: '.ac-around', css: 'align-content: space-around;' },
  { ui: '.ac-evenly', css: 'align-content: space-evenly;' },
  { ui: '.ac-stretch', css: 'align-content: stretch;' },
];

export const TYPOGRAPHY_VALUES = [
  {
    ui: '.h1, .fs-1',
    css:
      '  --font-size-min: 1.625rem; ' +
      '  --font-size-max: 2.5rem; ' +
      '  --font-size-prefer: 1.25rem + 1.04vw; ',
  },
  {
    ui: '.h2, .fs-2',
    css:
      '  --font-size-min: 1.25rem; ' +
      '  --font-size-max: 1.875rem; ' +
      '  --font-size-prefer: 0.982rem + 0.74vw;',
  },
  {
    ui: '.h3, .fs-3',
    css:
      '  --font-size-min: 1rem; ' +
      '  --font-size-max: 1.5rem; ' +
      '  --font-size-prefer: 0.786rem + 0.6vw;',
  },
  {
    ui: '.h4, .fs-4',
    css:
      '  --font-size-min: 0.875rem; ' +
      '  --font-size-max: 1.125rem; ' +
      '  --font-size-prefer: 0.768rem + 0.3vw;',
  },
  {
    ui: '.h5, .fs-5',
    css:
      '  --font-size-min: 0.688rem; ' +
      '  --font-size-max: 0.875rem; ' +
      '  --font-size-prefer: 0.607rem + 0.22vw;',
  },
  { ui: '.fw-normal', css: 'font-weight: 400;' },
  { ui: '.fw-medium', css: 'font-weight: 500;' },
  { ui: '.ta-c', css: 'text-align: center;' },
  { ui: '.ta-s', css: 'text-align: left;' },
  { ui: '.ta-e', css: 'text-align: right;' },
];
