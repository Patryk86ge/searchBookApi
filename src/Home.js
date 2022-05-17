import React, {useEffect, useState} from 'react';
import Header from "./Header";
import BookList from "./BookList";
import {addFavourite,removeBook} from './asets/helpers'


const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const Home = () => {
  const [books, setBook] = useState([]);
  const [searchBook, setSearchBook] = useState('');
  const [addBooks, setAddBooks] = useState([]);

  const bookHandler = (searchBook) => {
    fetch(`${API_URL}${searchBook}+terms+&maxResults=15`)
      .then(response => response.json())
      .then(data => {
          console.log(data.items)
          setBook(data.items)
        }
      )
      .catch((error) => {
        console.log('Error', error);
      })

  }
  useEffect(() => {
    bookHandler();
  }, []);
  console.log(searchBook);

  const handleSubmit = (e) => {
    e.preventDefault();
    bookHandler(searchBook);
  }


  return (
    <>
      <Header/>
      <div className="book__box">
        {
          addBooks.map((addBook) => {
            return (
              <BookList
                key={addBook.id}
                book={addBook}
                btnName={"Remove Book"}
                addBook={() => removeBook(addBook.id,setAddBooks)}
              />
            )

          })
        }
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Search Book</h1>
          <input
            type='text'
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
          />
        </form>
        <div className={"book__box"}>
          {
            books.map((book) => {
              return (
                <BookList
                  key={book.id}
                  book={book}
                  addBook={() => addFavourite(book,addBooks,setAddBooks)}
                  btnName={"Add Book"}
                />
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Home;