const baseURL = "http://127.0.0.1:8080"
const dessinsCard = document.querySelector("#dessins");
const audioProjectCard = document.querySelector("#audio-project");

audioProjectCard.addEventListener("click", () => {document.location.href = `${baseURL}/pages/audioProject.html`})

dessinsCard.addEventListener("click", () => {
    document.location.href = `${baseURL}/pages/dessins.html`;
});