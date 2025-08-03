import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #elem = undefined;

  constructor(slides) {
    this.slides = slides;

    //Соберем элементы карусели
    const cs = this.slides.map( slide => 
    `<div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${Number(slide.price).toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
    ).join('');

    //Соберем контейнер карусели со стрелками
    const htmlTxt=`
      <div class="carousel">
        <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        ${cs}
        </div>
      </div>`;
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
    //Добавим обработку click на кнопке при которой должно быть сгенерировано событие для корневого элемента
    //Массив кнопок
    const btnElems = [...this.#elem.querySelectorAll('.carousel__button')];
    
    //для каждой кнопки добавим обработчик
    btnElems.forEach( elem => { 
      elem.addEventListener("click", event => { 
        //Найдем предка - чтобы получит его Id
        const parElem = elem.closest('.carousel__slide');

        //создадим пользовательское событие
        const custEv = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: parElem.dataset.id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
          })
        this.#elem.dispatchEvent(custEv);
        
        //console.dir(parElem);
        //console.log(parElem.dataset.id);
      });
    });

  }  

  _initArrows() {
    // ваш код...

    // Получим слайд 
    const carInner =  this.#elem.querySelector(".carousel__inner");
    //console.dir(carInner);
    let curX = 0;
    const countSlide = this.slides.length - 1;
    //console.log( countSlide);
    let curSlide =0;

    //Получим кнопки и повесим на них обработчики
    const btnLeft = this.#elem.querySelector(".carousel__arrow_left");
    btnLeft.style.display = 'none'
    //console.dir(btnLeft);

    btnLeft.addEventListener('click', (event) => {
      if( curSlide <= 0 ){
        return;
      }

      curX += carInner.offsetWidth;
      carInner.style.transform = `translateX(${curX}px)`

      curSlide --;
      if( curSlide <= 0 ){
        btnLeft.style.display = 'none'
      }
      btnRight.style.display = ''
    });

    const btnRight = this.#elem.querySelector(".carousel__arrow_right");
    btnRight.addEventListener('click', (event) => {
      if( curSlide >= countSlide ){
        return;
      }
      curX -= carInner.offsetWidth;
      carInner.style.transform = `translateX(${curX}px)`

      curSlide ++;
      if( curSlide >= countSlide ){
        btnRight.style.display = 'none'
      }
      btnLeft.style.display = ''
    });

    
  }

}
