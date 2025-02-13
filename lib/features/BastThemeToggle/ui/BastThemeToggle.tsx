import { ComponentProps, FC } from 'react';

import { BastButton } from '../../../entities/BastButton';
import { BastIcon } from '../../../entities/BastIcon';
import { useThemeContext } from '../../../entities/theme';

const BastThemeToggle: FC<Omit<ComponentProps<typeof BastButton>, 'onClick'>> = ({
  iconOnly = true,
  shape = 'round',
  fill = 'cleared',
  ...props
}) => {
  const { toggleTheme } = useThemeContext();

  // TODO: заменить иконку
  return (
    <BastButton iconOnly={iconOnly} shape={shape} fill={fill} {...props} onClick={toggleTheme}>
      <BastIcon name="Bast" />
    </BastButton>
  );
};

export { BastThemeToggle };
