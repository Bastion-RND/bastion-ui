import { COLORS } from './constants';
import { FC } from 'react';

export const Colors: FC = () => {
  const copyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
    alert('Цвет скопирован');
  };

  return (
    <>
      <ul>
        {Object.keys(COLORS).map((variant) => (
          <li>
            <pre>{variant}</pre>
          </li>
        ))}
      </ul>
      <h3 className="sb-section-item-heading">Фоновые цвета</h3>
      <div className="d-f ai-center">
        {Object.keys(COLORS).map((variant) => (
          <pre className={`p-1 c-white bgc-${variant}`}>{`bgc-${variant}`}</pre>
        ))}
      </div>
      <h3 className="sb-section-item-heading">Цвета текста</h3>
      <div className="ai-center">
        {Object.keys(COLORS).map((variant) => (
          <pre className={`mb-1 c-${variant}`}>{`c-${variant}`}</pre>
        ))}
      </div>
      <h3 className="sb-section-item-heading">CSS-переменные</h3>
      <div className="d-f x-scroll">
        {Object.entries(COLORS).map(([variant, colors]) => (
          <div className="mr-3 flex-sh-0" key={variant}>
            {Object.entries(colors).map(([colorName, colorValue], key) => (
              <button
                key={key}
                onClick={() => copyColor(colorValue)}
                className={`d-f color-badge p-2${key < 5 ? ' c-white' : ''}`}
                style={{ backgroundColor: colorValue }}
              >
                {colorName}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
