<template>
  <div>
    <FetchData :url="'https://reqres.in/api/users?page=2'">
      <template slot-scope="{ data, loaded }">
        <div v-if="loaded">
          <p>Cargando datos..</p>
        </div>
        <div v-else>
          <h2>Result: {{ data && data.length }} users</h2>
            <router-link :to="`/employees/${user.id}`" v-for="user in data" :key="user.id">
              <p>{{ user.first_name }}</p>
            </router-link>
        </div>
      </template>
    </FetchData>
  </div>
</template>

<script>
import FetchData from '../components/FetchData'

export default {
  name: 'Employees',
  components: {
    FetchData
  }
}
</script>

<style lang="scss" scoped>

</style>
