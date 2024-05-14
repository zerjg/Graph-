import React from 'react';

type Props = {
  data: number[];
  width: number;
  height: number;
  color: string;
  title: string;
};

const Graph: React.FC<Props> = ({
  data,
  width,
  height,
  color,
  title,
}) => {
  const maxValue = Math.max(...data);
  const topContainer = 30;
  const bottomAreaContainer = 30;
  const contentContainer = height - topContainer - bottomAreaContainer;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gold', minHeight: height, width: width }}>

      <div style={{ width: '100%', textAlign: 'center', backgroundColor: 'Salmon', minHeight: topContainer }}>{title}</div>

      <div style={{ backgroundColor: 'OrangeRed', minHeight: contentContainer, flexDirection: 'row', display: 'flex', alignItems: 'flex-end' }}>
        {data.map((value, index) => (
          <div key={index} style={{ marginBottom: 2, marginRight: 10 }}>
            <div style={{
              backgroundColor: color,
              width: (width - (data.length - 1) * 45) / data.length,
              height: `${(value / maxValue) * contentContainer}px`,
            }} />
            <span style={{ color, padding: 0 }}>{value} Bar</span>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: '#00ff00', minHeight: bottomAreaContainer }}>Отчет</div>
    </div>
  );
};
export default Graph; 
