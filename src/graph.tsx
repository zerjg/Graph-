import React from 'react';

type Props = {
  data: number[];
  width: number;
  height: number;
  color: string;
};

const Graph: React.FC<Props> = ({ data, width, height, color }) => {
  const maxValue = Math.max(...data);
  const topContainer = 30;
  const contentContainer = 30;
  const bottomAreaContainer = height - topContainer - contentContainer;

  return (
    <div className='graphContainer' style={{
      position: 'absolute',
      top: 10,
      width: width,
      height: height,
      backgroundColor: 'white',
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
    }}>
      {data.map((value, index) => (
        <div className='graphColumnContainer' key={index} style={{ marginBottom: 2, marginRight: 30 }}>
          <div className='graphColumn' style={{
            backgroundColor: color,
            width: width / data.length,
            height: `${(value / maxValue) * contentContainer}px`,
          }}>
          </div>
          <span style={{ color, padding: 0 }}>{value} Bar</span>
        </div>
      ))}
      <div className="mainContainer" style={{
        height: height, display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        left: 60
      }}>
        <div className="top-container" style={{ height: `${topContainer}px` }}>График показателей в барах
          <div className="content-container" style={{ height: `${contentContainer}px`, }}> Компания "Luxor"
            <div className="bottom_area-container" style={{ height: `${bottomAreaContainer}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> Рассчет </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Graph; 
