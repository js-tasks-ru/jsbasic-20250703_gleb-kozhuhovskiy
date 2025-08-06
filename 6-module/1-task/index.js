/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #elem = undefined;
  constructor(rows) {
    //строки таблицы
    const tr = rows.map( elem => `<tr class="table_row">
                                  <td>${elem.name}</td>
                                  <td>${elem.age}</td>
                                  <td>${elem.salary}</td>
                                  <td>${elem.city}</td>
                                  <td><button class="button_del">X</button></td>
                                  </tr>`

    ).join('');
    
    //макет таблицы
    const tb = `<table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${tr}
      </tbody>
    </table>`;

    //сурогатный элемент
    this.#elem = document.createElement('div')
    this.#elem.innerHTML = tb;

    //console.dir(this.#elem);
    this._initButtonsDel_v1()
  }

  get elem(){
    return this.#elem;
  }

  //Вариант один обработчик на таблицу
  _initButtonsDel_v1() {
    //Добавим обработку click на кнопке при которой должно быть сгенерировано событие для корневого элемента
    this.#elem.addEventListener("click", event => { 
        //проверим нажато ли на кнопке
        if( event.srcElement.matches('.button_del') ){
          //Найдем предка - чтобы получит его Id
          const parElem = event.srcElement.closest('.table_row');
          //Удалим 
          parElem.remove();
        }
    });
  }

  //Вариант обработчик на каждую кнопку
  _initButtonsDel_v2() {
    //Добавим обработку click на кнопке при которой должно быть сгенерировано событие для корневого элемента
    const btnElems = [...this.#elem.querySelectorAll('.button_del')];
    
    //для каждой кнопки добавим обработчик
    btnElems.forEach( elem => { 
      elem.addEventListener("click", event => { 
        //Найдем предка - чтобы получит его Id
        const parElem = elem.closest('.table_row');

        //Удалим 
        parElem.remove();

        //console.dir(parElem);
        //console.log(parElem.dataset.id);
      });
    });
  }

}
