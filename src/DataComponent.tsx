import React, { useState, useEffect } from 'react';
import Graph from './graph';

interface DataProps {
  // Удалите пропс data, так как он больше не нужен
}

export const DataComponent: React.FC<DataProps> = ()  => {
  const [specificData, setSpecificData] = useState<{ current: number; previous: number | null }[]>([
    { current: 13, previous: 28 },
    { current: 80, previous: 54 },
    { current: 40, previous: 100 },
    { current: 50, previous: 33 },
    { current: 90, previous: 105 },
    { current: 240, previous: 105 },
  ]);
  const [previousData, setPreviousData] = useState<{ current: number; previous: number | null }[]>([]);

  useEffect(() => {
    setPreviousData(specificData.filter(item => item.previous !== null));
  }, [specificData]);

  return (
    <div className="data" style={{ display: 'flex', flexDirection: 'row', maxHeight: '1000px' }}>
        {/* <Graph data={specificData} width={400} height={200} color="blue" title="Текущие данные" bottomTitle="Измерения в Bar" /> */}
      <Graph data={previousData}  height={200} color="blue" title="Текущий график" bottomTitle="Измерения в Bar" />
    </div>
  );
};
export default DataComponent;