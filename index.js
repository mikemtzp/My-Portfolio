// menu = desk-navlinks
// menuItem = desk-sections
// hamburguer = navlinks

const menu = document.querySelector(".desk-navlinks");
const menuItems = document.querySelectorAll(".menu-items");
const hamburger = document.querySelector(".navlinks");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function openHamMenu() {
  if (menu.classList.contains("open-menu")) {
    menu.classList.remove("open-menu");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    menu.classList.add("open-menu");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
}

hamburger.addEventListener("click", openHamMenu);

menuItems.forEach( 
  function(deskSections) { 
    deskSections.addEventListener("click", openHamMenu);
  }
)
