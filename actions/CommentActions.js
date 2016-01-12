import AppDispatcher from '../dispatcher/AppDispatcher';
import CommentConstants from '../constants/CommentConstants';

export default {
  create(author, text) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_CREATE,
      text: text
    });
  },

  destroy(id) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_DESTROY,
      id: id
    });
  }
};
