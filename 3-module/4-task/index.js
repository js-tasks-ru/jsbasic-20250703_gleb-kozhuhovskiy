function showSalary(users, age) {
  // ваш код...
  return users.filter( (value, index, array) => value.age<=age).map( value => `${value.name}, ${value.balance}`).join('\n')
}

// // Объект одного пользователя
// let user1 = {
//   "balance": "$2,345.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 21,
//   "name": "Golden Branch",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user2 = {
//   "balance": "$3,456.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 22,
//   "name": "Silver Root",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user3 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 23,
//   "name": "Bronze Leaf",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// // Массив пользователей
// let users = [user1, user2, user3]
// console.log( showSalary(users, 22) )
