document.addEventListener("DOMContentLoaded", () => {
  // const moon = document.querySelector(".header__moon-icon");
  // moon.addEventListener("click", () => {
  //   document.body.classList.toggle("dark-theme");
  //   if(document.body.classList.contains("dark-theme")){
  //     moon.src = "./img/sun.png"
  //   } else{
  //     moon.src = "./img/moon.png"
  //   }
  // })
  
  // test 2
  
  const chk = document.getElementById('chk');
  
  chk.addEventListener('click', () => {
    document.body.classList.toggle('header__dark');
  });
  
  
})