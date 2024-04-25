import React from 'react';
import Graph from './graph';
interface DataProps {
  data: number[]
}
const DataComponent: React.FC<DataProps> = ({ data }) => {
  const specifiData = [10, 20, 30, 40, 50]; 
  return (
    <div>
      <p> Данные для графика {JSON.stringify(data)}
        </p>
      <Graph data={specifiData}  width={400} height={200} color='blue' />
    </div>
  )
}
export default DataComponent