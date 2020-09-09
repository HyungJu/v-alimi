<template>
  <div id="app">
    <NavBar />
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import NavBar from './components/NavBar';
  export default {
    components: { NavBar }
  };
</script>
