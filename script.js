const iconBox = document.querySelector(".icon-box");
const menuListMobile = document.querySelector(".menu-list-mobile");
const menuIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");
const inputDest=document.querySelector(".input-dest");
const errorDest=document.querySelector(".error-dest")
const inputInDate=document.querySelector(".input-in-date");
const inputOutDate=document.querySelector(".input-out-date");
const errorInDate= document.querySelector(".error-in-date");
const errorOutDate= document.querySelector(".error-out-date");

iconBox.addEventListener("click", () => {
  menuListMobile.classList.toggle("active");
  closeIcon.classList.toggle("active-icon");
  menuIcon.classList.toggle("active-icon");
});
let letters;
inputDest.addEventListener("input", ()=>{
  let isDestTouched=false;  
   letterowe(inputDest.value,isDestTouched)     
} );
inputDest.addEventListener("blur", ()=>{
  isDestTouched=true;
  letterowe(inputDest.value,isDestTouched);  
});
function letterowe(abc, quest){
    for(let j=0;j<abc.length;j++) { 
    if(!abc[j].match(/[a-z]/)&& quest) {
      errorDest.innerText = 'not a letter';
            return;
    } else {
      errorDest.innerText = '';}
            }
      console.log(abc)
}
const today= new Date();
console.log(today);
inputInDate.addEventListener("input", (e) => {  
  if (new Date(e.target.value).getTime() < today.getTime()) {
    errorInDate.innerText = "Invalid date";
    inputInDate.setAttribute("min",today);
  } else {
    errorInDate.innerText = "";
  }
});
inputOutDate.addEventListener("input", (e) => {
  
  if (new Date(e.target.value).getTime() <= today.getTime() || new Date(inputInDate.value).getTime()>= new Date(inputOutDate.value).getTime()) {
    errorOutDate.innerText = "Invalid date";
    
  } else {
    errorOutDate.innerText = "";
  }
});
