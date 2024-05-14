import React from 'react';
import styles from './graph.module.css'

type Props = {
  data: number[];
  width: number;
  height: number;
  color: string;
  title: string;
  bottomTitle?: string
};

const Graph: React.FC<Props> = ({
  data,
  width,
  height,
  color,
  title,
  bottomTitle,
}) => {
  const maxValue = Math.max(...data);
  const topContainer = 30;
  const bottomAreaContainer = 30;
  const contentContainer = height - topContainer - bottomAreaContainer;

  const { mainContainer, top_Container, content_Container, graph, dataBar, graphColumn, spanValue } = styles
  const widthHeight = {
    minHeight: `${height}px`,
    width: `${width}px`,
  }

  return (
    <div className={mainContainer} style={widthHeight} >
      <div className={top_Container} style={{ minHeight: topContainer }}>{title}</div>
      <div className={graph} style={{ minHeight: contentContainer }}>
        {data.map((value, index) => (
          <div className={dataBar} key={index} >
            <div style={{
              backgroundColor: color,
              width: (width - (data.length - 1) * 45) / data.length,
              height: `${(value / maxValue) * contentContainer}px`,
            }} />
            <span className={spanValue} style={{ color, padding: 0 }}>{value}</span>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: '#00ff00', minHeight: bottomAreaContainer }}>{bottomTitle}</div>
    </div>
  );
};
export default Graph; 
