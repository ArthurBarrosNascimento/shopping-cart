const getSavedCartItems = () => {
  // seu código aqui
  const localSave = localStorage.getItem('carItems');

  return localSave;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
