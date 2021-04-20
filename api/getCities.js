import axios from "axios";
import { cities } from "./endpoints";

const getCities = async () => {
  try {
    let res = await axios.get(cities);
    console.log("HERE");
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};

export default getCities;
