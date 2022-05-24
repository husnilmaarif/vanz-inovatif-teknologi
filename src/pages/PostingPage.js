import React from "react";
import AddNote from "../components/AddNote";
import ShowNote from "../components/ShowNote";

function PostingPage() {
  return (
    <>
      <div className="row">
        <div className="col-md-5 bg-danger text-light text-center">
          Posting Page
        </div>

        <div className="container">
          <div className="row justify-content-center my-5">
            <AddNote />
          </div>

          <div className="row justify-content-center mt-3 mb-5">
            <ShowNote />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostingPage;
