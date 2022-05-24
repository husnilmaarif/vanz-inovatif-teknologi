import React from "react";
import { useSelector } from "react-redux";

function ShowList() {
  const { title, content } = useSelector((state) => state.list);

  return (
    <>
      <div className="col-md-5 text-center p-5 shadow bg-light">
        <h4>{title}</h4>
        <hr />
        <p>{content}</p>
      </div>
    </>
  );
}

export default ShowList;
