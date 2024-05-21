import React, { useState, useEffect } from 'react';
import Graph from './graph';
interface DataProps {
  data: number[]
}
const DataComponent: React.FC<DataProps> = ({ data }) => {
  const specificData = [10, 21, 17, 13, 71, 15, 22, 40, 67, 137, 90, 103];
  const [previousSpecificData, setPreviousSpecificData] = useState<number[]>(specificData.slice()); // Хранение предыдущего состояния specificData
  useEffect(() => {
    const changedIndices = getChangedIndices(specificData, previousSpecificData);

    if (changedIndices.length > 0) {
      console.log('Изменения в specificData:');
      for (const index of changedIndices) {
        console.log(`- Значение на индексе ${index} изменено с ${previousSpecificData[index]} на ${specificData[index]}`);
      }

      setPreviousSpecificData(specificData.slice());
    }
  }, [specificData]);
  function getChangedIndices(newData: number[], previousData: number[]): number[] {
    const changedIndices = [];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i] !== previousData[i]) {
        changedIndices.push(i);
      }
    }
    return changedIndices;
  }

  return (
    <div className="data" style={{ display: 'flex', flexDirection: 'column', maxHeight: '1000px' }}>
      <Graph data={specificData} width={400} height={200} color="blue" title="График давления шин" bottomTitle="Измерения в Bar" />
    </div>
  );
}
export default DataComponent