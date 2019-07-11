import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {Product} from '@/models/product';
import productsService from '@/store/services/product/productsService'
import store from '@/store';

@Module({
    dynamic: true,
    name: "products",
    namespaced: true,
    store
})
class ProductsModule extends VuexModule {
    private products: Product[] | null = null;

    public get getProducts() {
        return this.products;
    }

    @Action({commit: 'loadProducts'})
    public async searchProducts() {
        return await productsService.getProducts();
    }

    @Mutation
    public loadProducts(products: Product[]) {
        this.products = products;
    }
}

export default getModule(ProductsModule);
