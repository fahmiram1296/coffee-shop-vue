<!-- Type like 'h1', 'h2', 'h3', or 'p' -->

<script>
import './styles.vue';

export default {
  name: 'AtomsText',
  props: {
    styles: Object,
    text: String,
    type: String,
  },
  data() {},
  methods: {},
  computed: {
    customStyleUi: function () {
        const defaultCustomStyle = {
            color: '#00000',
        }
        return Object.assign(defaultCustomStyle, this.styles);
    },
    customTag: function () {
      const tag = this?.type ?? 'p';
      return tag
    },
  },
}
</script>

<!-- Ui Render -->
<template>
  <component id="textAtom" :is="customTag" :style="styles">{{ text }}</component>
</template>
