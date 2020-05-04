import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changedata } from "./action";
function Write() {
  const [write, setWrite] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const [writetitle, setWritetitle] = useState("");

  //   useEffect(() => {
  //     if (click) {
  //       dispatch(changedata(write));
  //     }
  //     return () => {};
  //   }, [write, click]);
  return (
    <div>
      <div className="writehead">
        <div className="headtitle">글쓰기</div>
      </div>
      <div className="writetitle">
        <div>제목</div>
        <div
          className="titleinput"
          onChange={(e) => {
            setWritetitle(e.target.value);
          }}
        >
          <input type="text" />
        </div>
      </div>
      <div
        className="writecontent"
        onChange={(e) => {
          setWrite(e.target.value);
        }}
      >
        내용
        <input type="text" />
      </div>
      <div className="back">
        <button
          onClick={() => {
            const obj = {
              title: writetitle,
              content: write,
            };
            dispatch(changedata(obj));
            history.goBack();
          }}
        >
          작성하기
        </button>
      </div>
    </div>
  );
}

export default Write;
