import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addList } from "../features/listSlice";

function AddList() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      alert("Data berhasil ditambahkan");
      dispatch(addList({ id: nanoid(), title, content }));
    } else if (!title || !content) {
      return alert("judul dan konten tidak boleh kosong!");
    }
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className="col-md-6 text-center shadow p-4 bg-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>JUDUL</Form.Label>
            <Form.Control
              type="text"
              placeholder="ketik apa saja"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="Tuliskan apa pun yang akan anda buat"
          >
            <Form.Label>KONTEN</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="ketik apa saja"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit" variant="primary" className="w-100 mt-5">
              Post
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default AddList;
