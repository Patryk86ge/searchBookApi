import React from 'react';
// import noImg from '../src/asets/image/No-image-available.png'
import ModalViev from "./asets/ModalViev";
import {Button} from "react-bootstrap";
// const MAX_LENGTH = 200;

const BookList = ({book, addBook, btnName}) => {
  const books = book.volumeInfo
  return (
    <div className={"books__list"}>
      <div className="book__img">
        <img src={books.imageLinks === undefined ? "" : `${books.imageLinks.thumbnail}`}
          alt={books.title}
        />
      </div>
      <h2>Tytuł :{books.title.substring(0, 40) + "..."}</h2>
      <p>Autor: {books.authors}</p>
      <p>Data publikacji : {books.publishedDate}</p>
      <p className={"description__book"}>Opis : {books.description}</p>
      <ModalViev
        book={book}
      />
      <Button className={"m-2"} variant="success" onClick={addBook}>{btnName}</Button>
    </div>
  );
};

export default BookList;