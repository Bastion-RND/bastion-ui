import { FC, PropsWithChildren } from 'react';

import { BastCardContent } from './BastCardContent';
import { BastCardImage } from './BastCardImage';
import { BastCardTitle } from './BastCardTitle';

type TBastCardProps = PropsWithChildren;

type TBastCardStaticProps = {
  Title: typeof BastCardTitle;
  Image: typeof BastCardImage;
  Content: typeof BastCardContent;
};

const BastCard: FC<TBastCardProps> & TBastCardStaticProps = ({ children }) => (
  <div className="card">{children}</div>
);

BastCard.Title = BastCardTitle;
BastCard.Image = BastCardImage;
BastCard.Content = BastCardContent;

export { BastCard };
