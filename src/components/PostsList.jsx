import Post from './post';
import classes from './PostList.module.css';

function PostList() {
return (
<ul className={classes.pos}>
    <Post author="Maximilian" body="React.js is awesome!" />
    <Post author="Alain" body="Check out the full course!" />
</ul>
);
}

export default PostList;