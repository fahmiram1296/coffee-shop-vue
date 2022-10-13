<script>
import './styles.vue';

export default {
  name: 'AtomsButton',
  props: {
    styles: Object,
    text: String,
  },
}
</script>

<!-- Ui Render -->
<template>
  <button :style="styles" v-on:click="$emit('handle-click', $event)">
    {{ text }}
  </button>
</template>
