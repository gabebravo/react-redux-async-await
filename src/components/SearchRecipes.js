import React, { Component } from 'react';
import { Form, FormGroup, FormControl, 
  ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RecipeList from './RecipeList';

class SearchRecipes extends Component {

  state = {
    ingredients: '',
    dish: ''
  }

  resetForm = () => this.setState({ ingredients: '', dish: '' });

  // api call ex. http://www.recipepuppy.com/api/?i=garlic,tofu&q=adobo
  submitForm = e => {
    e.preventDefault();
    const { ingredients, dish } = this.state
    const ingredientsStr = ingredients.split(', ').join(',');
    this.props.handleAddingRecipes(ingredientsStr, dish);
    this.resetForm();
  }

  render(){
    return (
      <div>
        <h3>Recipe Finder</h3>
        <Form inline>
          <FormGroup>
            <ControlLabel>Ingredients</ControlLabel>{' '}
            <FormControl type="text" placeholder="tofu, garlic, rice"
              value={this.state.ingredients}
              onChange={ e => this.setState({ ingredients: e.target.value }) } />
          </FormGroup>{' '}
          <FormGroup>
          <ControlLabel>Dish</ControlLabel>{' '}
            <FormControl type="text" placeholder="Garlic Tofu and Rice"
              value={this.state.dish}
              onChange={ e => this.setState({ dish: e.target.value }) } />
          </FormGroup>{' '}
          <Button onClick={this.submitForm}>Submit</Button>
        </Form>
        <RecipeList />
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes });
export default connect( mapStateToProps, actions )(SearchRecipes);