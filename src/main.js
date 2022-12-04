// Scroll change navigation
window.addEventListener("scroll", () => {
    // Target navigation
    document.querySelector(".navigation").classList.toggle("when__scroll", window.scrollY > 0);
})


// Toggle mobile nav__links
const menu__bar = document.querySelector(".menu__bar");
const small__screen__nav__links = document.querySelector(".small__screen__nav__links");

// Add click event to menu__bar
menu__bar.addEventListener('click', () => {
    small__screen__nav__links.classList.toggle("set__visible")
})