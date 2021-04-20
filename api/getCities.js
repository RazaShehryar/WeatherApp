import axios from "axios";
import { cities } from "./endpoints";

const getCities = async (setData) => {
  try {
    let res = await axios.get(cities);
    const { list } = res.data || {};
    setData(list);
  } catch (e) {
    console.log(e);
  }
};

export default getCities;
