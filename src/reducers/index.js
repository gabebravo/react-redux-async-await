// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { ADD_RECIPES, ADD_FAVORITE } from '../actions';

const recipes = (store = [], action) => {
  switch(action.type){
    case ADD_RECIPES :
      return [...action.recipes];
    default :
      return store;
  }
}

const favorites = (store = [], action) => {
  switch(action.type){
    case ADD_FAVORITE :
      return [...store, action.recipe];
    default :
      return store;
  }
}

export default combineReducers({
  recipes, favorites
});