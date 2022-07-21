const paiString = '.cart__items'; 

const addLocalStorage = () => {
  const pai = document.querySelector(paiString);

  saveCartItems(JSON.stringify(pai.innerHTML));
};

const reload = () => {
  const pai = document.querySelector(paiString);

  pai.innerHTML = JSON.parse(getSavedCartItems());
};

const createProductImageElement = (imageSource) => { // Cria um elemento de imagem;
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => { // Estrutura para criar um elemento;
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => { // Cria a lista de produtos;
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// add products in section
const addProductItemInSection = async () => {
  const listItem = document.querySelector('.items'); // section onde vai feicar os produtos no HTML

  const requestInFetch = await fetchProducts('computador');
  
  const requestInJson = requestInFetch.results;

  requestInJson.forEach(({ id, title, thumbnail }) => {
    const AddProductsInList = { sku: id, name: title, image: thumbnail };

    listItem.appendChild(createProductItemElement(AddProductsInList));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText; // Pega o ID de um Produto

const cartItemClickListener = (event) => { // Escuta a ção de clicar em um item no carrinho;
  // coloque seu código aqui
  event.target.remove();

  addLocalStorage();
};

const createCartItemElement = ({ sku, name, salePrice }) => { // Cria os elementos do carrinho;
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getIdProduct = async (event) => { // busca id do produto e interage com o fetchItem.js
  const sku = getSkuFromProductItem(event.target.parentElement);

  const resultGetIdItem = await fetchItem(sku);

 const product = {
   sku,
   name: resultGetIdItem.title,
   salePrice: resultGetIdItem.price,
 };

  const resultLi = createCartItemElement(product);

  const pai = document.querySelector(paiString);

  pai.appendChild(resultLi);

  addLocalStorage();
};

const appendProductInCartItem = () => { // faz o appendChild do getIdProduct no cart__items
  const btnCart = document.querySelectorAll('.item__add');

  btnCart.forEach((btnGet) => {
     btnGet.addEventListener('click', (event) => {
      getIdProduct(event);
     });
  });
};

const addEventListenerOnCart = () => {
  const cartItem = document.querySelectorAll('.cart__item');

  cartItem.forEach((btn) => {
    btn.addEventListener('click', cartItemClickListener);
  });
};

window.onload = async () => { 
 await addProductItemInSection();
  appendProductInCartItem();
  reload();
  addEventListenerOnCart();
};
