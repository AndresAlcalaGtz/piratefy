const burgerIcon = document.querySelector("#nav-burger");
const navbarMenu = document.querySelector("#nav-menu");

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
})