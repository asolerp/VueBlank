<template>
  <div>
    <FetchData :url="'http://dummy.restapiexample.com/api/v1/employees'">
    <template slot="loading">
        <p>Cargando datos..</p>
    </template>
    <template slot-scope="props">
      <div v-if="props.data">
        <h2>Result: {{ props.data.length }} users</h2>
        <p v-for="user in props.data" :key="user.id">{{ user.employee_name }}</p>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
