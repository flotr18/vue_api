<template>
  <div>
    <MyComponent :url="tada"></MyComponent>
    {{ this.tada }}
  </div>
</template>

<script>

import MyComponent from '../components/MyComponent.vue'

  export default {
    name: 'f1_view',
    data() {
      return {
        api_data : [],
        tada : import.meta.env.VITE_SOME_KEY
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