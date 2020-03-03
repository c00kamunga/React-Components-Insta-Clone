// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";



const CommentSection = props => {
  const [comments] = useState();
  console.log(props)
  // Add state for the comments

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comment.map((item) => {
        return <Comment comment={item}/>
      })}
     <CommentInput/>;
      
    </div>
  );
};

export default CommentSection;
