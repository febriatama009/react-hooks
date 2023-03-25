import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  //set the State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  //call API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      <h3>{loading ? "Loading Title..." : post.title}</h3>
      {error ? error : null}
    </div>
  );
};

export default DataFetchingOne;
