const iconBox = document.querySelector(".icon-box");
const menuListMobile = document.querySelector(".menu-list-mobile");
const menuIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");

iconBox.addEventListener("click", () => {
  menuListMobile.classList.toggle("active");
  closeIcon.classList.toggle("active-icon");
  menuIcon.classList.toggle("active-icon");
});
