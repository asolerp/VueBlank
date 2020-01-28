<template>
    <div>
        <FetchData :url="'http://dummy.restapiexample.com/api/v1/employees'">
        <template v-slot="{data, loading}">
          <div v-if="loading">
            <p>Cargando datos..</p>
          </div>
          <div v-else>
            <h2>Result: {{ data.length }} users</h2>
            <p v-for="user in data" :key="user.id">{{ user.employee_name }}</p>
          </div>
        </template>
        </FetchData>
    </div>
</template>

<script>
import FetchData from '../components/FetchData'

export default {
  name: 'ViewData',
  components: {
    FetchData
  },
  methods: {
    storeEmployees (employees) {
      this.$store.dispatch('setEmployees', employees.data)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
