<script>
export default {
  data() {
    return {
      title: "AUO Project",
      devices: ["A", "B", "C", "D", "E"],
      show: true,
    }
  },
  methods: {
    printout() {
      console.log(this.title)
    },
    toggleHello() {
      this.show = !this.show
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
  <hr />
  <button @click="toggleHello">Toggle</button>
  <h2 v-if="show">Hello</h2>
</template>

<style scoped></style>
