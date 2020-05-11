const navButtons = Array.from(document.getElementById('nav').children)
const aboutCard = document.getElementById('about-card')

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(aboutCard.classList)
        aboutCard.classList.add('grow')

    })
})