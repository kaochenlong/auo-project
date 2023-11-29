<script setup>
import { v4 as uuid } from "uuid"
import { getBooks, saveBooks } from "@/auo-lib/storage"
import { reactive, onBeforeMount } from "vue"
import Header from "@/components/infomation/Header.vue"
import BookItem from "@/components/books/Item.vue"
import AddBookForm from "@/components/forms/AddBook.vue"

const title = "AUO 圖書管理系統"
const books = reactive([])

const removeBook = (id) => {
  if (id) {
    const bookIndex = books.findIndex((book) => book.id == id)

    if (bookIndex >= 0) {
      books.splice(bookIndex, 1)
      saveBooks(books)
    }
  }
}

const addBook = (bookName) => {
  if (bookName != "") {
    const book = {
      id: uuid(),
      title: bookName,
    }

    books.unshift(book)

    // save
    saveBooks(books)
  }
}

onBeforeMount(() => {
  const data = getBooks()
  if (data) {
    books.push(...data)
  }
})
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
