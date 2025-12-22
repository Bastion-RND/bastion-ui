import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { TBastCardProps } from '../config';
import { BastCardContent } from './BastCardContent';
import { BastCardImage } from './BastCardImage';
import { BastCardTitle } from './BastCardTitle';

type TBastCardStaticProps = {
  Title: typeof BastCardTitle;
  Image: typeof BastCardImage;
  Content: typeof BastCardContent;
};

type TBastCard = FC<PropsWithChildren<TBastCardProps>> & TBastCardStaticProps;

const BastCard: TBastCard = ({ className, gapType, radiusType, noShadow = false, ...props }) => {
  const styleClasses = clsx([
    'card',
    noShadow && 'card--no-shadow',
    gapType && `card--gap-${gapType}`,
    radiusType && `card--radius-${radiusType}`,
    className,
  ]);

  return props.onClick === undefined ? (
    <div className={styleClasses} {...props} />
  ) : (
    <button type="button" className={styleClasses} {...props} />
  );
};

BastCard.Title = BastCardTitle;
BastCard.Image = BastCardImage;
BastCard.Content = BastCardContent;

export { BastCard };
