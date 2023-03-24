import { React, useState, useEffect } from "react";
import axios from "axios";

const UseEffectFetchData = () => {
  const [posts, setPost] = useState({});
  const [id, setId] = useState(1);
  const [btnId, setBtnId] = useState(1);

  const handleClick = () => {
    setBtnId(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [btnId]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{posts.body}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default UseEffectFetchData;
