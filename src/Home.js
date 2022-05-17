import React, {useEffect, useState} from 'react';
import Header from "./Header";
import BookList from "./BookList";


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
  const addFavourite = (book) => {
    const newAddBooksList = [...addBooks, book];
    setAddBooks(newAddBooksList);
  }
  const removeBook = (id) => {
    setAddBooks(prev => prev.filter(el => el.id !== id))
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
                addBook={() => removeBook(addBook.id)}
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
                  addBook={() => addFavourite(book)}
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