<script setup>
import { getBook } from "@/auo-lib/storage"
import { useRoute } from "vue-router"
import { onBeforeMount, reactive } from "vue"

let book = reactive({})

const route = useRoute()
onBeforeMount(() => {
  const { params } = route
  book = getBook(params.auo)
})
</script>

<template>
  <h1 class="text-3xl">{{ book.title }}</h1>
</template>
