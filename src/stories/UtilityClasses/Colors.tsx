import { COLORS } from './constants';
import { FC } from 'react';

export const Colors: FC = () => {
  const copyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
    alert('Цвет скопирован');
  };

  return (
    <>
      <div className="d-f ai-center">
        <p>
          В светлой теме: <code>--color-"variant" ={'>'} --color-"variant"-500</code>
        </p>
      </div>
      <div className="d-f ai-center">
        <p>
          В темной теме: <code>--color-"variant" ={'>'} --color-"variant"-600</code>
        </p>
      </div>
      <div className="d-f ai-center">
        <p>
          Служебные классы текста: <code>c-"variant" ={'>'} color: --color-"variant"</code>
        </p>
      </div>
      <div className="d-f ai-center">
        <p>
          Служебные классы фона:{' '}
          <code>bgc-"variant" ={'>'} background-color: --color-"variant"</code>
        </p>
      </div>
      <div className="d-f x-scroll">
        <div className="mr-3 flex-sh-0">
          {Object.entries(COLORS.brand).map(([colorName, colorValue], key) => (
            <div key={key} className="d-f ai-center">
              <div
                onClick={() => copyColor(colorValue)}
                className="color-badge"
                style={{ backgroundColor: colorValue }}
              />
              <p>{colorName}</p>
            </div>
          ))}
        </div>

        <div className="mr-3 flex-sh-0">
          {Object.entries(COLORS.warning).map(([colorName, colorValue], key) => (
            <div key={key} className="d-f ai-center">
              <div
                onClick={() => copyColor(colorValue)}
                className="color-badge"
                style={{ backgroundColor: colorValue }}
              />
              <p>{colorName}</p>
            </div>
          ))}
        </div>

        <div className="mr-3 flex-sh-0">
          {Object.entries(COLORS.gray).map(([colorName, colorValue], key) => (
            <div key={key} className="d-f ai-center">
              <div
                onClick={() => copyColor(colorValue)}
                className="color-badge"
                style={{ backgroundColor: colorValue }}
              />
              <p>{colorName}</p>
            </div>
          ))}
        </div>

        <div className="mr-3 flex-sh-0">
          {Object.entries(COLORS.danger).map(([colorName, colorValue], key) => (
            <div key={key} className="d-f ai-center">
              <div
                onClick={() => copyColor(colorValue)}
                className="color-badge"
                style={{ backgroundColor: colorValue }}
              />
              <p>{colorName}</p>
            </div>
          ))}
        </div>

        <div className="mr-3 flex-sh-0">
          {Object.entries(COLORS.success).map(([colorName, colorValue], key) => (
            <div key={key} className="d-f ai-center">
              <div
                onClick={() => copyColor(colorValue)}
                className="color-badge"
                style={{ backgroundColor: colorValue }}
              />
              <p>{colorName}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
