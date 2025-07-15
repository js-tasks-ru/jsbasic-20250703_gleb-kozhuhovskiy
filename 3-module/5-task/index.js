//Вариант 1
// function getMinMax(str) {
//   // ваш код...
//   return str.split(' ')                                                   //разобъем строку
//         .filter( value => Number.isFinite(+value))                        //выберем только числа 
//         .map( value => +value)                                            //преобразуем в число
//         .reduce( (accumulator, item, index, array) => {                   //переберем с сортировкой
//           accumulator.min = (item < accumulator.min) ? item : accumulator.min;    
//           accumulator.max = (item > accumulator.max) ? item : accumulator.max;
//           return accumulator;
//         } ,
//         {min: Infinity, max: -Infinity} 
//         );
// }


//Вариант 2
function getMinMax(str) {
  // ваш код...
  const arr = str.split(' ')                                                 //разобъем строку
                .filter( value => Number.isFinite(+value))                   //выберем только числа
                .map( value => +value)                                       //преобразуем в число
                .sort( (a,b) => (a<b) ? -1 : 1 );                            //отсортируем
  return {min:arr[0], max:arr.at(-1)};                                       //вернем первый и последний 
}

//let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
// let inputData = '× 25 : -1 / -234 - 4 = 1000';
// console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }
