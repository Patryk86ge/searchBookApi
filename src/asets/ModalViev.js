import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
// import noImg from "./image/No-image-available.png";

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
          <Modal.Title>{book.volumeInfo.title.substring(0, 40) + "..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`}
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