function hideSelf() {
  // ваш код...
  const elem = document.querySelector(".hide-self-button")
  
  elem.addEventListener('click', (event) => {
    elem.hidden = true;
  });
}
