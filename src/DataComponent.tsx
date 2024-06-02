import React, { useState, useEffect, useMemo } from 'react';
import Graph from './graph';

interface DataProps {
  data: number[]
}

export function getChangedIndices(newData: number[], previousData: number[]): number[] {
  const changedIndices = [];
  for (let i = 0; i < newData.length; i++) {
    if (newData[i] !== previousData[i]) {
      changedIndices.push(i);
    }
  }
  return changedIndices;
}

export const DataComponent: React.FC<DataProps> = ({ data }) => {
  const specificData =  [10,179,110];
  const [previousSpecificData, setPreviousSpecificData] = useState<number[]>(specificData.slice());
  const [previousValues, setPreviousValues] = useState<number[]>([]);
  const [history, setHistory] = useState<number[]>(specificData);

  useEffect(() => {
    const changedIndices = getChangedIndices(specificData, previousSpecificData);

    if (changedIndices.length > 0) {
      console.log('Изменения в specificData:');
      const newPreviousValues = changedIndices.map(index => previousSpecificData[index]);
      console.log('previousValue (Предыдущее значение):', newPreviousValues);
      
      for (const index of changedIndices) {
        console.log(`- Значение на индексе ${index} изменено с ${previousSpecificData[index]} на ${specificData[index]}`);
      }

      setPreviousValues(prev => [...prev, ...newPreviousValues]);
      setPreviousSpecificData(specificData.slice());
    }
  }, [specificData, previousSpecificData]);

  return (
    <div className="data" style={{ display: 'flex', flexDirection: 'column', maxHeight: '1000px' }}>
      <Graph data={specificData} width={400} height={200} color="blue" title="График давления шин" bottomTitle="Измерения в Bar" previousData={previousValues} />
    </div>
  );
}

export default DataComponent;