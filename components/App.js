import React, { Component } from 'react';
import CommentStore from '../stores/CommentStore';
import CommentList from '../components/CommentList';

function getAppState() {
  return {
    comments: CommentStore.getAll(),
  };
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  state = {
    comments: []
  }

  componentDidMount() {
    CommentStore.addChangeListener(this.onStoreChange);
  }

  componentWillUnmount() {
    CommentStore.removeChangeListener(this.onStoreChange);
  }

  onStoreChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div>
        <h2>Comments ({this.state.comments.length})</h2>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}
