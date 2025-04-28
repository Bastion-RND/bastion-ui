import { FC } from 'react';
import { TYPOGRAPHY_VALUES } from './constants';

export const Typography: FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>BastionUI</th>
          <th>CSS</th>
        </tr>
      </thead>
      <tbody>
        {TYPOGRAPHY_VALUES.map(({ ui, css }) => (
          <tr>
            <td>{ui}</td>
            <td>{css}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
