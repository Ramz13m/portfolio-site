document.addEventListener("DOMContentLoaded", () => {
   
  const chk = document.getElementById('chk');
  const headerButton = document.querySelector(".header__open");
  const headerList = document.querySelector(".header__list");
  const closeButton = document.querySelector(".header__close-button");
  const box = document.querySelector(".header__info-box")
  
  chk.addEventListener('click', () => {
    document.body.classList.toggle('header__dark');
  });

  headerButton.addEventListener('click', () => {
    headerList.classList.add("header__toggle-modal");
    document.body.style.overflow = "hidden";
  })
  
  closeButton.addEventListener('click', ()=>{
    headerList.classList.remove("header__toggle-modal");
    document.body.style.overflow = "scroll";
    
  })
  
  document.addEventListener("keydown", (e)=>{
    if(e.code === "Escape"){
      headerList.classList.remove("header__toggle-modal");
      // modalSection.style.display = "none"
      document.body.style.overflow = ""
    }
  })
  
  box.addEventListener("click", ()=>{
    headerList.classList.remove("header__toggle-modal");
    document.body.style.overflow = ""
  })

  
  
  // 
  
  


  // vanilla

  VanillaTilt.init(document.querySelector(".about-section__img-content"), {
    max: 25,
    speed: 1000
  });
  
  //It also supports NodeList
  VanillaTilt.init(document.querySelectorAll(".your-element"));
 

  
  
})