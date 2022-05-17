export const addFavourite = (book,addBooks,setAddBooks) => {
  const newAddBooksList = [...addBooks, book];
  setAddBooks(newAddBooksList);
}
export const removeBook = (id,setAddBooks) => {
  setAddBooks(prev => prev.filter(el => el.id !== id))
}