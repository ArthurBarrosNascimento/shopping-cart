require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Testing if fetchProducts is a function', () => {
    expect(typeof fetchProducts).toEqual('function');
  })

  // test("Run fetchProducts function with 'computer' argument and test if fetch was called", () => {
  //   expect(fetchProducts('computador')).toEqual(computadorSearch);
  // })

  test("Test if calling the fetchProducts function with no argument returns an error with the message: 'You must provide an url'.", () => {
    const expectedVaule = 'You must provide an url';
    console.log(fetchProducts())

    expect(() => {
      fetchProducts();
    }).toThrow(expectedVaule);
  })
});
