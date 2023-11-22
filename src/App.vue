<script>
export default {
  data() {
    return {
      title: "AUO Project",
      devices: ["A", "B", "C", "D", "E"],
    }
  },
  methods: {
    printout() {
      console.log(this.title)
    },
  },
}
</script>

<template>
  <h1>{{ title }}</h1>
  <input type="text" v-model="title" />
  <ul>
    <li v-for="d in devices">{{ d }}</li>
  </ul>
  <button @click="printout">click</button>
</template>

<style scoped></style>
