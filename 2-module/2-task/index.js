function isEmpty(obj) {
  // ваш код...
  for(let p in obj){
    return false;
  }
  return true;
}

// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "подъём";

// console.log( isEmpty(schedule) ); // false