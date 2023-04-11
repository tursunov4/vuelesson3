<template>
    <div>
      <FooterMasange :title="title"/>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import FooterMasange from '../../components/FooterMasenga/FooterMasange.vue';
  const title = ref('Login')

</script>

<style  scoped>

</style>