const navButtons = Array.from(document.getElementById('nav').children)
const aboutCard = document.getElementById('about-card')

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        aboutCard.classList.add('grow')
    })
})