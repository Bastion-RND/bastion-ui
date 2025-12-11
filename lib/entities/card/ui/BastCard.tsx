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
  button = false,
  onClick,
}) => {
  const styleClasses = clsx([
    className,
    'card',
    button && 'card--button',
    noShadow && 'card--no-shadow',
    gapType && `card--gap-${gapType}`,
    radiusType && `card--radius-${radiusType}`,
  ]);

  return button ? (
    <button type="button" onClick={onClick} className={styleClasses}>
      {children}
    </button>
  ) : (
    <div className={styleClasses}>{children}</div>
  );
};

BastCard.Title = BastCardTitle;
BastCard.Image = BastCardImage;
BastCard.Content = BastCardContent;

export { BastCard };
