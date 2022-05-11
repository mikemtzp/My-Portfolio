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
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/w1.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn1"
  },

 {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/w1.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn2"
  },

  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/w1.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn3"
  },

  {
    name: "Website Protfolio",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/w1.png",
    technology: ["HTML", "CSS"],
    livelink: "#",
    sourcelink: "#",
    id: "btn4"
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/w1.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn5"
  },

  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/w1.png",
    technology: ["HTML", "CSS", "Javascript", "Bootstrap"],
    livelink: "#",
    sourcelink: "#",
    id: "btn6"
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./img/w1.png",
    technology: ["HTML", "CSS", "Bootstrap"],
    livelink: "#",
    sourcelink: "#",
    id: "btn7"
  },
];

Array.forEach(
  (project) => {
    projectCreator(project);
  }
)

function projectCreator (project) {
  const popupStart = document.createElement("div");
  const popup = document.createElement("div");
  popupStart.content = project.name
  button.addEventListener((evt) => {
    popupWindow(project)
  })
}

function popupWindow() {
  const popupStart = document.createElement("div");
  const popup = document.createElement("div");
  const popupIntro = document.createElement("div");
  let popupName = document.createElement("h2");
  let popupClose = document.createElement("button");
  const popupButtons = document.createElement("div");
  const popupButtonsul = document.createElement("ul");
  let listItemPopup = document.createElement("li");
  let popupImg = document.createElement("img");
  let popupDescription = document.createElement("p");
  let popupSources = document.createElement("div");
  let popupLive = document.createElement("button");
  let popupSource = document.createElement("button");
  const blurry = document.createElement("div");

  projects.technology.each(item => {
    document.createElement("li");
    listItemPopup.className = "listItemPopup"
    listItemPopup.textContent = projects.technology[item];
    popupButtonsul.appendChild("li");
  })

  popupName.textContent = projects.name;
  popupClose.textContent = "&times;";
  listItemPopup.textContent = projects.technology[0];
  listItemPopup.textContent = projects.technology[1];
  listItemPopup.textContent = projects.technology[2];
  listItemPopup.textContent = projects.technology[3];
  popupImg.textContent = projects.image;
  popupDescription.textContent = projects.description;
  popupLive.textContent = "See Live";
  popupSource.textContent = "See Source";

  popupStart.appendChild(popup);
  popup.appendChild(popupIntro);
  popupIntro.appendChild(popupName);
  popupIntro.appendChild(popupClose);
  popup.appendChild(popupButtons);
  popupButtons.appendChild(popupButtonsul);
  popupButtonsul.appendChild(listItemPopup);
  popup.appendChild(popupImg);
  popup.appendChild(popupDescription);
  popup.appendChild(popupSources);
  popupSources.appendChild(popupLive);
  popupSources.appendChild(popupSource);

  document.body.appendChild(popupStart);
  document.body.appendChild(blurry);
}

const blurry = document.createElement("div");

const projectButtons = document.querySelectorAll(`#${projects[i].id}`)

menuItems.forEach(
  (deskSections) => {
    deskSections.addEventListener('click', openHamMenu);
  },
);
