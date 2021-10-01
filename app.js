const dessinsCard = document.querySelector("#dessins");
const audioProjectCard = document.querySelector("#audio-project");
const newsletterCard = document.querySelector("#newsletter");

audioProjectCard.addEventListener("click", () => {document.location.href = `./pages/audioProject.html`});
//dessinsCard.addEventListener("click", () => {document.location.href = `./pages/dessins.html`});
newsletterCard.addEventListener("click", () => {document.location.href = `./pages/newsletter.html`;});