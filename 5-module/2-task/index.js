function toggleText() {
  // ваш код...
  const elemBtn = document.querySelector(".toggle-text-button")
  
  elemBtn.addEventListener('click', (event) => {
    const elemTxt = document.querySelector("#text");
    elemTxt.hidden = !elemTxt.hidden;
  });

}
