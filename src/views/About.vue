<template>
    <div>
        <h1>About Page</h1>
        <p>Number from store: {{ $store.getters.number }}</p>
    </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>

</style>
