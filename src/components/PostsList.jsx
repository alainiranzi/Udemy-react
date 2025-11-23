import { useState } from 'react';
import NewPost from './NewPost';
import Post from './post';
import classes from './PostList.module.css';

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost 
        onBodyChange={bodyChangeHandler} 
        onAuthorChange={authorChangeHandler} 
      />

      <ul className={classes.pos}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Alain" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostList;
