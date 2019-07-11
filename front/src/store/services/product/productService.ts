import {logger} from '@/utils/logger';

class ProductService {
    public async get(id: string) {
        try {
            return new Promise((resolve) => {
                data: {
                    products: {

                    }
                }
            });
        } catch (error) {
            logger.error('Error while getting the product $id', error);
        }
    }
}

export default new ProductService();
