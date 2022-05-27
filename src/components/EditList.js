import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

function EditList() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-md-5 text-center ">
        <Form>
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
            <Form.Label>CATATAN</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="ketik apa saja"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit" variant="primary" className="w-100 mt-5">
              Update
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default EditList;
