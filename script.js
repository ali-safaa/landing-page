const hamburger_icon = document.querySelector("[data-hamburger-icon");
const close_icon = document.querySelector("[data-close-icon");
const container_nav = document.querySelector("[data-container-nav]");

close_icon.addEventListener("click", () => {
     container_nav.style.display = "none";
     // hamburger_icon.style.display = "block";
});

hamburger_icon.addEventListener("click", () => {
     container_nav.style.display = "block";
     hamburger_icon.style.display = "none";
});
