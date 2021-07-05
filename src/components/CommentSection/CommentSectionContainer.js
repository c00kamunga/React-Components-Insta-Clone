// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";



const CommentSection = props => {
  console.log(props)
  // Add state for the comments

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map((item) => {
        return <Comment comment={item} key={item.username}/>
      })}
     <CommentInput/>;
      
    </div>
  );
};

export default CommentSection;
