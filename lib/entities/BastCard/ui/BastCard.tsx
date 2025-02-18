import { FC, PropsWithChildren } from 'react';

import { BastCardContent } from './BastCardContent';
import { BastCardImage } from './BastCardImage';
import { BastCardTitle } from './BastCardTitle';

type TBastCard = FC<PropsWithChildren> & {
  Title: typeof BastCardTitle;
  Image: typeof BastCardImage;
  Content: typeof BastCardContent;
};

const BastCard: TBastCard = ({ children }) => <div className="card">{children}</div>;

BastCard.Title = BastCardTitle;
BastCard.Image = BastCardImage;
BastCard.Content = BastCardContent;

export { BastCard };
