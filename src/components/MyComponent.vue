<template>
  <div>
    Bonjour je m'appelle MyComponent
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

          for (let i = 0; i<= response.data.states.length;i++)
          console.log(response.data.states[i][3])
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