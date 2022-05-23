import React from "react";
import { Form, Button } from "react-bootstrap";

function PostingPage() {
  return (
    <>
      <div className="row">
        <div className="col-md-5 bg-danger text-light text-center">
          Posting Page
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Judul</Form.Label>
                  <Form.Control type="text" placeholder="Kegiatan hari ini" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="Tuliskan apa pun yang akan anda buat"
                >
                  <Form.Label>Teks</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                  <Button variant="primary" className="w-100">
                    Post
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostingPage;
