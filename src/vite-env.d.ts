declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg?react' {
  import React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
/// <reference types="vite/client" />
