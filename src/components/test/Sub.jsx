import React from "react";
import { useHistory, Link } from "react-router-dom";

function Sub(props) {
  const title = props.location.state.title;
  const content = props.location.state.content;
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </button>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
}

export default Sub;
