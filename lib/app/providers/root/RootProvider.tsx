import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '../theme/ThemeProvider';
import { ToastProvider } from '../toast/ToastProvider';
import { VisuallyImpairedModeProvider } from '../visuallyImpairedMode/VisuallyImpairedModeProvider';

const RootProvider: FC<PropsWithChildren> = ({ children }) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      style={{ display: 'none' }}
    >
      <defs>
        <g id="spinner-item" transform="rotate(163 15 20) translate(-5 5)">
          <path d="M23.335 38.006c2.184.524 4.451.6 6.665.223q-1.036-.105-2.049-.35a15.48 15.48 0 0 1-11.813-16.332l-5.506-1.323a16.676 16.676 0 0 0 12.703 17.773" />
          <path d="m6.469 22.023 9.369-10.216 3.564 13.407 6.45 1.577S21.727 11.22 19.249 1.897L18.743 0 0 20.432l6.48 1.591" />
        </g>
        <path
          id="spinner-track"
          d="M52.264 19.737c8.981 8.982 8.981 23.544 0 32.527-8.983 8.981-23.545 8.981-32.528 0-8.981-8.983-8.981-23.545 0-32.528 8.983-8.981 23.545-8.981 32.528 0Z"
          fill="none"
        />
      </defs>
    </svg>
    <ThemeProvider>
      <VisuallyImpairedModeProvider>
        <ToastProvider paddingRem={2} gapRem={1.5} position="bottom-right">
          {children}
        </ToastProvider>
      </VisuallyImpairedModeProvider>
    </ThemeProvider>
  </>
);

export { RootProvider };
