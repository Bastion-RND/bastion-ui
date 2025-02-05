import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const BastCardImage: FC<ComponentProps<'img'>> = ({
  className,
  alt = 'Картинка карточки',
  ...rest
}) => <img alt={alt} className={`${clsx(['card__image', className && className])}`} {...rest} />;

export { BastCardImage };
