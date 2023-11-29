<script>
import { v4 as uuid } from "uuid"
import { getBooks, saveBooks } from "@/auo-lib/storage"
import Header from "./components/infomation/Header.vue"
import BookItem from "./components/books/Item.vue"
import AddBookForm from "./components/forms/AddBook.vue"

export default {
  data() {
    return {
      title: "AUO 圖書管理系統",
      books: [],
    }
  },
  components: { Header, BookItem, AddBookForm },
  beforeMount: function () {
    const books = getBooks()
    if (books) {
      this.books = books
    }
  },

  methods: {
    removeBook(id) {
      if (id) {
        const bookIndex = this.books.findIndex((book) => book.id == id)

        if (bookIndex >= 0) {
          this.books.splice(bookIndex, 1)
          saveBooks(this.books)
        }
      }
    },
    addBook(bookName) {
      if (bookName != "") {
        const book = {
          id: uuid(),
          title: bookName,
        }
        this.books.unshift(book)

        // save
        saveBooks(this.books)
      }
    },
  },
}
</script>

<template>
  <h1 class="title">{{ title }}</h1>

  <AddBookForm @add-book="addBook" />

  <div class="divider"></div>
  <div>
    <Header :books="books" />
    <ul>
      <BookItem @remove-book="removeBook" v-for="book in books" :book="book" />
    </ul>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
