import React from 'react';
import "./App.css";

function App() {
  return (
    <header className="bg-white">
      {/* <!-- Верхняя строка --> */}
      <div className="header-top justify-between">

        <div className="header-top">

          {/* <!-- Логотип --> */}
          <div className="header-logo">
            <img src="/images/logo.png" alt="Gidratop Logo" className="h-8"/>
          </div>

          {/* <!-- Меню навигации --> */}
          <nav className="header-menu flex ml-4 space-x-6">
            <a href="#" className="navigation-link">О нас</a>
            <a href="#" className="navigation-link">Производители</a>
            <a href="#" className="navigation-link">Гарантии и возврат</a>
            <a href="#" className="navigation-link">Доставка</a>
            <a href="#" className="navigation-link">Оплата</a>
            <a href="#" className="navigation-link">Контакты</a>
          </nav>
        </div>

        {/* <!-- Вход / Регистрация --> */}
        <div className="header-auth">
          <a href="#" className="text-gray-700 hover:text-blue-600">Вход / Регистрация</a>
        </div>
      </div>

      {/* <!-- Нижняя строка --> */}
      <div className="header-bottom flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          {/* <!-- Каталог товаров --> */}
          <button className="catalog-button min-w-[200px] flex items-center text-gray-700 hover:text-blue-600">
            <img src="/svg/9points.svg" alt="Сatalog" className=" mr-2 h-8"/>
            <p className='text-blue-500'>Каталог товаров</p>
          </button>

          {/* <!-- Поиск -->  */}
          <div className="p-4 w-full max-w-md flex">
            <input 
              type="text" 
              placeholder="Поиск товаров и брендов" 
              className="w-full min-w-[200px] max-w-[700px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              🔍
            </button>
          </div>

          {/* <!-- Телефон --> */}
          <div className="contact-phone text-gray-700 w-[300px]">
            <a href="tel:88000000000" className="hover:text-blue-600">8-800-000-00-00</a>
            <br />
            <a href="#" className="text-sm text-blue-600 hover:underline">Вам перезвонить?</a>
          </div>
        </div>
        {/* <!-- Иконки --> */}
        <div className="header-icons flex space-x-6">
          <a href="#" className="icon-favorites text-gray-700 hover:text-blue-600">❤️ Избранное</a>
          <a href="#" className="icon-compare text-gray-700 hover:text-blue-600">🔄 Сравнение</a>
          <a href="#" className="icon-cart text-gray-700 hover:text-blue-600">🛒 Корзина</a>
        </div>
      </div>
    </header>

  
  );
}

export default App;