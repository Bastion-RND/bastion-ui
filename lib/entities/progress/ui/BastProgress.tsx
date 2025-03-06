import { ComponentProps, FC } from 'react';

type TBastProgressProps = {
  progress?: number;
} & Pick<ComponentProps<'div'>, 'style'>;

const BastProgress: FC<TBastProgressProps> = ({ progress = 0, style }) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="progress__wrapper" style={style}>
      <div className="progress">
        <div className="progress__filler" style={{ width: `${clampedProgress}%` }} />
      </div>
      <span className="progress__label">{`${clampedProgress}%`}</span>
    </div>
  );
};

export { BastProgress };
