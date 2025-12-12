import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostList.module.css';
import { useState } from 'react';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((post, index) => (
          <Post key={index} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
