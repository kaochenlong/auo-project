<script>
import { v4 as uuid } from "uuid"

const STORAGE_NAME = "auo-book"

const getBooks = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const saveBooks = (books) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(books))
}

export default {
  data() {
    return {
      title: "AUO 圖書管理系統",
      bookName: "",
      books: [],
    }
  },
  beforeMount: function () {
    const books = getBooks()
    if (books) {
      this.books = books
    }
  },
  methods: {
    removeBook(e) {
      const btn = e.currentTarget
      const id = btn?.dataset.bookid
      if (id) {
        // 刪除
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
  <div class="flex items-center mt-4 gap-2">
    <input
      v-model.trim="bookName"
      type="text"
      class="input input-bordered w-full"
    />
    <button @click="addBook" class="btn btn-primary">新增</button>
  </div>
  <div class="divider"></div>
  <div>
    <h2 class="text-2xl" v-if="books.length == 0">目前無任何資料</h2>
    <ul v-else>
      <li class="text-2xl flex items-center gap-2" v-for="book in books">
        <button :data-bookid="book.id" @click="removeBook" class="btn btn-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zM143 239c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
            />
          </svg>
        </button>
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
