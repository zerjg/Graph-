import React from 'react';
import Graph from './graph';
interface DataProps {
  data: number[]
}
const DataComponent: React.FC<DataProps> = ({ data }) => {
  const specifiData = [10, 20, 10, 30, 50]; 

  return (
    <div style= {{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
      <div style={{ marginTop: 25 }}>
      <p> Данные для графика {JSON.stringify(data)}
        </p>
        </div>
      <Graph data={specifiData}  width={400} height={200} color='blue'  />
    </div>
  )
}
export default DataComponent