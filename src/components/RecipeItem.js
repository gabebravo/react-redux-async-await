import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../actions';

class RecipeItem extends Component {
  state = {
    favorited: false
  }

  favorite(recipe) {
    this.props.addFavorite(recipe);
    this.setState({favorited: true});
  }

  render() {
    let { recipe } = this.props;

    return (
      <div className="recipe-item">
      {
          this.props.favoritePage || this.state.favorited ?
            <div className="star">&#9733;</div>
          :
            <div 
              className="star"
              onClick={() => this.favorite(recipe)}
            >
              &#9734;
            </div>
      }
      <div className="recipe-item">
        <div className="recipe-text">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img 
          src={recipe.thumbnail} 
          alt={recipe.title}
          className="recipe-img"
        />
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = { addFavorite }
export default connect(null, mapDispatchToProps)(RecipeItem);