const menuXD = () => {
    const menuBtn = document.querySelector(".hamburger-menu");
    const menuMain = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menuMain.classList.toggle("_active");
        menuBtn.classList.toggle("toggle");
    });
}

menuXD();

const thumb = document.querySelector(".side-image");
const galleryImg = document.querySelector(".main-image");


