function initCarousel() {
  // ваш код...

  // Получим слайд 
  const carInner =  document.querySelector(".carousel__inner");
  //console.dir(carInner);
  let curX = 0;
  const countSlide = Math.trunc( carInner.scrollWidth / carInner.offsetWidth ) - 1;
  //console.log( countSlide );
  let curSlide =0;

  //Получим кнопки и повесим на них обработчики
  const btnLeft = document.querySelector(".carousel__arrow_left");
  btnLeft.style.display = 'none'
  //console.dir(btnLeft);
  btnLeft.addEventListener('click', (event) => {
    if( curSlide <= 0 ){
      return;
    }

    curX += carInner.offsetWidth;
    carInner.style.transform = `translateX(${curX}px)`
    //console.log(carInner.scrollLeft)
    //carInner.scrollLeft += carInner.offsetWidth;
    //carInner.scrollBy(carInner.offsetWidth,0);

    curSlide --;
    if( curSlide <= 0 ){
      btnLeft.style.display = 'none'
    }
    btnRight.style.display = ''
  });

  const btnRight = document.querySelector(".carousel__arrow_right");
  //console.dir(btnRight);
  btnRight.addEventListener('click', (event) => {
    if( curSlide >= countSlide ){
      return;
    }
    curX -= carInner.offsetWidth;
    carInner.style.transform = `translateX(${curX}px)`
    // const rs = getComputedStyle(carInner)
    // console.dir(rs)
    //carInner.scrollLeft += 500; //carInner.offsetWidth;
    //carInner.scrollBy(-carInner.offsetWidth,0);

    curSlide ++;
    if( curSlide >= countSlide ){
      btnRight.style.display = 'none'
    }
    btnLeft.style.display = ''
  });

}
