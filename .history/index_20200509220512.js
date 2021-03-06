import articles from './components/articles.js'
import repos from './components/repos.js'

import articlesData from './siteData/articles.js'
import backendData from './siteData/backEnd.js'
import frontendData from './siteData/frontEnd.js'
import fullstackData from './siteData/fullStack.js'


document.querySelectorAll('.nav')
console.log(clicked)
    .forEach(btn => btn.addEventListener('click', function () {

        // All of this so far is only
        // for the FIRST CLICK!

        // Every other click only changes the
        // data and border color.

        // console.log(this.dataset.color)

        console.log(document.querySelector('.hobbies').style.display == 'none')

        if (true) {

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
        }

    }))