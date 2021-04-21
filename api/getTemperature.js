import axios from "axios";
import { cities, temperature, weatherIcon } from "./endpoints";

const getTemperature = async (coords, setTemperature, setVisible, setIcon) => {
  const { latitude, longitude } = coords;
  try {
    let res = await axios.get(temperature(latitude, longitude));
    const { main, weather } = res.data || {};
    const { temp } = main || {};
    setTemperature(Math.round(temp - 273.15));
    setIcon(weatherIcon(weather[0].icon));
    setVisible(true);
  } catch (e) {
    console.log(e);
  }
};

export default getTemperature;
