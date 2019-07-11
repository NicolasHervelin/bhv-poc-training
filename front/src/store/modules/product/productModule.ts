import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {Product} from '@/models/product';
import store from '@/store';

@Module({
    dynamic: true,
    name: "product",
    namespaced: true,
    store
})
class ProductModule extends VuexModule {
    private product: Product | null = null;


    //Pour plus tard : affichage d'un produit
    public get getProduct() {
        return this.product;
    }

    @Action({commit: 'loadProduct'})
    public async searchProduct(uuid: string) {
        //return await productService.get(uuid);
    }

    @Mutation
    public loadProduct(product: Product) {
        this.product = product;
    }
}

export default getModule(ProductModule);
