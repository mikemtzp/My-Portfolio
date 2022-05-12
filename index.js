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

const projects = [
  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/workbackground1.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn1",
    class: "w2-img1"
  },

 {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/workbackground2.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn2",
    class: "w2-img2"
  },

  {
    name: "Website Protfolio",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/workbackground3.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn3",
    class: "w2-img3"
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/workbackground1.png",
    technology: ["HTML", "CSS", "Bootstrap"],
    livelink: "#",
    sourcelink: "#",
    id: "btn4",
    class: "w2-img1"
  },

  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/workbackground2.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn5",
    class: "w2-img2"
  },

  {
    name: "Website Protfolio",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/workbackground3.png",
    technology: ["HTML", "CSS", "Javascript", "Bootstrap"],
    livelink: "#",
    sourcelink: "#",
    id: "btn6",
    class: "w2-img3"
  }

];

const body = document.querySelector("body");
const wholeProjects = document.createElement("div");
wholeProjects.classList.add("projects-container");

const aboutMe = document.querySelector(".about-me");
body.insertBefore(wholeProjects, aboutMe);

for (let i=0; i<projects.length; i++) {

  const div = document.createElement("div");
  div.classList.add("w2");
  div.classList.add(projects[i].class);
  wholeProjects.appendChild(div);

  div.innerHTML = `
  <div class="w2-project">
    <div class="project-group">
      <h2 class="project-title">${projects[i].name}</h2>
      <p class="project-text">${projects[i].description}</p>
      <ul class="project-lan">
        <li>${projects[i].technology[0]}</li>
        <li>${projects[i].technology[1]}</li>
        <li>${projects[i].technology[2]}</li>
      </ul>
    </div>
    <button type="button" class="project-see">See Project</button>
  </div>
  `;
}

const open = document.querySelectorAll(".project-see");
for (let i = 0; i < projects.length; i++) {
  open[i].addEventListener('click', ()=> {
      console.log("clicked");
      const main = document.createElement("div");
      main.className = "mainpop";
      const popup = document.createElement("div");
      popup.className = "popupDesktop";
      popup.innerHTML = `
      <div class="popup">
      <div class="popupIntro">
        <h2 class="popupName">${projects[i].name}</h2>
        <button class="popupClose">&times;</button>
      </div>
      <div class="popupButtons">
        <ul class="popupButtons">
          <li class="listItemPopup">${projects[i].technology[0]}</li>
          <li class="listItemPopup">${projects[i].technology[1]}</li>
          <li class="listItemPopup">${projects[i].technology[2]}</li>
        </ul>
      </div>
      <div class="flexpop">
      <img src=${projects[i].image} class="popupImg">
      <p class="popupDescription">${projects[i].description}</p>
      <div class="popupSources">
        <button class="popupLive">See Live<img src=${projects[i].livelink} alt=""></button>
        <button class="popupSource">See Source<img src=${projects[i].sourcelink} alt=""></button>
      </div>
      </div>
    </div>
    <div id="blurry"></div>
      `;
  
      main.appendChild(popup);
      body.appendChild(main);
  
      const close = document.querySelector(".popupClose");
      close.addEventListener("click", ()=> {
          console.log("closed");
          body.removeChild(main);
      });
  });
};