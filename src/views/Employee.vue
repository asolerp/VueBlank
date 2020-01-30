<template>
  <FetchData v-if="employeeID" :url="`https://reqres.in/api/users/${employeeID}`">
    <template slot-scope="{ data, loaded, error }">
      <div v-if="loaded">
        <p>Cargando datos..</p>
      </div>
      <div v-else-if="data">
       {{ data }}
      </div>
      <div v-else-if="error">
        <p>{{ error}}</p>
      </div>
    </template>
  </FetchData>
</template>

<script>
import FetchData from '../components/FetchData'

export default {
  name: 'Employee',
  components: {
    FetchData
  },
  data: () => ({
    employeeID: undefined
  }),
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(to)
      vm.employeeID = to.params.id
    })
  },
  beforeRouteUpdate (to, from, next) {
  // just use `this`
    console.log(to, from)
    next()
  }
}
</script>

<style>

</style>
