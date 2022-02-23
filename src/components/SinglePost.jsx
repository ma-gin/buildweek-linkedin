const SinglePost = (props) => {
  return (
    <div className="card-section p-4 mb-3">
      <h4> {props.username}</h4>
      <span>{props.text}</span>
    </div>
  );
};
export default SinglePost;
