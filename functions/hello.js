// domain/.netlify/functions/hello
const items = [
  { id: 1, name: "john" },
  { id: 2, name: "Mike" },
];
exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
