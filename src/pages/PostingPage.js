import React, { useEffect } from "react";
import AddList from "../components/AddList";
import ShowList from "../components/ShowList";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function PostingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        navigate("/login");
      }
    });
  });

  return (
    <>
      <div className="container-fluid">
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
      </div>
    </>
  );
}

export default PostingPage;
