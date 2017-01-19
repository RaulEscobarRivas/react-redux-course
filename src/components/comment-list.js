import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => (
    <ul className="comment-list">
        {comments.map( comment => <li>{comment}</li> )}
    </ul>
);

const mapStateToProps = state => (
    {
        comments: state.comments
    }
);

export default connect(mapStateToProps)(CommentList);