const STORAGE_NAME = "auo-book"

const getBooks = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const saveBooks = (books) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(books))
}

const getBook = (id) => {
  const books = getBooks()
  return books.find((book) => book.id == id)
}

export { getBooks, saveBooks, getBook }
