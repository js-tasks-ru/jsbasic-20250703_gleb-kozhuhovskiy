import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  _node = undefined;

  constructor() {
    this._node = createElement( this._getHTML() );
    
    const btnClose = this._node.querySelector(".modal__close");
    btnClose.addEventListener('click', (event) => this._removeModal(event) );
  }

  open(){
    document.body.appendChild( this._node );
    document.body.classList.add('is-modal-open');
    document.body.addEventListener('keydown', (event) => this._removeModal(event) );
  }

  setTitle(title){
    const titleElem = this._node.querySelector(".modal__title");
    titleElem.innerText = title;
  }

  setBody(node){
    const bodyElem = this._node.querySelector(".modal__body");
    bodyElem.innerHTML ='';
    bodyElem.appendChild( node );
  }

  close(){
    this._removeModal();
  }

  _removeModal( event ){
    if( event instanceof KeyboardEvent && !(event.code === 'Escape') ){
      //Если событие клавиатуры, но нажата не Esc то выйдем
      //console.dir( event );
      return ;
    }
    
    document.body.classList.remove('is-modal-open');
    document.body.removeEventListener('keydown', this._removeModal );

    this._node.remove();
  }

  _getHTML(){
    return `<!--Корневой элемент Modal-->
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>
  
      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
  
          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>
  
        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    </div>`;

  }
}
