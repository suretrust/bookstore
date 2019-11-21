import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  state = {
    title: '',
    category: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;

    if (title && category) {
      createBook(title, category);
      this.setState({
        title: '',
        category: ''
      });
    }
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
        <form>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Book Title"
          />
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            id=""
          >
            <option defaultValue="">Choose a category</option>
            {categories.map(category => (
              <option key={categories.indexOf(category)} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default connect(null, { createBook })(BooksForm);
