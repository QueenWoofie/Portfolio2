import { projects } from "./projects.js";

const projectId = document.body.dataset.projectId;
const project = projects.find((p) => p.id === projectId);

if (!project) {
  document.getElementById("title").textContent = "Project not found";
  throw new Error(`No project for id: ${projectId}`);
}

document.title = `${project.title} | Portfolio 2`;

document.getElementById("title").textContent = project.title;
document.getElementById("teaser").textContent = project.teaser;

const heroImg = document.getElementById("heroImg");
heroImg.src = project.hero;
heroImg.alt = project.heroAlt;

document.getElementById("caption").textContent = project.caption;

const liveLink = document.getElementById("liveLink");
liveLink.href = project.liveUrl;

const readmeLink = document.getElementById("readmeLink");
readmeLink.href = project.readmeUrl;

const detailsList = document.getElementById("detailsList");
detailsList.innerHTML = project.details.map((d) => `<li>${d}</li>`).join("");

const copyBtn = document.getElementById("copyLinkBtn");
const copyStatus = document.getElementById("copyStatus");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyStatus.textContent = "Link copied!";
    window.setTimeout(() => (copyStatus.textContent = ""), 2000);
  } catch {
    copyStatus.textContent =
      "Could not copy. Please copy from the address bar.";
  }
});
