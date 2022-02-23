import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const GetAPost = () => {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    getFetch();
  }, [!posts]);



  const getFetch = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          },
        }
      );

      let data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    {posts === undefined && <div className="spinner-border text-primary" style={{marginLeft: '47%'}} role="status">
  <span className="sr-only">Loading...</span>
</div>}
      {posts && posts.filter((post,idx)=>idx > posts.length - 5 && idx < posts.length).map((post) =>  <SinglePost username={post.username} text={post.text} key={post._id} unique={post._id}/>
      )}
    </>
  );
};

export default GetAPost;
