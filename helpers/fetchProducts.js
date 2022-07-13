const fetchProducts = (product) => {
  // seu código aqui
    if (product === undefined) throw new Error('You must provide an url');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
