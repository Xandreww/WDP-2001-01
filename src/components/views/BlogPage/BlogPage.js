import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPage extends Component {
  render() {
    const { blogs } = this.props;
    const blog = blogs.find(blog => blog.id === Number(this.props.match.params.blogId));
    return (
      <>
        <h1>Blog o id: {this.props.match.params.blogId}</h1>
        <p>{blog.date}</p>
        <p>{blog.text}</p>
      </>
    );
  }
}

BlogPage.propTypes = {
  match: PropTypes.object,
  blogs: PropTypes.array,
};

export default BlogPage;
