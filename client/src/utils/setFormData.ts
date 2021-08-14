import {
  IProductCreate,
  IProductUpdate,
} from "../interfaces/ProductInterfaces";

const setFormData = (object: IProductUpdate | IProductCreate) => {
  const data = new FormData();
  Object.entries(object).map((tuple) => {
    if (tuple[0] === "image" && tuple[1]) {
      data.append(tuple[0], tuple[1]);
    } else {
      data.append(tuple[0], tuple[1]);
    }
    return null;
  });

  return data;
};

export default setFormData;
