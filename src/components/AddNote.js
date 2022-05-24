import React from "react";
import { Form, Button } from "react-bootstrap";

function AddNote() {
  return (
    <>
      
      <div className="col-md-5 text-center p-5 shadow bg-light">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>JUDUL</Form.Label>
            <Form.Control type="text" placeholder="ketik apa saja" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="Tuliskan apa pun yang akan anda buat"
          >
            <Form.Label>CATATAN</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="ketik apa saja" />
            <Button variant="primary" className="w-100 mt-5">
              Post
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default AddNote;
