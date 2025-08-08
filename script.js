// Project Data with Local Paths & Placeholder Images

const projects = [
  {
    name: "KFC Clone",
    img: "images/kfc-img.png",
    desc: "KFC website clone built with Bootstrap & JS.",
    tech: "HTML, CSS, JS, Bootstrap",
    link: "myProjects/Kfc_clone/index.html",
    githu: "https://github.com/vaishnavi3563/Kfc-Clone"
  },
  {
    name: "Weather App",
    img: "images/weather-img.png",
    desc: "Weather forecast app using API.",
    tech: "HTML, CSS, JS",
    link: "myProjects/WeatherApp/index.html",
    github: "https://github.com/vaishnavi3563/Weather-App"
  },
  // {
  //   name: "TODO List",
  //   img: "images/todo-img.png",
  //   desc: "Task management app with local storage.",
  //   tech: "HTML, CSS, JS",
  //   link: "myProjects/TODO-List/index.html",
  //   github: "https://github.com/vaishnavi3563/TO-DO-List"
  // },
  {
    name: "TicTocToe Game",
    img: "images/game-img.png",
    desc: "Simple TicTacToe Game App.",
    tech: "HTML, CSS, JS",
    link: "myProjects/TicTacToeGame/index.html",
  },
  {
    name: "EMI Calculator",
    img: "images/emi-img.png",
    desc: "Simple EMI calculator app.",
    tech: "HTML, CSS, JS",
    link: "myProjects/EmiCalculator/index.html",
  }
];


// Skills
const skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Node.js", "Express", "MongoDB", "GitHub"];

// Render Projects
const projectList = document.getElementById("project-list");
projects.forEach(p => {
  projectList.innerHTML += `
    <div class="col-md-4 mb-3">
      <div class="card shadow-sm">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">${p.desc}</p>
          <p><strong>Tech:</strong> ${p.tech}</p>
          <a href="${p.link}" class="btn btn-primary btn-sm">Live Demo</a>
        </div>
      </div>
    </div>
  `;
});

// Render Skills
const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  const badge = document.createElement("span");
  badge.textContent = skill;
  skillsList.appendChild(badge);
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
});
