function makeFriendsList(friends) {
  // ваш код...
  const  ul = document.createElement('ul');
  let li_str="";
  
  const liTemp = (f)=> li_str+=`<li>${f.firstName} ${f.lastName}</li>`;
  
  //Вариант 1
  //for( let f of friends){ liTemp(f); }

  //Вариант 2
  friends.forEach( liTemp );

  ul.innerHTML = li_str;
  return ul;
}
