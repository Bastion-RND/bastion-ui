const GAP_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
} as const;

export type GapSizes = (typeof GAP_SIZES)[keyof typeof GAP_SIZES];

const RADIUS_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
} as const;

export type RadiusSizes = (typeof RADIUS_SIZES)[keyof typeof RADIUS_SIZES];

export type TBastCardBaseProps = {
  className?: string;
  gapType?: GapSizes;
  noShadow?: boolean;
  radiusType?: RadiusSizes;
};

type TBastCardButtonProps = TBastCardBaseProps & {
  onClick: () => void,
};

type TBastCardDivProps = TBastCardBaseProps & {
  onClick?: never;
};

export type TBastCardProps = TBastCardButtonProps | TBastCardDivProps;
