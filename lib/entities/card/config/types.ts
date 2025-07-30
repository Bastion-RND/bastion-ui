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

type BaseProps = {
  className?: string;
  gapType?: GapSizes;
  noShadow?: boolean;
  radiusType?: RadiusSizes;
}

export type TBastCardButtonProps = BaseProps & {
  button: true,
  onClick: () => void,
};

type TBastCardDivProps = BaseProps & {
  button?: false,
  onClick?: never,
}

export type TBastCardBaseProps = TBastCardButtonProps | TBastCardDivProps;
