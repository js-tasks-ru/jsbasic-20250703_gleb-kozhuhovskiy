function factorial(n) {
  // ваш код...
  
 if( Number.isNaN( +n ) ||  n < 0 ){
    return;
  }
 
  let res=1;
  for(i=1;i<=n;i++){
    res *=i ;
  }
  return res;
}

/*
console.log( factorial(-1) );
console.log( factorial('qwe') );
console.log( factorial(0) );
console.log( factorial(1) );
console.log( factorial(3) );
console.log( factorial(5) );
*/