import React from 'react';
// import noImg from '../src/asets/image/No-image-available.png'
import ModalViev from "./asets/ModalViev";
import {Button} from "react-bootstrap";
// const MAX_LENGTH = 200;

const BookList = ({book, addBook, btnName}) => {
  return (
    <div className={"books__list"}>
      <div className="book__img">
        <img src={book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`}
          alt={book.volumeInfo.title}
        />
      </div>
      <h2>Tytuł :{book.volumeInfo.title.substring(0, 40) + "..."}</h2>
      <p>Autor: {book.volumeInfo.authors}</p>
      <p>Data publikacji : {book.volumeInfo.publishedDate}</p>
      <p className={"description__book"}>Opis : {book.volumeInfo.description}</p>
      <ModalViev
        book={book}
      />
      <Button className={"m-2"} variant="success" onClick={addBook}>{btnName}</Button>
    </div>
  );
};

export default BookList;