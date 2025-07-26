function highlight(table) {
  // ваш код...
  //console.dir(table)
  const colIdx = {}; //Объект для хранения индексов названия колонок
  
  //Сформируем индексы колонок
  Array.from( table.tHead.rows[0].cells ).forEach( td => colIdx[td.innerText] = td.cellIndex);

  //console.dir( colIdx)  // {Name: 0, Age: 1, Gender: 2, Status: 3}

  //Переберем строки в tBody
  Array.from( table.tBodies[0].rows ).forEach( tr => {
      switch(tr.cells[ colIdx.Status].dataset.available){
        case 'true':
          tr.classList.add( 'available');
          break;
        case 'false':
          tr.classList.add( 'unavailable');
          break;
        default :
          tr.hidden = true;
          break;
      }

      switch(tr.cells[ colIdx.Gender].innerText){
        case 'm':
          tr.classList.add( 'male');
          break;
        case 'f':
          tr.classList.add( 'female');
          break;
        default :
          break;
      }

      if( +tr.cells[ colIdx.Age].innerText < 18 ){
        tr.style.cssText="text-decoration: line-through";
      }
      
      //console.dir(tr);

  });
}
