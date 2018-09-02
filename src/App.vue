<template>
  <div id="app">

  
    <router-view ></router-view>
      
      
      <load_in ></load_in>
  </div> 
</template>

<script>
    import load_in from "./components/load_in"
    export default {
        name: 'App',
        components: {
            load_in
        },
        mounted() {
         
        }
    }

</script>

<style>


</style>
