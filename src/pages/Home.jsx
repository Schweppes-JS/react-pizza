import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  LoadingPizzaBlock,
} from "../components";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = [
  "Мясные",
  "Вегетерианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярность", type: "popular", order: "desc" },
  { name: "цена", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const stableDispatch = useCallback(dispatch, [dispatch])

  React.useEffect(() => {
    stableDispatch(fetchPizzas(category, sortBy));
  }, [stableDispatch, category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    stableDispatch(setCategory(index));
  }, [stableDispatch]);

  const onClickSortType = React.useCallback((type) => {
    stableDispatch(setSortBy(type));
  }, [stableDispatch]);

  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onClickSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
            <PizzaBlock
              onAddPizza={handleAddPizza}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}
            />
          ))
          : Array(10)
            .fill(0)
            .map((_, index) => <LoadingPizzaBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
