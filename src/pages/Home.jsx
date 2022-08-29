import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { SearchContext } from '../App';

const Home = () => {
    const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' });

    React.useEffect(() => {
      setIsLoading(true);
      fetch(`https://63063016dde73c0f845525d7.mockapi.io/pizza-items?${categoryId > 0 ? `category=${categoryId}` : '' }&sortBy=${sortType.sortProperty}&order=desc`,).then((res) => res.json()).then((arr) => {
          setItems(arr);
          setIsLoading(false);
      });
      window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    const pizzas = items.filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
    
      return false;
    }).map((obj) => <PizzaBlock key={obj.id} { ... obj} />);

    return (
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading ? [ ...new Array(6)].map((_, index) => <Skeleton key={index} />) : pizzas}
        </div>
      </div>
    );
};

export default Home;