<script>

export default {
  name: 'ImageAtom',
  props: {
    styles: Object,
    imageProps: {    
        width: {
            type: String,
            default: 'auto',
        },
        height: {
            type: String,
            default: 'auto',
        },
        src: {
            type: String,
            require: true,
        },
        alt: {
            type: String,
            require: true,
        },
    },
  },
  data() {},
  methods: {},
  computed: {
    imageQuery:function () {
        const query = `${this.imageProps?.src}?q=80&w=${this.imageProps?.width}&h=${this.imageProps?.height}`;
        return query
    },
  },
}
</script>

<!-- Ui Render -->
<template>
    <img :src="imageQuery" :style="styles" :alt=imageProps?.alt />
</template>
