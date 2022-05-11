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
  }
];

//Loop through each object in the array
Array.forEach(
  (project) => {
    popupWindow(project);
  }
)

function popupWindow(project) {
  //Create elements
  const popupStart = document.createElement("div");
  const popup = document.createElement("div");
  const popupIntro = document.createElement("div");
  let popupName = document.createElement("h2");
  let popupClose = document.createElement("button");
  const popupButtons = document.createElement("div");
  const popupButtonsul = document.createElement("ul");
  let popupImg = document.createElement("img");
  let popupDescription = document.createElement("p");
  let popupSources = document.createElement("div");
  let popupLive = document.createElement("button");
  let popupSource = document.createElement("button");
  const blurry = document.createElement("div");

  //Create li elements for technology ul
  projects.technology.each(item => {
    let listItemPopup = document.createElement("li");
    listItemPopup.classList.add = "listItemPopup";
    listItemPopup.textContent = projects.technology[item];
    popupButtonsul.appendChild("li");
  })

  // Add text to elements
  popupName.textContent = projects.name;
  popupClose.textContent = "&times;";
  popupImg.textContent = projects.image;
  popupDescription.textContent = projects.description;
  popupLive.textContent = "See Live";
  popupSource.textContent = "See Source";

//Add classes to elements
popupStart.classList.add("popupStart");
popup.classList.add("popup");
popupIntro.classList.add("popupIntro");
popupName.classList.add("popupName");
popupClose.classList.add("popupClose");
popupButtons.classList.add("popupButtons");
popupButtonsul.classList.add("popupButtons");
popupImg.classList.add("popupImg");
popupDescription.classList.add("popupDescription");
popupSources.classList.add("popupSources");
popupLive.classList.add("popupLive");
popupSource.classList.add("popupSource");

 //Add attributes to elements
 projects.image.forEach(item => {
   let imgSrc = projects.image[item];
   popupImg.setAttribute("src", imgSrc);
 });
 projects.livelink.forEach(item => {
  let liveSrc = projects.livelink[item];
  popupLive.setAttribute("src", liveSrc);
});
projects.sourcelink.forEach(item => {
  let linkSrc = projects.sourcelink[item];
  popupSource.setAttribute("src", linkSrc);
});
  
  popupLive.setAttribute("src", "./img/Live.png");
  popupSource.setAttributeNS("src", "./img/GitHub-popup.png")

  //Append children to parents
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

  //Appends main elements to body
  document.body.appendChild(popupStart);
  document.body.appendChild(blurry);
}
//Add event listener to check for clicks
button.addEventListener((evt) => {
  popupWindow("click", project);
});
const blurry = document.createElement("div");


//Add event listener for buttons
/* projects.id.forEach(
  (item, i) => {
    const projectButtons = document.querySelectorAll(`#${projects[i].id}`);
    projectButtons.addEventListener('click', openHamMenu);
  },
); */

const button1 = document.querySelector(`#${projects[0].id}`);
button1.addEventListener('click', () => { popupWindow(projects[0]); });
const button2 = document.querySelector(`#${projects[1].id}`);
button2.addEventListener('click', () => { popupWindow(projects[1]); });
const button3 = document.querySelector(`#${projects[2].id}`);
button3.addEventListener('click', () => { popupWindow(projects[2]); });
const button4 = document.querySelector(`#${projects[3].id}`);
button4.addEventListener('click', () => { popupWindow(projects[3]); });
const button5 = document.querySelector(`#${projects[4].id}`);
button5.addEventListener('click', () => { popupWindow(projects[4]); });
const button6 = document.querySelector(`#${projects[5].id}`);
button6.addEventListener('click', () => { popupWindow(projects[5]); });
const button7 = document.querySelector(`#${projects[6].id}`);
button7.addEventListener('click', () => { popupWindow(projects[6]); });
