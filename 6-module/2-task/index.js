import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  #elem = undefined;

  constructor(product) {
    //строки таблицы
    //макет 
    const htmlTxt = `<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${Number(product.price).toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    </div>`;

    //сурогатный элемент
    this.#elem = createElement(htmlTxt);
    //console.dir(this.#elem);

    //Добавим обработку click на кнопке при которой должно быть сгенерировано событие для корневого элемента
    const btnElem = this.#elem.querySelector('.card__button');
    btnElem.addEventListener("click", event => { 
      //создадим пользовательское событие
      const custEv = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
        detail: product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
        })
      this.#elem.dispatchEvent(custEv);
      //alert(event.detail);
    });
  }

  get elem(){
    return this.#elem;
  }

}