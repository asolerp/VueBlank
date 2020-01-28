
export default {
  state () {
    return {
      employees: null
    }
  },
  mutations: {
    employees (state, value) { state.employees = value }
  },
  actions: {
    setEmployees ({ commit }, data) {
      commit('employees', data)
    }
  },
  getters: {
    getEmployees: state => state.employees
  }
}
