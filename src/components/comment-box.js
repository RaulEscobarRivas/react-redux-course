import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  onChangeHandler(event) {
    this.setState({ comment: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form 
        className="comment-box"
        onSubmit={this.onSubmitHandler.bind(this)}
      >
      	<textarea
          value={this.state.comment}
          onChange={this.onChangeHandler.bind(this)}
        />
      	<button action={"submit"}>
      			{'Submit Comment'}
      	</button>
      </form> 
    );
  }
}

export default connect(null, actions)(CommentBox);