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
          <NewPost onCancel={onStopPosting} onAddppost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Alain" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostList;
