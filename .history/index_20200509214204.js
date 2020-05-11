import articles from './components/articles.js'
import repos from './components/repos.js'

import articlesData from './siteData/articles.js'
import backendData from './siteData/backEnd.js'
import frontendData from './siteData/frontEnd.js'
import fullstackData from './siteData/fullStack.js'


document.querySelectorAll('.nav')
    .forEach(btn => btn.addEventListener('click', function () {

        // All of this so far is only
        // for the FIRST CLICK!

        // Every other click only changes the
        // data and border color.
        console.log(this.dataset.color)

        const aboutText = document.getElementById('about-section-text')
        aboutText.style.display = 'none'

        // Add overflow: scroll
        document.querySelector('.content')
            .classList.add('collapsed')

        // Shrinks and fades out the middle box
        const doubleBorder =
            Array.from(document.querySelectorAll('.double-border'))
        doubleBorder[1].classList.add('collapsed')

        document.querySelector('.hobbies.collapsible')
            .classList.add('collapsed')

        // Slightly shrink the social media box:
        document.querySelector('.social-media')
            .classList.add('collapsed')

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