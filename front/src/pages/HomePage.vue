<template>
    <product-list/>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import {Vue} from 'vue/types/vue';
    import ProductList from '@/components/products/ProductList.vue';

    @Component({
        components: {
            ProductList,
        },
    })
    export default class Home extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
