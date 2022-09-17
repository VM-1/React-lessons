import React, { useState, useMemo, useEffect } from "react";
import MyModal from "../components/UI/MyModal/MyModal";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader.jsx";
import { useFeatching } from "../hooks/useFatching";
import { getPageCount, getPagesArray } from "../utils/page";
import axios from "axios";
import "../styles/Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [postsLimit, setPostsLimit] = useState(10);
  const [page, setPage] = useState(1);
  let pagesArray = getPagesArray(totalPages);

  const [fetchPosts, isPostLoiading, postError] = useFeatching(async () => {
    const response = await PostService.getAll(postsLimit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, postsLimit));
  });

  const changePage = (page) => {
    setPage(page);
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (removedPost) => {
    setPosts(posts.filter((post) => post.id !== removedPost.id));
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Прозошла ошибка {postError}</h1>}
      {isPostLoiading ? (
        <Loader />
      ) : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <MyButton
            onClick={() => changePage(p)}
            className={
              page === p ? "page__wrapper_btn active" : "page__wrapper_btn"
            }
            key={p}
          >
            {p}
          </MyButton>
        ))}
      </div>
    </div>
  );
}

export default Posts;
