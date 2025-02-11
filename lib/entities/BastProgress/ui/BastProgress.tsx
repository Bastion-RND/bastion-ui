import { FC } from 'react';

type BastProgressProps = {
  percent: number;
};

const BastProgress: FC<BastProgressProps> = ({ percent }) => (
  <div className="progress-bar">
    {/* Заполненная часть */}
    <>
      <div
        className="progress-fill"
        style={{
          width: `${percent}%`,
          transition: 'width 0.3s ease forwards',
        }}
      />

      {/* Иконка */}
      <div
        className="progress-icon"
        style={{
          left: `calc(${percent}% - 10px)`,
          opacity: percent === 100 ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out, left 0.3s ease-in-out',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="blue"
        >
          <path d="M9 18l6-6-6-6v12z" />
        </svg>
      </div>
    </>

    {/* Процентное значение */}
    <div className="progress-value">{percent}%</div>
  </div>
);

export { BastProgress };
