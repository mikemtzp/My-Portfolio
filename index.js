const menu = document.querySelector('.desk-navlinks');
const menuItems = document.querySelectorAll('.menu-items');
const hamburger = document.querySelector('.navlinks');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');

function openHamMenu() {
  if (menu.classList.contains('open-menu')) {
    menu.classList.remove('open-menu');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    menu.classList.add('open-menu');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
}

hamburger.addEventListener('click', openHamMenu);

menuItems.forEach(
  (deskSections) => {
    deskSections.addEventListener('click', openHamMenu);
  },
);

let project1 = {name: "Multi-Post Stories" , description: "lorem ipsum", image: "img/w1.png", technology: "HTML", livelink: "#" ,sourcelink: "#" };
let project2 = {name: "Multi-Post Stories" , description: "lorem ipsum", image: "img/w1.png", technology: "HTML", livelink: "#" ,sourcelink: "#" };
let project3 = {name: "Multi-Post Stories" , description: "lorem ipsum", image: "img/w1.png", technology: "HTML", livelink: "#" ,sourcelink: "#" };
let project4 = {name: "Multi-Post Stories" , description: "lorem ipsum", image: "img/w1.png", technology: "HTML", livelink: "#" ,sourcelink: "#" };
let project5 = {name: "Multi-Post Stories" , description: "lorem ipsum", image: "img/w1.png", technology: "HTML", livelink: "#" ,sourcelink: "#" };
let project6 = {name: "Multi-Post Stories" , description: "lorem ipsum", image: "img/w1.png", technology: "HTML", livelink: "#" ,sourcelink: "#" };
let project7 = {name: "Multi-Post Stories" , description: "lorem ipsum", image: "img/w1.png", technology: "HTML", livelink: "#" ,sourcelink: "#" };

let projectsArr = [project1, project2, project3, project4, project5, project6, project7];

function popup() {
  const div1 = document.createElement("div");
}