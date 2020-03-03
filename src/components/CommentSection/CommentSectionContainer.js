// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";


const CommentSection = props => {
  const [comments] = useState();
  // Add state for the comments

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {dummyData.comments.map(item => {
        return <Comment comment={item}/>
      })}
     <CommentInput/>;
      
    </div>
  );
};

export default CommentSection;
