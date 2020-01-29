<template>
  <div>
    <slot name="loading" v-if="loaded"/>
    <slot :data="data"/>
  </div>
</template>
<script>
export default {
  name: 'FetchData',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    data: null,
    loaded: false,
    error: null
  }),
  async mounted () {
    this.fethData()
  },
  methods: {
    async fethData () {
      this.loaded = true
      try {
        const { data } = await this.axios.get(this.url)
        this.data = data.data
      } catch (err) {
        console.error(err)
        this.error = err
      }
      this.loaded = false
    }
  }
}
</script>
