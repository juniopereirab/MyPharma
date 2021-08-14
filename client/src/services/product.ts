import api from "./api";
import {
  IProductCreate,
  IProductUpdate,
} from "../interfaces/ProductInterfaces";

import setFormData from "../utils/setFormData";

class ProductService {
  async create(dataToCreate: IProductCreate) {
    const data = setFormData(dataToCreate);
    try {
      const response = await api.post("/product/", data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(productId: string, dataToUpdate: IProductUpdate) {
    const data = setFormData(dataToUpdate);
    try {
      const response = await api.patch(`/product/edit/${productId}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(productId: string) {
    try {
      const response = await api.delete(`/product/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async read(productId: string) {
    try {
      const response = await api.get(`/product/getById/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async listProducts(query: string) {
    try {
      const response = await api.get(`/product/filter/${query}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async buy(productId: string) {
    try {
      const response = await api.patch(`/product/buy/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new ProductService();
