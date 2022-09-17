import React from "react";
import MyButton from "./UI/button/MyButton";
import "../styles/PostItem.css";

const PostItem = ({ remove, ...postData }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {postData.post.id}. {postData.post.title}
        </strong>
        <div>{postData.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(postData.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
