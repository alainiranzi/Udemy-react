import React, { useState } from 'react';
import NewPost from './NewPost';
import Post from './post';
import Modal from './Modal';
import classes from './PostList.module.css';

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, author: 'Alain', body: 'Check out the full course!' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    // optional: reset inputs when closing
    setEnteredBody('');
    setEnteredAuthor('');
  }

  function submitHandler() {
    // simple validation (already required in form)
    const newPost = {
      id: Date.now(),
      author: enteredAuthor.trim() || 'Anonymous',
      body: enteredBody.trim()
    };
    if (!newPost.body) return; // don't add empty
    setPosts(prev => [newPost, ...prev]);
    closeModal();
  }

  return (
    <>
      <div className={classes.controls}>
        <button onClick={openModal}>Create new post</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <NewPost
          body={enteredBody}
          author={enteredAuthor}
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
          onSubmit={submitHandler}
          onCancel={closeModal}
        />
      </Modal>

      <ul className={classes.pos}>
        {posts.map(post => (
          <Post key={post.id} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
