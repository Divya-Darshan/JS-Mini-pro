// JavaScript
const video = document.getElementById("myVideo");
const audioButton = document.getElementById("audioButton");
const navMenu = document.getElementById("nav-menu");

// Toggle mute/unmute on button click
audioButton.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    audioButton.innerHTML = '<i style="color: white;" class="fa-solid fa-volume-up"></i>'; // Unmuted icon
  } else {
    video.muted = true;
    audioButton.innerHTML = '<i style="color: white;" class="fa-solid fa-volume-xmark"></i>'; // Muted icon
  }
});

const ham = document.getElementById("ham");



function toggleNavMenu() {
    navMenu.classList.toggle("active"); // Toggles the "active" class on the menu
}

ham.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
    navMenu.classList.toggle("active"); // Toggles the "active" class on the menu
    ham.classList.toggle("rotate"); // Toggles the "rotate" class on the icon
}

ham.addEventListener("click", toggleNavMenu);
