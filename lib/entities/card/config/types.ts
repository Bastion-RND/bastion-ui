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

export type BaseProps = {
  className?: string;
  gapType?: GapSizes;
  noShadow?: boolean;
  radiusType?: RadiusSizes;
}

export type TBastCardButtonProps = BaseProps & {
  to?: never,
  onClick: () => void,
};

export type TBastCardLinkProps = BaseProps & {
  to: string;
  onClick?: never;
};

export type TBastCardDivProps = BaseProps & {
  to?: never;
  onClick?: never;
};

export type TBastCardBaseProps = TBastCardButtonProps | TBastCardLinkProps | TBastCardDivProps;
