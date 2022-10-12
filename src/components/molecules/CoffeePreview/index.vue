<!-- eslint-disable vue/no-unused-components -->

<script>
import './styles.vue';
import Image from '@/components/atoms/Image/index.vue';
import Text from '@/components/atoms/Text/index.vue';
import Button from '@/components/atoms/Button/index.vue';
import Label from '@/components/atoms/Label/index.vue';



export default {
    name: "coffeePreview",
    props: {
        styles: Object,
        id: String,
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
            },
        },
        title: String,
        description: String,
        price: Number,
    },
    components: { Image, Text, Button, Label},
    data: function(){},
    methods: {},
    computed: {},
}
</script>

<!-- Ui Render -->
<template>
  <div id="coffeePreview" :style="styles">
    <Image 
        :imageProps="imageProps" 
        :styles="{
                width: '120px',
                maxWidth: '48vh',
                maxHeight: '36vh',
                margin: '0 auto',
            }"  
        />
    <Text :text="title" :type="h1" :styles="{fontWeight: 'bold', margin: '0 auto', fontSize:'2rem'}" />

    <Label :styles="{flexDirection: 'column'}">
        <Text text="Description:" type="strong" :styles="{fontSize:'1.1rem'}"/>
        <Text :text="description" :styles="{textIndent:'1.1rem'}"/>
    </Label>
    <Label :styles="{flexDirection: 'column'}">
        <Text text="Price: " type="strong" :styles="{fontSize:'1.1rem'}"/>
        <Text :text="price" :styles="{textIndent:'1.1rem'}"/>
    </Label>
    <Button 
      :styles="{
        margin: '0 auto',
        width: '20%',
        padding: '12px',
        fontSize: '0.7rem',
        borderRadius: '10px',
        fontWeight: 'bold',
        backgroundColor: '#3B2F2F',
        color: '#FFFF'
      }"
      text="Add To Cart" 
      v-on:click="$emit('handlePreviewClick', id)" />
  </div>
</template>
