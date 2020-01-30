
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
    loaded: false
  }),
  async created () {
    try {
      const { data } = await this.axios.get(this.url)
      this.data = data.data
      this.loaded = true
    } catch (err) {
      console.error(err)
      this.error = err
    }
  },
  render () {
    const slot = this.$scopedSlots.default({
      loading: !this.loaded,
      data: this.data
    })

    return Array.isArray(slot) ? slot[0] : slot
  }
}
