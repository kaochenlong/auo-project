<script>
import { v4 as uuid } from "uuid"

export default {
  data() {
    return {
      title: "AUO 圖書管理系統",
      bookName: "",
      books: [],
    }
  },
  methods: {
    addBook() {
      if (this.bookName != "") {
        const book = {
          id: uuid(),
          title: this.bookName,
        }
        this.books.unshift(book)
        this.bookName = ""
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
      <li class="text-2xl" v-for="book in books">{{ book.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
