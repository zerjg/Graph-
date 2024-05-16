import React from 'react';
import Graph from './graph';
interface DataProps {
  data: number[]
}
const DataComponent: React.FC<DataProps> = ({ data }) => {
  const specifiData = [10,2,12,150,70,15,22,40,67,137,90,103]; 
  const specificSpeed = [39,70,102]

  return (
    <div className='data' style={{ display: 'flex',flexDirection: 'column' , maxHeight: '1000px' }} >
      
        <Graph data={specifiData}  width={400} height={200} color='blue' title='График давления шин'  bottomTitle='Измерения в Bar'/>
        <Graph data={specificSpeed}  width={300} height={100} color='Lime' title='График скорости'  bottomTitle='Измерения в км/час'/>
        <Graph data={specifiData}  width={700} height={70} color='SpringGreen' title='График температуры' bottomTitle='Измерение в Цельсий' />
    </div> 
  )
}
export default DataComponent