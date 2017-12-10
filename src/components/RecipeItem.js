import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../actions';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

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
      <div>
        <Card className="recipe-card">
          <CardImg top 
            src={recipe.thumbnail} 
            alt={recipe.title} />
          <CardBody>
            <CardTitle inline="true">
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
            <a href={recipe.href}>
              <h4>{recipe.title}</h4>
            </a>
            </CardTitle>
            <CardText>{recipe.ingredients}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = { addFavorite }
export default connect(null, mapDispatchToProps)(RecipeItem);