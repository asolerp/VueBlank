<template>
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Number: {{$store.getters.number}}</h1>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      value: 1
    }
  },
  methods: {
    add () {
      this.$store.commit('add', this.value)
    },
    remove () {
      this.$store.commit('remove', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
