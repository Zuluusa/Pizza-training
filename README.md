# Online course on React

Creation of the front-end part of the pizzeria online store on React

## Technology stack

React technologies used:

### `React Router v6`

Creating navigation without page reloads.

В pizza-training была настроена навигация между главной страницей (http://89.208.104.247/) (также можно нажать на логотип пиццы и он перейдет на главную страницу), корзиной покупок (http://89.208.104.247/cart) и несуществующих страниц (например, http://89.208.104.247/car).

### `Redux Toolkit`

Creating a global data store for the application

### `React Hooks`

Used useState, useContext, useEffect, useSelector and others

Использовались в основном для слежения состояний того или иного блока/элемента.

### `React Pagination`

Not used in this application

### `React Content Loader`

Skeleton

Это требовалось для того, чтобы когда данные запрашивались с бэка и если ответ был долгим, то пока ожидается ответ - загружался скелетон блоков (серые блоки), чтобы пользователь понимал, что скоро всё загрузится подожди немного.

### `Additionally`

- Поиск пицц;

  В шапке приложения есть иконка поиска с полем ввода, вводится, например, название пиццы и на главной странице отрисовываются нужные пиццы.

- Фильтр пицц;

  Настроена фильтрация пицц по ключевым словам: "все", "мясные", "вегетарианские", "гриль", "острые", "закрытые".

- Сортировка пицц.

  Сортировка пицц производится по ключевым словам: "популярности", "цене", "алфовиту".

- Данные о пиццах подгружаются через MockApi, в который я загрузила данные о пиццах в файле в формате json(https://63063016dde73c0f845525d7.mockapi.io/pizza-items?$%7BcategoryId).
