import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, isGridview: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, isGridview: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [];
    if (sort === "price_lowest") {
      tempProducts = filtered_products
        .slice()
        .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    if (sort === "price_highest") {
      tempProducts = filtered_products
        .slice()
        .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    if (sort === "name_a_z") {
      tempProducts = filtered_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (sort === "name_z_a") {
      tempProducts = filtered_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    return { ...state, sorted_products: tempProducts };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
