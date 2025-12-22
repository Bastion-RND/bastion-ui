import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { TBastCardBaseProps } from '../config';
import { BastCardContent } from './BastCardContent';
import { BastCardImage } from './BastCardImage';
import { BastCardTitle } from './BastCardTitle';

type TBastCardProps = TBastCardBaseProps & PropsWithChildren;

type TBastCardStaticProps = {
  Title: typeof BastCardTitle;
  Image: typeof BastCardImage;
  Content: typeof BastCardContent;
};

const BastCard: FC<TBastCardProps> & TBastCardStaticProps = ({
  children,
  className,
  gapType,
  radiusType,
  noShadow = false,
  onClick,
  to,
}) => {
  const styleClasses = clsx([
    className,
    'card',
    noShadow && 'card--no-shadow',
    gapType && `card--gap-${gapType}`,
    to && 'card--link',
    radiusType && `card--radius-${radiusType}`,
  ]);

  if (onClick !== undefined && to === undefined)
    return (
      <button type="button" onClick={onClick} className={styleClasses}>
        {children}
      </button>
    );

  if (to !== undefined && onClick === undefined)
    return (
      <a href={to} className={styleClasses}>
        {children}
      </a>
    );

  return <div className={styleClasses}>{children}</div>;
};

BastCard.Title = BastCardTitle;
BastCard.Image = BastCardImage;
BastCard.Content = BastCardContent;

export { BastCard };
