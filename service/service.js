import axios from "axios";

const mal = "https://fakestoreapi.com/products";

export const pro = async () => {
  const resp = await axios.get(mal);
  return resp.data;
};

export const catg = async () => {
  const resp = await axios.get("${mal}/catagoroies");
  return resp.data;
};
