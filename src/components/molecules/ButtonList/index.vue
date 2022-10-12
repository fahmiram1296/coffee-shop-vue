
<script>
import './styles.vue';
import Text from '@/components/atoms/Text/index.vue';


export default {
    name: "ButtonListMolecule",
    props: {
        styles: Object,
        listData: Array,
    },
    components: { Text, },
}
</script>

<!-- Ui Render -->
<template>
  <ul id="container-list" :style="styles">
      <li 
        :class="data?.selected ? 'selected' : 'unselected'" 
        role="button" v-for="data in listData" 
        :key="data?.id" v-on:click="$emit('handle-click', data)">
        <Text :type="h2" :text="data?.name" :styles="{fontSize: '1.2rem'}" />
      </li>
  </ul>
</template>
