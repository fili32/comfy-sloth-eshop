export const formatPrice = (number) => {
  return number?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const getUniqueValues = () => {};
