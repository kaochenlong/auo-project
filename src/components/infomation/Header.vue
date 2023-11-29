<script>
export default {
  props: {
    books: {
      type: Array,
      required: true,
      default: [],
    },
  },
  computed: {
    bookCount() {
      return this.books.filter((book) => book.title.length > 2).length
    },
  },
}
</script>

<template>
  <h2 class="text-2xl" v-if="books.length == 0">目前無任何資料</h2>
  <h2 class="text-2xl" v-else>目前共有 {{ bookCount }} 本書</h2>
</template>
