<template>
  <div>
    <NavbarApp/>
    <router-view>

    </router-view>
  </div>
</template>

<script setup>
    import NavbarApp from './components/NavbarApp/NavbarApp.vue';

</script>

<style lang="css" scoped>
  h1{
    color: red;
  }
</style>