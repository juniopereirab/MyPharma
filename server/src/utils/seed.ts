import ProductService from "../services/ProductService";
import productMock from "./productsMock";

const seedProducts = async () => {
  try {
    const products = await ProductService.listProducts({});

    if (products.length > 0) {
      return;
    }

    await Promise.all(
      productMock.map(async (product) => {
        await ProductService.create(product);
        return null;
      })
    );
  } catch (error) {
    throw new Error("Error while populating");
  }
};

export default seedProducts;
