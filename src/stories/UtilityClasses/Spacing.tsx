import { FC } from 'react';

export const Spacing: FC = () => {
  return (
    <>
      <h3>Тип отступа (space-type)</h3>
      <p>
        <code>m</code> - margin
      </p>
      <p>
        <code>p</code> - padding
      </p>

      <h3>Направление (direction)</h3>
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

      <h3>Размер (size)</h3>
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

      <h3>Шаблон</h3>
      <pre>"space-type"["direction"]-"size"</pre>

      <h3>Внутренние отступы</h3>
      {[0, 1, 3, 4, 5, 6].map((size) => (
        <div key={size} style={{ background: '#B08354' }} className="mb-1">
          <div className={`p-${size}`} style={{ background: '#B8C480' }}>
            <div style={{ background: '#88B2BD' }}>p-{size}</div>
          </div>
        </div>
      ))}

      <h3>Внешние отступы</h3>
      {[0, 1, 3, 4, 5, 6].map((size) => (
        <div key={size} style={{ background: '#B08354' }} className="mb-1">
          <div className={`m-${size}`}>
            <div style={{ background: '#88B2BD' }}>m-{size}</div>
          </div>
        </div>
      ))}
      <div style={{ background: '#B08354' }} className="mb-1 d-f">
        <span className="m-auto d-ib" style={{ background: '#88B2BD' }}>
          m-auto
        </span>
      </div>
    </>
  );
};
