<!-- eslint-disable vue/no-unused-components -->

<script>
import './styles.vue';
import Image from '@/components/atoms/Image/index.vue';
import Text from '@/components/atoms/Text/index.vue';
import Button from '@/components/atoms/Button/index.vue';
import Label from '@/components/atoms/Label/index.vue';
import CoffeePreview from '@/components/molecules/CoffeePreview/index.vue';
import ButtonList from '@/components/molecules/ButtonList/index.vue';



export default {
    name: "catalogueOrganism",
    props: {
        previewData: {
            styles: Object,
            id: String,
            imageProps: 
                {
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
        listData: Array,    
    },
    components: { Image, Text, Button, Label, CoffeePreview, ButtonList },
}
</script>

<!-- Ui Render -->
<template>
  <section id="catalogue" :style="styles">
    <section class="catalogue-list">
        <ButtonList 
            :listData="listData" 
            @handle-click="(data) => $emit('handle-list-click', data)"
        /> 
    </section>
    <section class="catalogue-preview">
        <CoffeePreview 
            @handle-preview-click="(data) => $emit('handle-preview-click', data)"
            :styles="{
                ...previewData?.styles,
            }"
            :id="previewData?.id"
            :image-props="previewData?.imageProps"
            :description="previewData?.description"
            :title="previewData?.title"
            :price="previewData?.price"
        />
    </section>
  </section>
</template>
