import axios from 'axios';

export async function fetchRecipeData (state) {
  try {
    const { ingredients, dish } = state
    const ingredientsStr = ingredients.split(', ').join(',');
    const response = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredientsStr}&q=${dish}`)
      return response.data.result;
  } catch (e) {
    console.error(e); // 💩
  }
}