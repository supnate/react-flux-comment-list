import React, { Component, PropTypes } from 'react';

export default class CommentForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  state = {
    author: '',
    text: '',
    error: '',
  }

  onSubmit(evt) {
    evt.preventDefault();
    if (!this.state.author) {
      this.setState({error: 'User name is required.'});
    } else if (!this.state.text) {
      this.setState({error: 'Comment text is required.'});
    } else {
      this.props.onSubmit({
        author: this.state.author,
        text: this.state.text,
      });

      this.setState({author: '', text: ''});
    }
  }

  render() {
    return (
      <form className="comment-form" onSubmit={::this.onSubmit}>
        <div>
          <label>Your name:</label>
          <input type="text" value={this.state.author}
            onChange={evt => this.setState({author: evt.target.value, error: ''})}
          />
        </div>
        <div>
          <label>Your comment:</label>
          <textarea value={this.state.text}
            onChange={evt => this.setState({text: evt.target.value, error: ''})}
          ></textarea>
        </div>
        {
          this.state.error &&
          <div className="error-msg">
            {this.state.error}
          </div>
        }
        <div className="buttons">
          <button>Submit</button>
        </div>
      </form>
    );
  }
}
