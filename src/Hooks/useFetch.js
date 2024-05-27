import baseURL from "../Api/baseURL";

export const useFetch = async (url, params) => {
  const res = await baseURL.get(url, params);
  return res.data;
};
