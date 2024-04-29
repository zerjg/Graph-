import React from 'react'; // Импортируем библиотеку React
import { useEffect, useState } from 'react';
type DataItem = {
  name: string,
  value: number
}

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

  const bottomAreaContainer = height - topContainer - contentContainer 

  return (

    // 1-div контейнер отвечает за общую область отображения графика
    <div style={{
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
        <div key={index} style={{ marginBottom: 2, marginRight: 30 }}>

          {/* 3-div представляет сам столбец графика */}
          <div style={{
            backgroundColor: color ,
          
            width: width / data.length, // Рассчитываем ширину столбца
            height: `${(value / maxValue) * height}px`, // Рассчитываем высоту столбца относительно максимального значения
          }}>
            {/* span отображает текстовое значение столбца */}
          </div>
          {/*Отображаем текстовое значение столбца*/}
          <span style={{ color, padding: 0 }}>{value} Bar</span>
          
        </div>
      ))}
      <div className="main-container" style={{
        height: height, display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="top-container" style={{ height: `${topContainer}px` }}>График показателей в барах</div>
        <div className="content-container" style={{ height: `${contentContainer}px` }}>Гадя Петрович </div>
        <div className="bottom_area-container" style={{ height: `${bottomAreaContainer}px` }}>Рассчет</div>
      </div>

    </div>

  );
};

export default Graph; // Экспортируем компонент Graph