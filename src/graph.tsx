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
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gold', minHeight: height, width: width }}> {/* это наружний контейнер graphContainer column */}
      <div style={{ width: '100%', textAlign: 'center', backgroundColor: 'red', minHeight: topContainer }}>{title}</div> {/* этот контейнер для title в него вывести переменную title  */}
      <div style={{ backgroundColor: '#f0f', minHeight: contentContainer }}></div>{/* этот контейнер для графика в него вывести переменную data */}
      <div style={{ backgroundColor: '#00ff00', minHeight: bottomAreaContainer }}></div>{/* это  контейнер для подписи для нижнего отступа */}
    </div>
  )
  // return (
  //   <div className='graphContainer' style={{
  //     position: 'absolute',
  //     top: 10,
  //     width: width,
  //     height: height,
  //     backgroundColor: 'white',
  //     padding: 10,
  //     display: 'flex',
  //     flexDirection: 'row',
  //     alignItems: 'flex-end',
  //     justifyContent: 'center',
  //   }}>
  //     {data.map((value, index) => (
  //       <div className='graphColumnContainer' key={index} style={{ marginBottom: 2, marginRight: 30 }}>
  //         <div className='graphColumn' style={{
  //           backgroundColor: color,
  //           width: width / data.length,
  //           height: `${(value / maxValue) * contentContainer}px`,
  //         }}>
  //         </div>
  //         <span style={{ color, padding: 0 }}>{value} Bar</span>
  //       </div>
  //     ))}
  //     <div className="mainContainer" style={{
  //       height: height, display: 'flex',
  //       flexDirection: 'column',
  //       position: 'relative',
  //       left: 60
  //     }}>
  //       <div className="top-container" style={{ height: `${topContainer}px` }}>{title}
  //         <div className="content-container" style={{ height: `${contentContainer}px`, }}> 
  //           <div className="bottom_area-container" style={{ height: `${bottomAreaContainer}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> Рассчет </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Graph; 
