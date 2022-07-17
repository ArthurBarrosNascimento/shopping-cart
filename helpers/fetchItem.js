const fetchItem = async (idProducts) => {
  // seu código aqui
  try {
    const url = await (`https://api.mercadolibre.com/items/${idProducts}`);

    const requestFetchUrl = await fetch(url);

    const requestJson = await requestFetchUrl.json();

    return requestJson;
  } catch (error) {
    return ('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
