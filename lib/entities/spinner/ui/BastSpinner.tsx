import { FC } from 'react';

const spinnerIcon = (
  <svg
    className="spinner__icon"
    height="1em"
    width="auto"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 77 60"
    fill="currentColor"
  >
    <path d="M1.235 46.519a33.146 33.146 0 0 0-.446 13.287c.14-1.376.374-2.74.7-4.084A30.856 30.856 0 0 1 34.046 32.17l2.638-10.975A33.244 33.244 0 0 0 1.252 46.519" />
    <path d="m33.096 12.896 20.366 18.678-26.727 7.104-3.145 12.86s31.044-8.227 49.628-13.167c1.337-.356 2.597-.69 3.782-1.007L36.268 0l-3.172 12.918" />
  </svg>
);

const BastSpinner: FC = () => (
  <div className="spinner">
    {spinnerIcon}
    {spinnerIcon}
    {spinnerIcon}
  </div>
);

export { BastSpinner };
