import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const GetAPost = () => {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    getFetch();
    console.log("fuck silvio" + posts);
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {posts && posts.filter((post,idx)=> idx < 10).map((post) =>  <SinglePost username={post.username} text={post.text} />
      )}
    </>
  );
};

export default GetAPost;
