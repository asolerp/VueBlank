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
  mounted () {
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
  },
  render () {
    return this.$scopedSlots.default({
      data: this.data,
      loaded: this.loaded,
      error: this.error
    })
  }
}
