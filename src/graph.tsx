import React from 'react';
import styles from './graph.module.css'

type Props = {
  data: { current: number; previous: number | null }[];
  width: number;
  height: number;
  color: string;
  title: string;
  bottomTitle?: string;
};

const Graph: React.FC<Props> = ({
  data,
  width,
  height,
  color,
  title,
  bottomTitle
}) => {
  const maxValue = Math.max(...data.map(item => item.current));
  const topContainer = 30;
  const bottomAreaContainer = 30;
  const contentContainer = height - topContainer - bottomAreaContainer;
  const { mainContainer, top_Container, content_Container, dataBar, graphColumn, spanValue, graphColumn_previous, graph_previous } = styles
  const mainContainerStyle = {
    '--main-container-width': `${width}px`,
    '--main-container-height': `${height}px`
  } as React.CSSProperties;
  const graphColumnStyle = {
    '--column-width': `${width * 0.1}px`,
    '--backgr-color-column': `${color}`
  } as React.CSSProperties;

  const graphColumn_previousStyle = {
    '--column-width': `${Math.max(...data.map(item => item.previous ?? 0))}px`,
    '--backgr-color-column': `${color}`

  } as React.CSSProperties;

  const spanValueStyle = {
    '--spanColor': `${color}`
  } as React.CSSProperties;
 const minWContContainer = {
  '--min-Width': `${width}`
 } as React.CSSProperties;
  return (
    <div className={mainContainer} style={mainContainerStyle}>
      <div className={top_Container} style={{ minHeight: topContainer }}>{title}</div>
      <div className={content_Container} style={{ minHeight: contentContainer, ...minWContContainer }}>
        {data.map(({ current, previous }, index) => (
          <>
            <div className={dataBar} key={`current-${index}`}>
              <div className={graphColumn} style={{ height: `${(current / maxValue) * contentContainer}px`, ...graphColumnStyle }} />
              <span className={spanValue} style={spanValueStyle}>{current}</span>
            </div>
            {previous !== null && (
              <div className={dataBar} key={`previous-${index}`}>
                <div className={graphColumn_previous} style={{ height: `${(previous / maxValue) * contentContainer}px`, ...graphColumn_previousStyle }} />
                <span className={spanValue} style={spanValueStyle}>{previous}</span>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="bottomArea" style={{ minHeight: bottomAreaContainer }}>{bottomTitle}</div>
    </div>
  );
};
export default Graph;