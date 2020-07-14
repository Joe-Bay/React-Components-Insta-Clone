import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(comments[0])

  return (
    <div>
      {/* map through the comments data array and render a Comment for every comment piece of data */}
      {
        comments.map(item => {
          return <Comment comment={item}/>
        })
      }
    </div>
  );
};

export default Comments;
