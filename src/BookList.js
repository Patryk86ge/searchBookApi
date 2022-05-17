import React from 'react';
import noImg from '../src/asets/image/No-image-available.png'


const BookList = ({book,addBook,btnName}) => {

  return (
    <div className={"books__list"}>
      <div className="book__img">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          onError={(e)=>{e.target.onerror = null; e.target.src= {noImg}}}
          alt={book.volumeInfo.title}
        />
      </div>
      <h2>Tytuł :{book.volumeInfo.title}</h2>
      <p>Autor: {book.volumeInfo.authors}</p>
      <p>Data publikacji : {book.volumeInfo.publishedDate}</p>
      <p className={"description__book"}>Opis : {book.volumeInfo.description}</p>
      <button className={"book__btn"} onClick={addBook}>{btnName}</button>
    </div>
  );
};

export default BookList;