import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import noImg from "./No-image-available.png";

const ModalViev = ({book}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
      Wiecej...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.volumeInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = {noImg}
            }}
            alt={book.volumeInfo.title}
          />
          <p>Autor: {book.volumeInfo.authors}</p>
          <p>Data publikacji : {book.volumeInfo.publishedDate}</p>
          <p>Opis : {book.volumeInfo.description}</p>
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