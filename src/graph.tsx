
import React from 'react'; // Импортируем библиотеку React

type Props = { // Определяем тип Props для компонента Graph
  data: number[]; // Массив чисел для отображения на графике
  width: number; // Ширина области графика
  height: number; // Высота области графика
  color: string; // Цвет столбцов графика
};

const Graph: React.FC<Props> = ({ data, width, height, color }) => { // Создаем компонент Graph с использованием деструктуризации Props

  const maxValue = Math.max(...data); // Находим максимальное значение в массиве data
  const topContainer = 30;
  const contentContainer = 30;

  const bottomAreaContainer = height -  topContainer - contentContainer 

  return (
    <div className="mainContainer" style={{
      height: height, display: 'flex',
      flexDirection: 'column'}}>
      
        <div className='graphContainer' style={{
          position: 'relative', // Устанавливаем позицию элемента
          top: 10, // Отступ сверху
          width: width, // Устанавливаем ширину
          height: height, // Устанавливаем высоту
          backgroundColor: 'white', // Цвет фона
          padding: 10, // Внутренний отступ
          display: 'flex', // Устанавливаем flex-контейнер
          flexDirection: 'row', // Направление основной оси
          alignItems: 'flex-end', // Выравнивание элементов по вертикали
          justifyContent: 'center', // Выравнивание элементов по горизонтали 
        }}>

          {data.map((value, index) => (
            // 2-div контейнер отвечает за вертикальное выравнивание столбцов графика
            <div className='graphColumnContainer' key={index} style={{ marginBottom: 2, marginRight: 30 }}>

              {/* 3-div представляет сам столбец графика */}
              <div className='graphColumn' style={{
                backgroundColor: color,

                width: width / data.length, // Рассчитываем ширину столбца
                height: `${(value / maxValue) * height}px`, // Рассчитываем высоту столбца относительно максимального значения
              }}>
                {/* span отображает текстовое значение столбца */}
              </div> {/* закрывание контейнера graphColumn */}
              
              {/*Отображаем текстовое значение столбца*/}
              <span style={{ color, padding: 0 }}>{value} Bar</span>

            </div> /* Закрывается контейнер graphColumnContainer */ 

          ))}

        </div> {/* Закрывается контейнер graphContainer */ }

        <div className="top-container" style={{ height: `${topContainer}px` }}>График показателей в барах</div>
       
      
        <div className="content-container" style={{ height: `${contentContainer}px`, }}> Компания "Luxor" </div> 
          <div className="bottom_area-container" style={{ height: `${bottomAreaContainer}px` }}>Рассчет</div> 
        
       

    </div> /* Закрывается контейнер mainContainer */ 

  );
};

export default Graph; // Экспортируем компонент Graph
