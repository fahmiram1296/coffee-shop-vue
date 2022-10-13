
<script>
import './styles.vue';
import Image from '@/components/atoms/Image/index.vue';
import Text from '@/components/atoms/Text/index.vue';


export default {
    name: "ImageCountMolecules",
    props: {
        styles: Object,
        imageProps: {
            width: String,
            height: String,
            src: {
                type: String,
                require: true,
            },
            alt: {
                type: String,
                require: true,
            }
        },
        count: {
            text: String,
            color: String,
            backgroundColor: String
        },
    },
    components: { Image, Text }
}
</script>

<!-- Ui Render -->
<template>
  <div id="image-count" :style="styles" v-on:click="$emit('handleClick', $event)" role="button">
    <Image :imageProps="imageProps"  />
    <div class="container-count" :style="{backgroundColor: count?.backgroundColor}">
        <Text 
            type="h3" 
            :styles="{
                color: count?.color,
                fontSize: '1rem',
            }"
            :text="count?.text" 
        />
    </div>
  </div>
</template>
