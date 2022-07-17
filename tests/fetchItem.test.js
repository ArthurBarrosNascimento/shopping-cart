require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Test if fetchItem is a function', () => {
    expect(typeof fetchItem).toEqual('function');
  })

  test("Run fetchItem function with item argument 'MLB1615760527' and test if fetch was called", async () => {
    fetchItem('MLB1615760527');
  
    expect(await fetch).toHaveBeenCalledTimes(1);
  })

  test("Teste se, ao chamar a função fetchItem com o argumento do item 'MLB1615760527', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/items/MLB1615760527'", async () => {
    fetchItem('MLB1615760527');

    expect(await fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })

  test('Test if the fetchItem function return with the item argument "MLB1615760527" is a data structure equal to the item object that is already imported in the file', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })

  test("Test if calling the fetchItem function with no argument returns an error with the message: 'You must provide an url'", async () => {
    expect(await fetchItem()).toBe('You must provide an url');
  })
});
