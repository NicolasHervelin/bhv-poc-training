<template>
    <div id="products-page">
        <h1>Products Page</h1>
        <div v-if="products">
            <product-list :productList="products"/>
        </div>
        <div v-else>
            <p>Aucun produit</p>
        </div>
    </div>
</template>

<script lang="ts">
    import ProductList from '@/components/products/ProductList.vue';
    import Component from 'vue-class-component';
    import {Vue, Watch} from 'vue-property-decorator';
    import productsModule from '@/store/modules/product/productsModule';

    @Component({
        components: {
            ProductList,
        }
    })
    export default class ProductsPage extends Vue {
        name: 'productsPage';

        @Watch('$route')
        onRouteChanged() {
            this.fetchProducts();
        }

        get products() {
            return productsModule.getProducts;
        }

        mounted() {
            this.fetchProducts();
        }

        fetchProducts() {
            // return the Promise from the action
            return productsModule.searchProducts();
        }
    }
</script>

<style scoped lang="scss">
    #products-page {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
