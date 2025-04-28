import { FC } from 'react';
import { DISPLAY_VALUES } from './constants';

export const Display: FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>BastionUI</th>
          <th>CSS</th>
        </tr>
      </thead>
      <tbody>
        {DISPLAY_VALUES.map(({ ui, css }) => (
          <tr>
            <td>{ui}</td>
            <td>{css}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
