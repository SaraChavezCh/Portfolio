import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../css/pages/contact.css";

export const Contact = () => {
  return (
    <div className="contact section-separation-contact">
      <p className="heading__primary heading__primary-center">
        Contact
      </p>

      <div className="contact__main">
        <section className="contact__mainSection">
          <h1 className="heading__secondary">Send me an email</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Email - text
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button className="ms-auto" variant="danger" type="submit">
              Enviar
            </Button>
          </Form>
        </section>
      </div>
    </div>
  );
};
