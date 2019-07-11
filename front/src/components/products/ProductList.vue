<template>
    <div v-if="products">
        <ul>
            <li v-for="product in products">
                <the-product :id="product.id" :name="product.name" :desc="product.desc" :img="product.img" :price="product.price"></the-product>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Prop} from 'vue-property-decorator';
    import {Product} from '@/models/product';
    import Component from 'vue-class-component';
    import {Vue} from 'vue/types/vue';
    import TheProduct from '@/components/product/TheProduct.vue';
    import products from '@/store/modules/product/productsModule'
    //import { TProduct } from '@/bhv';

    @Component({
        components: {
            TheProduct
        }
    })

    export default class ProductList extends Vue {
        @Prop()
        products: Product[];

        /*@Prop()
        product: TProduct;*/

        get productList() {
            return products.getProducts;
        }

    }

</script>

<style scoped lang="scss">
</style>
