import { GET_ALL_CATEGORIES, GET_ERROR } from "../types";
import { useFetch } from "../../Hooks/useFetch";

export const getAllCategories = () => async (dispatch) => {
  try {
    const res = await useFetch("/api/v1/categories");
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error: " + e,
    });
  }
};
