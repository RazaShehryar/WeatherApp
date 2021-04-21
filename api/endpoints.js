import apiKey from "../config/key";
import baseUrl, { weatherIconUrl } from "./baseUrl";

export const cities =
  baseUrl + "find?lat=23.68&lon=90.35&cnt=50&appid=" + apiKey;
export const temperature = (lat, lon) =>
  `${baseUrl}weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
export const weatherIcon = (id) => `${weatherIconUrl}/${id}@2x.png`;
