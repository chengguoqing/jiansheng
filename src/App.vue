<template>
  <div id="app">

      
      <keep-alive >     <!--使用keep-alive会将页面缓存-->
        <router-view  v-if="$route.meta.keepAlive" ></router-view>
   </keep-alive> 
    <router-view v-if="!$route.meta.keepAlive"></router-view>
      
      
      <load_in ></load_in>
  </div> 
</template>

<script>
    import load_in from "./components/load_in"
    export default {
        name: 'App',
        components: {
            load_in
        }
    }

</script>

<style>


</style>
