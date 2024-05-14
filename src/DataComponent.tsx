import React from 'react';
import Graph from './graph';
interface DataProps {
  data: number[]
}
const DataComponent: React.FC<DataProps> = ({ data }) => {
  const specifiData = [10,2,12,150,70,15,22,40,67,89,90,103]; 

  return (
    <div className='data' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '400px' }} >
      
        <Graph data={specifiData}  width={400} height={200} color='blue' title='График давления шин'  bottomTitle='Отчетная информация'/>
        {/* <Graph data={specifiData}  width={300} height={100} color='Lime' title='График скорости' />
        <Graph data={specifiData}  width={80} height={70} color='SpringGreen' title='График температуры' /> */}
    </div> 
  )
}
export default DataComponent