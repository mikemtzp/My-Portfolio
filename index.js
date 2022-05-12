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
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/project1.jpg',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn1',
    class: 'w2-img1',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/project3.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn2',
    class: 'w2-img2',
  },

  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/project2.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn3',
    class: 'w2-img3',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/project1.jpg',
    technology: ['HTML', 'CSS', 'Bootstrap'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn4',
    class: 'w2-img1',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/project3.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn5',
    class: 'w2-img2',
  },

  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './img/project2.png',
    technology: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn6',
    class: 'w2-img3',
  },

];

const body = document.querySelector('body');
const wholeProjects = document.createElement('div');
wholeProjects.classList.add('projects-container');

const aboutMe = document.querySelector('.about-me');
body.insertBefore(wholeProjects, aboutMe);

for (let i = 0; i < projects.length; i += 1) {
  const div = document.createElement('div');
  div.classList.add('w2-project');
  div.classList.add(projects[i].class);
  wholeProjects.appendChild(div);

  div.innerHTML = `
    <div class="project-group">
      <h2 class="project-title">${projects[i].name}</h2>
      <p class="project-text">${projects[i].description}</p>
      <ul class="project-lan">
        <li>${projects[i].technology[0]}</li>
        <li>${projects[i].technology[1]}</li>
        <li>${projects[i].technology[2]}</li>
      </ul>
    </div>
  `;

  const projectButton = document.createElement('button');
  projectButton.type = 'button';
  projectButton.classList.add('project-see');
  projectButton.textContent = 'See Project';
  div.appendChild(projectButton);
}

document.querySelectorAll('.w2-project').forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    e.target.lastChild.classList.add('hiddenButton');
  });

  item.addEventListener('mouseleave', (e) => {
    e.target.lastChild.classList.remove('hiddenButton');
  });
});

const open = document.querySelectorAll('.project-see');
for (let i = 0; i < projects.length; i += 1) {
  open[i].addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.className = 'popupDesktop';
    popup.innerHTML = `
      <div class="popup">
      <div class="popupIntro">
        <h2 class="popupName">${projects[i].name}</h2>
        <button class="popupClose">&times;</button>
      </div>
        <ul class="popupButtons">
          <li class="listItemPopup">${projects[i].technology[0]}</li>
          <li class="listItemPopup">${projects[i].technology[1]}</li>
          <li class="listItemPopup">${projects[i].technology[2]}</li>
        </ul>
      <div class="flexpop">
      <img src=${projects[i].image} class="popupImg">
      <p class="popupDescription">${projects[i].description}</p>
      <div class="popupSources">
        <button class="popupLive"><a href="${projects[i].livelink}">See Live</a><img src="./img/Live.png" alt="See live project"></button>
        <button class="popupSource"><a href="${projects[i].sourcelink}">See Source</a><img src="./img/GitHub-popup.png" alt="See Source project's source"></button>
      </div>
      </div>
    </div>
    <div id="blurry"></div>
      `;

    body.appendChild(popup);

    const close = document.querySelector('.popupClose');
    close.addEventListener('click', () => {
      body.removeChild(popup);
    });
  });
}

// Validate contact form
const form = document.querySelector('.actualForm');
const email = document.getElementById('mail');
const error = document.getElementById('error');

function validateEmail(event) {
  const message = [];
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.style.display = 'block';
    message.push('Email must be in lowercase');
    error.innerText = message.join(', ');
  } else {
    form.submit();
  }
}

form.addEventListener('submit', validateEmail);

// Local storage
const username = document.getElementById('username');
const mail = document.getElementById('mail');
const message = document.getElementById('message');
const formButton = document.getElementById('formButton');

function storeData() {
  const nameValue = username.value;
  const mailValue = mail.value;
  const messageValue = message.value;
  const user = {
    nameValue,
    mailValue,
    messageValue,
  };
  if (nameValue && mailValue && messageValue) {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
  }
}

formButton.addEventListener('click', storeData);
username.addEventListener('keyup', storeData);
mail.addEventListener('keyup', storeData);
message.addEventListener('keyup', storeData);

// Pre-filled data
if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'));
  username.value = user.nameValue;
  mail.value = user.mailValue;
  message.value = user.messageValue;
}