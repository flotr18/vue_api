<template>
  <div>
    <MyComponent url="http://ergast.com/api/f1/seasons"></MyComponent>
  </div>
</template>

<script>

import MyComponent from '../components/MyComponent.vue'

  export default {
    name: 'f1_view',
    data() {
      return {
        api_data : []
      }
    },
    computed: {},
    
    
    methods: {},
    components : {
      MyComponent
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>