import { FC } from 'react';

export const Spacing: FC = () => {
  return (
    <>
      <h3>Размеры:</h3>
      <div className="d-f ai-center x-scroll">
        <p className="flex-sh-0">
          0: <code>0px</code>
        </p>
        <p className="flex-sh-0">
          1: <code>0.75rem</code>
        </p>
        <p className="flex-sh-0">
          2: <code>1rem</code>
        </p>
        <p className="flex-sh-0">
          3: <code>1.25rem</code>
        </p>
        <p className="flex-sh-0">
          4: <code>1.5rem</code>
        </p>
        <p className="flex-sh-0">
          5: <code>1.75rem</code>
        </p>
        <p className="flex-sh-0">
          6: <code>2rem</code>
        </p>
        <p className="flex-sh-0">
          auto: <code>auto</code>
        </p>
      </div>

      <h3>Направления:</h3>
      <div className="d-f ai-center x-scroll">
        <p className="flex-sh-0">
          l: <code>left</code>
        </p>
        <p className="flex-sh-0">
          r: <code>right</code>
        </p>
        <p className="flex-sh-0">
          t: <code>top</code>
        </p>
        <p className="flex-sh-0">
          b: <code>bottom</code>
        </p>
        <p className="flex-sh-0">
          x: <code>horizontal</code>
        </p>
        <p className="flex-sh-0">
          y: <code>vertical</code>
        </p>
      </div>

      <h3>Примеры:</h3>
      <div className="d-f ai-center x-scroll">
        <p className="flex-sh-0">
          m-1: <code>margin: 0.75rem</code>
        </p>
        <p className="flex-sh-0">
          mr-1: <code>margin-right: 0.75rem</code>
        </p>
        <p className="flex-sh-0">
          p-1: <code>padding: 0.75rem</code>
        </p>
        <p className="flex-sh-0">
          pr-1: <code>padding-right: 0.75rem</code>
        </p>
      </div>
    </>
  );
};
