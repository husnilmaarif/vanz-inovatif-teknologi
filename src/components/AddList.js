import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { update } from "../features/listSlice";

function AddList() {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const dispatch = useDispatch();

  const updateList = (e) => {
    e.preventDefault();
    dispatch(update({ judul, konten }));
  };

  return (
    <>
      <div className="col-md-5 text-center p-5 shadow bg-light">
        <Form onSubmit={updateList}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>JUDUL</Form.Label>
            <Form.Control
              type="text"
              placeholder="ketik apa saja"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
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
              value={konten}
              onChange={(e) => setKonten(e.target.value)}
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
