import { FC } from 'react';

type TBastProgressProps = {
  progress?: number;
};

const BastProgress: FC<TBastProgressProps> = ({ progress = 0 }) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="progress__wrapper">
      <div className="progress">
        <div className="progress__filler" style={{ width: `${clampedProgress}%` }} />
      </div>
      <span className="progress__label">{`${clampedProgress}%`}</span>
    </div>
  );
};

export { BastProgress };
