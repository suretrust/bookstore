import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import categories from '../utilities/categories'

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
    const { title, category } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Book Title"
          />
          <select
            name="category"
            value={category}
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
          <button type="submit" onClick={this.handleSubmit}>Add Book</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired
};

export default connect(null, { createBook })(BooksForm);
