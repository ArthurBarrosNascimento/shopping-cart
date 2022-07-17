require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Testing if fetchProducts is a function', () => {
    expect(typeof fetchProducts).toEqual('function');
  })

  test("Run fetchProducts function with 'computer' argument and test if fetch was called", async () => {
    fetchProducts('computador');

    expect( await fetch).toHaveBeenCalledTimes(1);
  })

  test("Test if, when calling the fetchProducts function with the 'computer' argument, the fetch function uses the 'https://api.mercadolibre.com/sites/MLB/search?q=computador' endpoint", async () => {
    fetchProducts('computador')

    expect( await fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  test("Test if the fetchProducts function return with the 'computer' argument is a data structure equal to the computerSearch object, which is already imported in the file.", async () => {
    expect( await fetchProducts('computador')).toEqual(computadorSearch);

  })
  test("Test if calling the fetchProducts function with no argument returns an error with the message: 'You must provide an url'", async () => {
    expect( await fetchProducts()).toBe('You must provide an url');
  })
});
