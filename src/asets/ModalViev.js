import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
// import noImg from "./image/No-image-available.png";

const ModalViev = ({book}) => {
  const [show, setShow] = useState(false);
  const books = book.volumeInfo

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
      Wiecej...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{books.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={books.imageLinks === undefined ? "" : `${books.imageLinks.thumbnail}`}
               alt={books.title}
          />
          <p>Autor: {books.authors}</p>
          <p>Data publikacji : {books.publishedDate}</p>
          <p>Opis : {books.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViev;