import React from 'react';

type Props = {
  data: number[];
  width: number;
  height: number;
  color: string;
};

const Graph: React.FC<Props> = ({ data, width, height, color }) => {
  const maxValue = Math.max(...data); // Находим максимальное значение в массиве data

  return (
    // 1-div контейнер отвечает за общую область отображения графика
    <div style={{ width: width, height: height, backgroundColor: '#f0f0f0', padding: 10 }}>
      {data.map((value, index) => (
        // 2-div контейнер отвечает за вертикальное выравнивание столбцов графика
        <div key={index} style={{ marginBottom: 5, alignItems: 'flex-start' }}>
          {/* 3-div представляет сам столбец графика */}
          <div style={{
            backgroundColor: color,
            width: `${(value / maxValue) * 100}%`, // Рассчитываем ширину с учетом соотношения
            height: height / data.length, // Рассчитываем высоту относительно количества столбцов
          }}>
            {/* span отображает текстовое значение столбца */}
            <span style={{ color: 'white', padding: 5 }}>{value} Bar</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Graph;