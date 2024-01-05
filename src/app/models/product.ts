export interface Product {
    id: number;
    title: string;
    timestamp: string;
    _score: string;
    api_link: string;
    thumbnail: Thumbnail;
}

interface Thumbnail {
    alt_text: string
    width: number;
    lqip: string;
    height: number;
}

export interface ProductListResponse {
    preference: string;
    pagination: object;
    data: Array<Product>,
    info: object;
    config: object;
}