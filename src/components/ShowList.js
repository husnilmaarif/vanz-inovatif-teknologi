import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteList } from "../features/listSlice";

function ShowList() {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.lists.value);

  return (
    <>
      {noteList.map((list) => {
        return (
          <div className="col-md-6 m-2 p-4 shadow" key={list.id}>
            <h1>{list.title} </h1>
            <p>{list.content}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteList({ id: list.id }))}
            >
              Hapus
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ShowList;
