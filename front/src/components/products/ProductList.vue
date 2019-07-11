<template>
    <div id="products-component">
        <ul>
            <li v-for="product in productList">
                <p class="product-title">{{product.name}}</p>
                <the-product :id="product.id" :name="product.name" :desc="product.desc" :img="product.img" :price="product.price"></the-product>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Prop} from 'vue-property-decorator';
    import Component from 'vue-class-component';
    import Vue from 'vue';
    import TheProduct from '@/components/product/TheProduct.vue';
    import {TProducts} from "@/bhv";

    @Component({
        components: {
            TheProduct
        }
    })

    export default class ProductList extends Vue {
        @Prop()
        productList: TProducts;
    }

</script>

<style scoped lang="scss">
    .product-title {
        font-weight: bold;
    }
</style>
