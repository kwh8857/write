import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      to={{
        pathname: "/sub",
        state: {
          title: props.title,
          content: props.content,
        },
      }}
      className="card"
    >
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </Link>
  );
}

export default Card;
