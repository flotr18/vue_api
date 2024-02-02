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
    props : {
      url : String
    },

    computed: {},
    mounted() {
      axios.get(this.url)
        .then(response => {
          this.ApiData = response.data
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