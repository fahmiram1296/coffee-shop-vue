<script>
import { mapState, mapMutations } from "vuex";
import Catalogue from "@/components/organism/Catalogue/index.vue";
import coffeeDataJson from "@/static/coffeeshop-data.json";
import './styles.vue';

export default {
  name: 'home-page',
  components: { Catalogue },
  data: function() {
    return{
        selectedCoffee: 0,
        coffeeData: coffeeDataJson
    }
  },
  computed: {
    ...mapState(['cartStates']),
    getCatalogueData() {
        const image = {
            src: this?.coffeeData[this?.selectedCoffee]?.poster,
            alt: this?.coffeeData[this?.selectedCoffee]?.name,
        };
        return {
            id: this?.coffeeData[this?.selectedCoffee]?.id,
            imageProps: image,
            description: this?.coffeeData[this.selectedCoffee]?.description,
            title: this?.coffeeData[this.selectedCoffee]?.name,
            price: this?.coffeeData[this.selectedCoffee]?.price

        }
    },
    getListData() {
        const putSelectedData = this?.coffeeData?.map((item, index) => ({
            ...item,
            selected: index === this.selectedCoffee,
        }))
        return(putSelectedData)
    },
  },
  methods: {
    ...mapMutations(["addCart"]),
    handleListClick: function(data) {
        const getIdByIndex = this?.coffeeData?.findIndex(item => item?.id === data?.id);
        this.selectedCoffee = getIdByIndex;
    },
    handleAddToCart: function(id) {
        const selectedCoffee = this?.coffeeData?.find((item) => item?.id === id)
        this.addCart(selectedCoffee)
    }
  },
}
</script>

<template>
    <div id="homepage">
        <Catalogue 
            :previewData="getCatalogueData"
            :listData="getListData"
            @handlePreviewClick="handleAddToCart"
            @handleListClick="handleListClick"
        />
    </div>
</template>
