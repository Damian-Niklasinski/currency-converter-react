import axios from "axios";


export const getCurrenciesDataFromApi = async () => {
  const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_SkHMeuHNGPYThZzAzFz4rfuH1vMtoLEj4qxOuWoA&base_currency=PLN");
  if (response.status !== 200) {
    throw new Error();
  }
  return response.data;
};