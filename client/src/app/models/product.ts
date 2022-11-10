export interface Product {
    id: number;
    productName: string;
    description: string;
    price: number;
    pictureUrl: string;
    productType?: string;
    productBrand: string;
    quantityInStock?: number;
}