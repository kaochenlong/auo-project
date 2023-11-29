<script>
import { v4 as uuid } from "uuid"
import { getBooks, saveBooks } from "@/auo-lib/storage"
import Header from "./components/infomation/Header.vue"
import BookItem from "./components/books/Item.vue"

export default {
  data() {
    return {
      title: "AUO 圖書管理系統",
      bookName: "",
      books: [],
    }
  },
  components: {
    Header,
    BookItem,
  },
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
    addBook() {
      if (this.bookName != "") {
        const book = {
          id: uuid(),
          title: this.bookName,
        }
        this.books.unshift(book)
        this.bookName = ""

        // save
        saveBooks(this.books)
      }
    },
  },
}
</script>

<template>
  <h1 class="title">{{ title }}</h1>
  <div class="flex items-center gap-2 mt-4">
    <input
      v-model.trim="bookName"
      @keydown.enter="addBook"
      type="text"
      class="w-full input input-bordered"
    />
    <button @click="addBook" class="btn btn-primary">新增</button>
  </div>
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
