import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils';

const textVariants = cva('text-foreground text-base select-text', {
  variants: {
    variant: {
      default: '',
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight text-center text-balance',
      h2: 'scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'mt-3 leading-7',
      blockquote: 'mt-4 border-l-2 pl-3 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: { variant: 'default' },
});

type TextVariant = NonNullable<VariantProps<typeof textVariants>['variant']>;

const ELEMENT: Record<TextVariant, keyof React.JSX.IntrinsicElements> = {
  default: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  code: 'code',
  lead: 'p',
  large: 'p',
  small: 'small',
  muted: 'p',
};

const TextClassContext = React.createContext<string | undefined>(undefined);

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
  };

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant = 'default', asChild: _asChild, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Element = ELEMENT[variant ?? 'default'];
    return React.createElement(Element, {
      className: cn(textVariants({ variant }), textClass, className),
      ref,
      ...props,
    });
  }
);
Text.displayName = 'Text';

export { Text, TextClassContext, textVariants };
