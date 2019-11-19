import React from 'react';

class BooksForm extends React.Component {
  state = {
    title: '',
    category: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  };

  

  render() {

    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi'
    ];
  
    return (
      <div>
        <form onChange={this.handleChange}>
          <input type="text" name='title' value={this.state.title} placeholder="Book Title"/>
          <select name="category" value={this.state.category} id="" >
            <option value="">Choose a category</option>
            {categories.map(category => (
              <option key={categories.indexOf(category)} value={category}>{category}</option>
            ))}
          </select>
          <input type="submit" value="Add a Book" />
        </form>
        <p>title: {this.state.title} || category: {this.state.category}</p>
      </div>
    );
  }
 };

export default BooksForm;
