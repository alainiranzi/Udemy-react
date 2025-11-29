import React from 'react';
import classes from './NewPost.module.css';

function NewPost({ body, author, onBodyChange, onAuthorChange, onSubmit, onCancel }) {
  function submitHandler(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(); // parent handles validation & adding post
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={onBodyChange}
          value={body}
          placeholder="Write something..."
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onAuthorChange}
          value={author}
          placeholder="Your name"
        />
      </p>
      <div className={classes.actions}>
        <button type="submit">Post</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default NewPost;
