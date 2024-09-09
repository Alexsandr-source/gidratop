import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Подключение глобальных стилей (например, Tailwind CSS)
import App from './App'; // Основной компонент приложения
import reportWebVitals from './reportWebVitals'; // Для измерения производительности

// Создание корневого элемента для рендеринга
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Рендеринг приложения
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Опционально: измерение производительности приложения
reportWebVitals();
