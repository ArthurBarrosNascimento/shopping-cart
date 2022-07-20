const saveCartItems = async (text) => {
  // seu código aqui
  localStorage.setItem('cartItems', text);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
