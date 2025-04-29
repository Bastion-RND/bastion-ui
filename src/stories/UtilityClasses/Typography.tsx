import { FC } from 'react';
import {
  TYPOGRAPHY_FONT_ALIGN,
  TYPOGRAPHY_FONT_SIZES,
  TYPOGRAPHY_FONT_WEIGHTS,
} from './constants';

export const Typography: FC = () => {
  return (
    <>
      <h3>Размеры</h3>
      <table>
        <thead>
          <tr>
            <th>Размер</th>
            <th>Тег</th>
            <th>Класс h"size"</th>
            <th>Класс fs-"size"</th>
          </tr>
        </thead>
        <tbody>
          {TYPOGRAPHY_FONT_SIZES.map((size) => (
            <tr>
              <td>{size}</td>
              <td
                dangerouslySetInnerHTML={{
                  __html: `<h${size} style="border: none; font-family: 'Roboto', sans-serif" class="p-0">h${size}</h${size}>`,
                }}
              />
              <td>
                <div className={`h${size}`}>div.h{size}</div>
              </td>
              <td>
                <span className={`fs-${size}`}>span.fs-{size}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Толщина текста</h3>
      <ul>
        {TYPOGRAPHY_FONT_WEIGHTS.map((weight) => (
          <li key={weight}>
            <div className={`fw-${weight}`} style={{ fontFamily: 'Roboto' }}>
              fw-{weight}
            </div>
          </li>
        ))}
      </ul>
      <h3>Выравнивание текста</h3>
      {TYPOGRAPHY_FONT_ALIGN.map((align) => (
        <div key={align} className={`bgc-gray c-white p-1 mb-1 ta-${align}`}>
          ta-{align}
        </div>
      ))}
    </>
  );
};
