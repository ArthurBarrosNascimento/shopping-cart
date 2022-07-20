const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test("Test if, when executing getSavedCartItems, the localStorage.getItem method is called;", async () => {
    getSavedCartItems();

    expect( await localStorage.getItem).toHaveBeenCalledTimes(1)
  });

  test("Test if, when executing getSavedCartItems, the localStorage.getItem method is called with 'cartItems' as a parameter", async () => {
    getSavedCartItems();

    expect( await localStorage.getItem).toHaveBeenCalledWith('carItems');
  });
});
