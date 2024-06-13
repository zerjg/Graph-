import React from 'react';
import Graph from './graph';



const DataComponent: React.FC = ()  => {
  const specificData = [
    { current: 13, previous: 28 },
    { current: 80, previous: 54 },
    { current: 100, previous: 25 },
    { current: 34, previous: 121 },
    
  ]
  const previousData = specificData.filter(item => item.previous!==null)
  return (
    <div className="data" style={{ display: 'flex', flexDirection: 'row', maxHeight: '1000px' }}>
        {/* <Graph data={specificData} width={400} height={200} color="blue" title="Текущие данные" bottomTitle="Измерения в Bar" /> */}
      <Graph data={previousData} width={400} height={200} color="blue" title="Текущий график" bottomTitle="Измерения в Bar" />
    </div>
  );
};
export default DataComponent;