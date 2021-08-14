export interface IProductCreate {
  bar_code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image?: Blob;
}

export interface IProductUpdate {
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  image?: Blob;
}
