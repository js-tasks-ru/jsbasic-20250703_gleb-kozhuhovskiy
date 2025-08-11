import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  #sliderElem = undefined;
  #segments =0 ;
  #curValue = undefined;

  constructor( {steps, value=0} ) {
    // steps - количество шагов слайдера, для нашего примера - 5
    this.#segments = steps - 1;
    this.#sliderElem = createElement( this._getHTML( {steps, value}) );
    this.#curValue = value;
    this._showValue( value );

    this.#sliderElem.addEventListener('click', ( event) => this._changeValue(event) );
  }


  _changeValue(event){
    //console.dir(event)

    // this.elem - ссылка на корневой элемент слайдера
    let left = event.clientX - this.#sliderElem.getBoundingClientRect().left; 
    let leftRelative = left / this.#sliderElem.offsetWidth;
    let approximateValue = leftRelative * this.#segments;
    let value = Math.round(approximateValue);

    //this._showValue( approximateValue );
    
    //Отпускание кнопки
    const newValue = Math.round(approximateValue);
    if( this.#curValue !== newValue ){
      this.#curValue = newValue;
      this._showValue( newValue );

      this.#sliderElem.dispatchEvent( new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
            detail: newValue, // значение 0, 1, 2, 3, 4
            bubbles: true // событие всплывает - это понадобится в дальнейшем
      }))

    }
  }

  _showValue( value ){
      const svalue = this.#sliderElem.querySelector('.slider__value');
      const thumb = this.#sliderElem.querySelector('.slider__thumb');
      const progress = this.#sliderElem.querySelector('.slider__progress');

      //const leftPercents = approximateValue / this.#segments * 100; // Значение в процентах от 0 до 100
      const leftPercents = value / this.#segments * 100; // Значение в процентах от 0 до 100

      svalue.innerText = Math.round(value);
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;   
  }

  get elem(){
    return this.#sliderElem;
  }

  _getHTML( config ){
    //Соберем шаги слайдера
    let sh = '';
    for(let i=0; i<config.steps; i++){
      sh += `<span ${config.value == i ? 'class="slider__step-active"' : ''} "></span>`;
    }

    return `<!--Корневой элемент слайдера-->
  <div class="slider">

    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 50%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
      ${sh}
    </div>
  </div>`;

  }
}
