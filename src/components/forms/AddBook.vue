<script>
export default {
  data() {
    return {
      bookName: "",
    }
  },
  methods: {
    addBook() {
      this.$emit("add-book", this.bookName)
      this.bookName = ""
    },
  },
}
</script>

<template>
  <div class="flex items-center gap-2 mt-4">
    <input
      v-model.trim="bookName"
      @keydown.enter="addBook"
      type="text"
      class="w-full input input-bordered"
    />
    <button @click="addBook" class="btn btn-primary">新增</button>
  </div>
</template>
