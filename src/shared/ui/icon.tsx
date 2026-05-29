import { TextClassContext } from '@/shared/ui/text';
import { cn } from '@/shared/lib/utils';
import type { LucideIcon, LucideProps } from 'lucide-react';
import * as React from 'react';

type IconProps = LucideProps & {
  as: LucideIcon | React.ComponentType<any>;
  className?: string;
  strokeWidth?: number;
} & React.RefAttributes<LucideIcon>;

function Icon({ as: IconComponent, className, size = 14, ...props }: IconProps) {
  const textClass = React.useContext(TextClassContext);
  return (
    <IconComponent
      className={cn('text-foreground', textClass, className)}
      size={size}
      {...props}
    />
  );
}

export { Icon };
