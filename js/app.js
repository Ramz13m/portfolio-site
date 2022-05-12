document.addEventListener("DOMContentLoaded", () => {
   
  const chk = document.getElementById('chk');
  const headerButton = document.querySelector(".header__open");
  const headerList = document.querySelector(".header__list");
  const closeButton = document.querySelector(".header__close-button")
  
  chk.addEventListener('click', () => {
    document.body.classList.toggle('header__dark');
  });

  headerButton.addEventListener('click', () => {
    headerList.classList.add("header__toggle-modal")
  })
  
  closeButton.addEventListener('click', ()=>{
    headerList.classList.remove("header__toggle-modal")
  })


  // vanilla

  VanillaTilt.init(document.querySelector(".about-section__img-content"), {
    max: 25,
    speed: 1000
  });
  
  //It also supports NodeList
  VanillaTilt.init(document.querySelectorAll(".your-element"));
 

  
  
})