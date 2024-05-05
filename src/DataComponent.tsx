import React from 'react';
import Graph from './graph';
interface DataProps {
  data: number[]
}
const DataComponent: React.FC<DataProps> = ({ data }) => {
  const specifiData = [10,2,12,150,45, 20,5, 30, 50, 15,200, 44, 77,88,120]; 

  return (
    <div className='data' style={{ display: 'flex', alignItems:'center', justifyContent: 'center' }} >
      
        <Graph data={specifiData}  width={400} height={200} color='blue'  />
    
      
    </div>
  )
}
export default DataComponent