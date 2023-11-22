<script>
export default {
  data() {
    return {
      title: "AUO Project",
      devices: ["A", "B", "C", "D", "E"],
      show: true,
      website: "https://www.auo.com/zh-TW",
      num_x: 1,
      num_y: 2,
      // result: 0,
    }
  },
  methods: {
    printout() {
      console.log(this.title)
    },
    toggleHello() {
      this.show = !this.show
    },
    // calc() {
    //   this.result = this.num_x + this.num_y
    // },
  },
  computed: {
    result() {
      return this.num_x + this.num_y
    },
  },
}
</script>

<template>
  <h1>{{ title }}</h1>
  <input type="text" v-model="title" />

  <br />
  <input type="number" v-model="num_x" />
  <input type="number" v-model="num_y" />
  <div>結果 {{ result }}</div>

  <ul>
    <li v-for="d in devices">{{ d }}</li>
  </ul>
  <a :href="website">AUO Website</a>
  <button @click="printout">click</button>
  <hr />
  <button @click="toggleHello">Toggle</button>
  <h2 v-if="show">Hello</h2>
</template>

<style scoped></style>
