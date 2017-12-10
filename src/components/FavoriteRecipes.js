import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class FavoriteRecipes extends Component {
  render() {
    const { favorites } = this.props;
    return (
      <div>
        <div className="d-flex justify-content-center flex-wrap">
          <h3 className="search-header">Favorite Recipes</h3>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <Link to='/'>
            <img className="back-icon" src="img/arrow-thick-left.svg" />
          </Link>
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
      </div>
    )
  }
}

const mapStateToProps = ({ favorites }) => ({ favorites });
export default connect(mapStateToProps, null)(FavoriteRecipes);

