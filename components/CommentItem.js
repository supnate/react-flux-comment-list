import React, { Component, PropTypes } from 'react';

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
    }),
  }

  render() {
    return (
      <div className="comment-item">
        <div className="author-avatar"></div>
        <div className="comment-header">
          <a href="#">{this.props.comment.author}</a>
          <label>{this.props.comment.date.toLocaleString()}</label>
        </div>
        <p>{this.props.comment.text}</p>
      </div>
    );
  }
}
