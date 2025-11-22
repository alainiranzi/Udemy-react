import classes from './NewPost.module.css';

function NewPost() {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" />
                    </p>
                    </form>
    );
}
export default NewPost;

    