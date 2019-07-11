export interface TProduct {
    id: string;
    name: string;
    desc: string;
    img: string;
    price: string;
}

export interface TProducts {
    products: TProduct[]
}
