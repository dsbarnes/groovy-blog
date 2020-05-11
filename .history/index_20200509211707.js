import articles from './components/articles.js'
import repos from './components/repos.js'

import articlesData from './siteData/articles.js'
import backendData from './siteData/backEnd.js'
import frontendData from './siteData/frontEnd.js'
import fullstackData from './siteData/fullStack.js'


document.querySelectorAll('.nav')
    .forEach(btn => btn.addEventListener('click', function () {
        console.log(this.dataset.color)

        const aboutText = document.getElementById('about-section-text')
        aboutText.style.display = 'none'
    }))

// document.querySelector('#toggle-button')
// .addEventListener('click',
// function () {
//     // Remove the about me section:
//     const aboutText = document.getElementById('about-section-text')
//     aboutText.style.display = 'none'

//     // Add overflow: scroll
//     document.querySelector('.section-one')
//         .classList.toggle('collapsed')

//     // Shrinks and fades out the middle box
//     document.querySelector('.section-two.collapsible')
//         .classList.toggle('collapsed')

//     document.querySelector('.section-three')
//         .classList.toggle('collapsed')

//     // repopulate what was the about section
//     // it is now the section the user clicked
//     repos(backendData)
// });