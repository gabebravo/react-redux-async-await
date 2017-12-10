import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';

const recipeList = (WrappedComponent, type, storeData) => { 

  return class extends Component {
    render() {
      return (
        <WrappedComponent>
          { storeData.length > 0 ?
            storeData.map((recipe, index) => {
              return (
                <RecipeItem 
                  key={index} 
                  recipe={recipe}
                  favoritePage={type === 'favorites' ? true: false}
                />
              )
            }): <div></div>
          }
        </WrappedComponent>
      )
    }
  }

}

