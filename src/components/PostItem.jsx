import React from "react";
import MyButton from "./UI/button/MyButton";
import "../styles/PostItem.css";
import { useNavigate } from "react-router-dom";

const PostItem = ({ remove, ...postData }) => {
  const router = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {postData.post.id}. {postData.post.title}
        </strong>
        <div>{postData.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${postData.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => remove(postData.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
