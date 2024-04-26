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
    <div style={{
      position: 'absolute', // Добавьте свойство position
      top: 10, 
      width: width,
      height: height,
      backgroundColor: '#f0f0f0',
      padding: 10,
      display: 'flex',
      //flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }}>
      {data.map((value, index) => (
        // 2-div контейнер отвечает за вертикальное выравнивание столбцов графика
        <div key={index} style={{ marginBottom: 2, position: 'relative' }}>

          {/* 3-div представляет сам столбец графика */}
          <div style={{
            flexDirection: 'row',
            backgroundColor: color,
            width: `${(value / maxValue) * 100}%`, // Рассчитываем ширину с учетом соотношения
            height: `${(value / maxValue) * height}px`, // Рассчитываем высоту относительно количества столбцов
          }}>
            {/* span отображает текстовое значение столбца */}
            <span style={{ color: 'white', padding: 10 }}>{value} Bar</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Graph;