import React, {useEffect} from 'react';
import {UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY} from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from "../../utils/GlobalState";
import './style.css';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  const {categories} = state;

  useEffect(() =>{
    if(categoryData){
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    }
  }, [categoryData, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <div className="shop-left">
      {categories.map((item) => (
        <button
          className = "product-btn"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
