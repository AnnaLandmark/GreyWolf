const burgermenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".navmenu");

burgermenu.addEventListener("click", ()=> {
    burgermenu.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    burgermenu.classList.remove("active")
    navMenu.classList.remove("active")
}))