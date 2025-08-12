import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  #elem = undefined;

  constructor(categories) {
    this.categories = categories;
    //Соберем элементы карусели
    const cs = this.categories.map( cat => 
    `<a href="#" class="ribbon__item" data-id="${cat.id}">${cat.name}</a>`
    ).join('');

    //Соберем контейнер карусели со стрелками
    const htmlTxt=`
      <!--Корневой элемент RibbonMenu-->
      <div class="ribbon">
        <!--Кнопка прокрутки влево-->
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <!--Ссылки на категории-->
        <nav class="ribbon__inner">
          ${cs}
        </nav>

        <!--Кнопка прокрутки вправо-->
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `;
    this.#elem = createElement(htmlTxt);

    //Инциализация кнопок 
    this._initButtons();
    
    //Инициализцаия стрелок
    this._initArrows();
    }

  get elem(){
    return this.#elem;
  }

  _initButtons() {

    this.#elem.addEventListener("click", event => { 
      event.preventDefault();
      
      //Текущий элемент
      const srcElem = event.srcElement; 
      
      //Предыдущий элемент найдем и скроем
      const prevElem = srcElem.parentElement.querySelector(".ribbon__item_active");
      if( prevElem ){
        prevElem.classList.remove("ribbon__item_active");
      }

      //Текущий элемент выделим
      srcElem.classList.add("ribbon__item_active");

      //создадим пользовательское событие
      const custEv = new CustomEvent("ribbon-select", { 
        detail: srcElem.dataset.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
        })
      srcElem.dispatchEvent(custEv);
        
      //console.dir(event);
      //console.log(srcElem.dataset.id);
    });
  }  

  _initArrows() {
    // ваш код...

    // Получим контайнер меню
    const container =  this.#elem.querySelector(".ribbon__inner");
    
    //console.dir(carInner);
    let curX = 0;
    const countSlide = this.categories.length - 1;
    //console.log( countSlide);
    let curSlide =0;

    //Получим кнопки и повесим на них обработчики
    const btnLeft = this.#elem.querySelector(".ribbon__arrow_left");
    //console.dir(btnLeft);

    btnLeft.addEventListener('click', (event) => {
      container.scrollBy(-350, 0); // отрицательное значение для прокрутки назад
    });

    const btnRight = this.#elem.querySelector(".ribbon__arrow_right");
    btnRight.addEventListener('click', (event) => {
      container.scrollBy(350, 0); // положительное значение для прокрутки вперёд
    });

    const handleScroll = (event) => {
      const scLeft = container.scrollLeft;
      const scRight = container.scrollWidth - container.scrollLeft - container.clientWidth - 1;

      if( scLeft >0 ){
        //Покажем левую кнопку
        btnLeft.classList.add("ribbon__arrow_visible");
      }else{
        btnLeft.classList.remove("ribbon__arrow_visible");
      }
      if( scRight >0 ){
        //Покажем левую кнопку
        btnRight.classList.add("ribbon__arrow_visible");
      }else{
        btnRight.classList.remove("ribbon__arrow_visible");
      }
      //console.log(`Left: ${scLeft}, Right: ${scRight}`)
      //console.dir( event )
    }

    //Обрабатоем события прокрутки
    container.addEventListener('scroll', handleScroll);
  }


}

