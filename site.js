document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
    document.querySelector(".logo").addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});
