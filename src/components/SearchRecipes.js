import React, { Component } from 'react';
import { Form, FormGroup, Input, 
  Label, Button } from 'reactstrap';
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
        <div className="search-wrapper">
          <div className="d-flex justify-content-center">
            <h3 className="search-header">Recipe Finder</h3>
          </div>
          <div>
            <Form style={{marginBottom: '3rem'}}>
              <FormGroup className="search-form">
                <Label>Ingredients</Label>
                <Input type="text" placeholder="tofu, garlic, rice"
                  value={this.state.ingredients}
                  onChange={ e => this.setState({ ingredients: e.target.value }) } />
              </FormGroup>
              <FormGroup className="search-form">
              <Label>Dish</Label>
                <Input type="text" placeholder="Garlic Tofu and Rice"
                  value={this.state.dish}
                  onChange={ e => this.setState({ dish: e.target.value }) } />
              </FormGroup>
              <Button onClick={this.submitForm}>Submit</Button>
            </Form>
          </div>
        </div>
        <RecipeList />
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes });
export default connect( mapStateToProps, actions )(SearchRecipes);