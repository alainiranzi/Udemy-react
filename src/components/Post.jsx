

function Post(props) {


    return (
        <div className="git">
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    );
}
export default Post;