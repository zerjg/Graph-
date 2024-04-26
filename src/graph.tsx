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
      position: 'relative', // Добавьте свойство position
      top: 10, 
      width: width,
      height: height,
      backgroundColor: '#f0f0f0',
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'auto'
    }}>
      {data.map((value, index) => (
        // 2-div контейнер отвечает за вертикальное выравнивание столбцов графика
        <div key={index} style={{ marginBottom: 2, marginRight:5 }}>

          {/* 3-div представляет сам столбец графика */}
          <div style={{
            
            backgroundColor: color,
            width: `${(value / maxValue) * 100}%`, // Рассчитываем ширину с учетом соотношения
            height: `${(value / maxValue) * height}px`, // Рассчитываем высоту относительно количества столбцов
          }}>
            {/* span отображает текстовое значение столбца */}
            
          </div>
          <span style={{ color, padding: 0 }}>{value} Bar</span>
        </div>
      ))}
    </div>
  );
};

export default Graph;