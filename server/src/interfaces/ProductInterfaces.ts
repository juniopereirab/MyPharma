export interface IProductCreate {
  bar_code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface IProductUpdate {
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  image?: string;
}
