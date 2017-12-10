import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    const { recipes, favorites } = this.props;
    return (
      <div className="d-flex justify-content-center flex-wrap">
        {
          favorites.length > 0 ?
            <h4 className="link">
              <Link to='/favorites'>Favorites</Link>
            </h4>
          :
            <div></div>
        }
        { recipes.length > 0 ?
          this.props.recipes.map((recipe, index) => {
            return (
              <RecipeItem 
                key={index} 
                recipe={recipe}
                favoritePage={false}
              />
            )
          }): <div></div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ recipes, favorites }) => ({ recipes, favorites });
export default connect(mapStateToProps, null)(RecipeList);

