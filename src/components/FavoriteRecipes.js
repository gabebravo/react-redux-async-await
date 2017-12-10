import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class FavoriteRecipes extends Component {
  render() {
    const { favorites } = this.props;
    return (
      <div>
        <h3>Favorite Recipes</h3>
        { favorites.length > 0 ?
          favorites.map((recipe, index) => {
            return (
              <RecipeItem 
                key={index} 
                recipe={recipe}
                favoritePage={true}
              />
            )
          }): <div></div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ favorites }) => ({ favorites });
export default connect(mapStateToProps, null)(FavoriteRecipes);

