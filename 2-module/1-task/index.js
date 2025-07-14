function sumSalary(salaries) {
  // ваш код...
  if( !salaries || !(typeof salaries === 'object') ){
    return 0;
  }

  let totSal=0;
  for(let p in salaries){
    const v = salaries[p];
     if( (typeof v === 'number') && v && isFinite( v ) ){
        totSal += v; 
     }
  }
  return totSal;
}


// let salaries = {
//   John1: NaN,
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300,
//   month: 'December',
//   currency: 'USD',
//   isPayed: false
// }

// console.log( isFinite( 1000 ))
// console.log( sumSalary(1) )

// console.log( sumSalary(salaries) )

