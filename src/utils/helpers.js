export const formatPrice = (number) => {
  return number?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
