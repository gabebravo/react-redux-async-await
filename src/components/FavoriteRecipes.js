import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class FavoriteRecipes extends Component {
  render() {
    const { favorites } = this.props;
    return (
      <div>
        <Link to='/'>
          <img className="back-icon" src="img/arrow-thick-left.svg" />
        </Link>
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

