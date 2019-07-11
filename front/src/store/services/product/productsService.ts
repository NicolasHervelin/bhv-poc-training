import {logger} from '@/utils/logger';
import axios from 'axios';

const pathToBffProducts = 'http://localhost:3001/api/dummy/products';

class ProductsService {

    public async getProducts() {
        try {
            const response = await axios.get(pathToBffProducts);
            console.log(response.data);
            return response.data;
        } catch (e) {
            logger.error(e);
        }
        return null;
    }
}

export default new ProductsService();
