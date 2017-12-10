import axios from 'axios';

export const ADD_RECIPES = 'ADD_RECIPES';
export const addRecipes = recipes => ({
  type: ADD_RECIPES, recipes
});

// ASYNC HELPER FUNCTIONS >> use Thunks + async/await
export const handleAddingRecipes = (ingredients = '', dish = '') => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`);
      const results = await response.data.results;
      dispatch(addRecipes(results));
    } catch(res) {
      console.log(res.error)
    }
  }
}

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = recipe => ({
  type: ADD_FAVORITE, recipe
});

// ASYNC HELPER FUNCTIONS >> Basic Thunk
// export const handleAddingRecipes = (ingredients = '', dish = '') => {
//   return (dispatch) => {
//     axios.get(`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`)
//     .then( response => dispatch(addRecipes(response.data.results)) )
//     .catch( response => console.log(response.error))
//   }
// }