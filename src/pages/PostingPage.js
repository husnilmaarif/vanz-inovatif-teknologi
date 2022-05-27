import React from "react";
import AddList from "../components/AddList";
import ShowList from "../components/ShowList";

function PostingPage() {
  return (
    <>
      <div className="row">
        <div className="col-md-5 bg-danger text-light text-center">
          Posting Page
        </div>
        <div className="container">
          <div className="row justify-content-center my-5">
            <AddList />
          </div>
          <div className="row justify-content-center mt-3 mb-5">
            <ShowList />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostingPage;
