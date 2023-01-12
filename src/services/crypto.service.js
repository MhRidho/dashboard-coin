import axios from "axios";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10";

export const getCoins = () => {
  return axios.get(API_URL);
};
