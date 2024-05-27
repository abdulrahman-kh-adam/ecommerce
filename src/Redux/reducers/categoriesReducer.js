import { GET_ALL_CATEGORIES, GET_ERROR } from "../types";

const initial = {
  categories: [],
  loading: true,
};

export const categoriesReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        categories: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
