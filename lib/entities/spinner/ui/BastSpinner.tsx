import { ComponentProps, FC } from 'react';

type TBastSpinnerProps = Pick<ComponentProps<'svg'>, 'width' | 'height' | 'color'>;

const BastSpinner: FC<TBastSpinnerProps> = (props) => (
  <svg
    height="1em"
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="spinner"
    aria-hidden="true"
    fill="currentColor"
    {...props}
  >
    <use className="spinner__runner" xlinkHref="#spinner-item" href="#spinner-item">
      <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" calcMode="linear" begin="0s">
        <mpath xlinkHref="#spinner-track" href="#spinner-track" />
      </animateMotion>
    </use>

    <use
      className="spinner__runner"
      xlinkHref="#spinner-item"
      href="#spinner-item"
      style={{ animationDelay: '-0.9s' }}
    >
      <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" calcMode="linear" begin="-1s">
        <mpath xlinkHref="#spinner-track" href="#spinner-track" />
      </animateMotion>
    </use>

    <use
      className="spinner__runner"
      xlinkHref="#spinner-item"
      href="#spinner-item"
      style={{ animationDelay: '-1.8s' }}
    >
      <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" calcMode="linear" begin="-2s">
        <mpath xlinkHref="#spinner-track" href="#spinner-track" />
      </animateMotion>
    </use>
  </svg>
);

export { BastSpinner };
