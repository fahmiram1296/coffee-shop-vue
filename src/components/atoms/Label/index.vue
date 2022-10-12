<script>
  import './styles.vue';

  export default {
    name: 'AtomsLabel',
    props: {
      styles: Object
    },
  }
</script>

<template>
  <span id="label-container" :style="styles"><slot/></span>
</template>