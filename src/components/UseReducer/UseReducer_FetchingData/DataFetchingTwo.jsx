import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initalState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  //invoke useReducer
  const [state, dispatch] = useReducer(reducer, initalState);

  //call API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/10")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      <h3>{state.loading ? "Loading Title..." : state.post.title}</h3>
      {state.loading ? "Loading Title..." : state.post.body}
      {state.error ? state.error : null}
    </div>
  );
};

export default DataFetchingTwo;
