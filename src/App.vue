<script>
export default {
  data() {
    return {
      title: "AUO 圖書管理系統",
      book: "",
      books: [],
    }
  },
  methods: {
    addBook() {
      if (this.book != "") {
        this.books.unshift(this.book)
        this.book = ""
      }
    },
  },
}
</script>

<template>
  <h1 class="title">{{ title }}</h1>
  <div class="flex items-center mt-4 gap-2">
    <input
      v-model.trim="book"
      type="text"
      class="input input-bordered w-full"
    />
    <button @click="addBook" class="btn btn-primary">新增</button>
  </div>
  <div class="divider"></div>
  <div>
    <h2 class="text-2xl" v-if="books.length == 0">目前無任何資料</h2>
    <ul v-else>
      <li v-for="book in books">{{ book }}</li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
