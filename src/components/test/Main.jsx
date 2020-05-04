import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Main() {
  const history = useHistory();
  const rdxducer = useSelector((state) => state.reducer);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(rdxducer.data);
    return () => {};
  }, [rdxducer]);
  return (
    <div className="all">
      <div className="write">
        <button
          onClick={() => {
            history.push("/write");
          }}
        >
          글쓰기
        </button>
      </div>
      <div className="cardpack">
        {data.map((item, idx) => {
          return <Card key={idx} title={item.title} content={item.content} />;
        })}
      </div>
    </div>
  );
}

export default Main;
