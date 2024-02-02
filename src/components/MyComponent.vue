<template>
  <div>
    {{ this.ApiData }}
  </div>
</template>

<script>

import axios from 'axios'

  export default {
    name: 'MyComponent',
    data() {
      return {}
    },
    computed: {},
    mounted() {
      axios.get('https://opensky-network.org/api/states/all')
        .then(response => {
          this.ApiData = response.data.states
          console.log(this.ApiData)
        })
        .catch(error => {
          console.error('Erreur lors de la récup',error)
        })
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>