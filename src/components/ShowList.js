import React from "react";
import { useSelector } from "react-redux";

function ShowList() {
  const noteList = useSelector((state) => state.lists.value);

  return (
    <>
      {noteList.map((list) => {
        return (
          <div className="col-md-6 m-2 p-4 shadow">
            <h1>{list.title}</h1>
            <p>{list.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default ShowList;
