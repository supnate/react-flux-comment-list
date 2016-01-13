import React, { Component } from 'react';
import CommentActions from '../actions/CommentActions';
import CommentStore from '../stores/CommentStore';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './App.less';

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

  state = getAppState()

  componentDidMount() {
    CommentStore.addChangeListener(this.onStoreChange);
  }

  componentWillUnmount() {
    CommentStore.removeChangeListener(this.onStoreChange);
  }

  onStoreChange() {
    this.setState(getAppState());
  }

  onSubmit(args) {
    CommentActions.create(args.author, args.text);
  }

  render() {
    return (
      <div>
        <h2 className="comment-list-header">Comments ({this.state.comments.length})</h2>
        <CommentList comments={this.state.comments} />
        <CommentForm onSubmit={::this.onSubmit}/>
      </div>
    );
  }
}
