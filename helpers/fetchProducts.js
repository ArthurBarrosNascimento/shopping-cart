const fetchProducts = async (product) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

    const requestUrl = await fetch(url);
    const jasonRequestUrl = await requestUrl.json(); 

    // console.log(jasonRequestUrl);
    return jasonRequestUrl;
  } catch (error) {
    return ('You must provide an url');
  }
};

console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
