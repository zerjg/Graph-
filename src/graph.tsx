
import React from 'react';
import styles from './graph.module.css'

type Props = {
  data: number[];
  width: number;
  height: number;
  color: string;
  title: string;
  bottomTitle?: string;
  previousData: number[]  
};

const Graph: React.FC<Props> = ({
  data,
  width,
  height,
  color,
  title,
  bottomTitle,
  previousData
}) => {
  
 
  const maxValue = Math.max(...data);
  const topContainer = 30;
  const bottomAreaContainer = 30;
  const contentContainer = height - topContainer - bottomAreaContainer;

  const { mainContainer, top_Container, content_Container, dataBar, graphColumn, spanValue,graphColumn_previous } = styles
  const mainContainerStyle = {
    '--main-container-width': `${width}px`,
    '--main-container-height': `${height}px`
  } as React.CSSProperties;
  const graphColumnStyle = {
    '--column-width': `${(width - (data.length - 1) * 45) / data.length}px`,
    '--backgr-color-column': `${color}`
  } as React.CSSProperties;
  const spanValueStyle = {
    '--spanColor': `${color}`
  } as React.CSSProperties;

  return (
    <div className={mainContainer} style={mainContainerStyle}>
      <div className={top_Container} style={{ minHeight: topContainer }}>{title}</div>
      <div className={content_Container} style={{ minHeight: contentContainer }}>
        {data.map((value, index) => (
          <div className={dataBar} key={index} >
            <div className={graphColumn} style={{ height: `${(value / maxValue) * contentContainer}px`, ...graphColumnStyle }} />
            <span className={spanValue} style={spanValueStyle}>{value}</span>
          </div>
        ))}
  {previousData.map((value, index) => (
          <div className={dataBar} key={index} >
            <div className={graphColumn_previous} style={{ height: `${(value / maxValue) * contentContainer}px`, ...graphColumnStyle }} />
            <span className={spanValue} style={spanValueStyle}>{value}</span>
          </div>
        ))}

      </div>
      <div className="bottomArea" style={{ minHeight: bottomAreaContainer }}>{bottomTitle}</div>
    </div>
  );
};
export default Graph;