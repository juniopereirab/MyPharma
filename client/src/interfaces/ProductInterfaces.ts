export interface IProductCreate {
  bar_code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: Blob | null;
}

export interface IProductUpdate {
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  image?: Blob | string | null;
}

export interface IProduct {
  _id: string;
  bar_code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  __v: number;
}
