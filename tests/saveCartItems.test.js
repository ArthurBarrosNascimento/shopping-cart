const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('Test if, when executing saveCartItems with the <ol><li>Item</li></ol> argument, the localStorage.setItem method is called', async () => {
    saveCartItems('<ol><li>Item</li></ol>')

    expect(await localStorage.setItem).toHaveBeenCalledTimes(1);
  })

  test("Test if, when executing saveCartItems with the <ol><li>Item</li></ol> argument, the localStorage.setItem method is called with two parameters, the first being 'cartItems' and the second being the value passed as argument to saveCartItems", () => {
    const testString = '<ol><li>Item</li></ol>';

    saveCartItems(testString);

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', testString);
  })
});
