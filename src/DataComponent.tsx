import React from 'react';
import Graph from './graph';
interface DataProps {
  data: number[]
}
const DataComponent: React.FC<DataProps> = ({ data }) => {
  const specifiData = [10,2,12,150,45, 20,5, 30, 50, 15,200, 44, 77,88,120]; 

  return (
    <div className='data' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '400px' }} >
      
        <Graph data={specifiData}  width={400} height={200} color='blue' title='График давления шин' />
        <Graph data={specifiData}  width={300} height={100} color='Lime' title='График скорости' />
        <Graph data={specifiData}  width={80} height={70} color='SpringGreen' title='График температуры' />
    </div> 
  )
}
export default DataComponent