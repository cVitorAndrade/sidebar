const menuButtons = document.querySelectorAll('.logo')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')


menuButtons.forEach((menuButtons) => {
    menuButtons.addEventListener('click', () => {
        sidebar.classList.toggle('hide')
        overlay.classList.toggle('hide')
    })
})