<script>
import './styles.vue';

export default {
  name: 'AtomsButton',
  props: {
    styles: Object,
    text: String,
  },
  data() {},
  methods: {},
  computed: {
    customStyleUi () {
        const defaultCustomStyle = {
            width: '100%',
            backgroundColor: '#00b4d8',
            color: '#FFFFF',
            fontSize: '12px',
        }

        return Object.assign(defaultCustomStyle, this.styles);
    },
  },
}
</script>

<!-- Ui Render -->
<template>
  <button :style="customStyleUi" v-on:click="$emit('handle-click', $event)">
    {{ text }}
  </button>
</template>
