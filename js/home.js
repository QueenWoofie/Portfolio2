import { projects } from "./projects.js";

const grid = document.getElementById("projectGrid");
const year = document.getElementById("year");
year.textContent = String(new Date().getFullYear());

function cardTemplate(project, pageHref) {
  return `
    <article class="card">
      <a class="card-link" href="${pageHref}">
        <img class="card-img" src="${project.thumb}" alt="${project.heroAlt}" loading="lazy" />
        <div class="card-body">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-text">${project.teaser}</p>
          <span class="card-cta" aria-hidden="true">Read more →</span>
        </div>
      </a>
    </article>
  `;
}

const pageMap = {
  "css-frameworks": "./pages/project-1.html",
  "js-frameworks": "./pages/project-2.html",
  "semester-project-2": "./pages/project-3.html",
};

grid.innerHTML = projects.map((p) => cardTemplate(p, pageMap[p.id])).join("");
