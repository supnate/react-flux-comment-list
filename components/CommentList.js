import React, { Component, PropTypes } from 'react';
import CommentItem from './CommentItem';

export default class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
    })),
  }

  render() {
    return (
      <div className="comment-list">
        {
          this.props.comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
        }
      </div>
    );
  }
}
