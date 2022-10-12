<script>
import Text from '@/components/atoms/Text/index.vue';
import './styles.vue';
import ImageCount from '@/components/molecules/ImageCount/index.vue';
import { mapState } from 'vuex';

export default {
  name: 'headerSmartComponent',
  components: {
    Text,
    ImageCount
  },
  computed: {
    ...mapState(['cartStates']),
    getCountCart () {
        const cartCount = this?.cartStates?.length;
        return cartCount;
    }
  },
  mounted: function () {}
}
</script>

<template>
    <div id="header">
        <Text 
            text="☕ Coffee Shop" 
            type="h1" 
            :styles="{
                display: 'flex',
                justifyContent: 'center',
                flex: 1,
            }"/>
        <ImageCount 
            :imageProps="{
                alt: 'cart',
                src: 'https://img.icons8.com/glyph-neue/44/ffffff/shopping-cart.png',
                width: 40,
            }"
            :count="{
                text: this?.getCountCart,
                color: '#FFFF',
                backgroundColor: 'red',
            }"
        />
    </div>
</template>