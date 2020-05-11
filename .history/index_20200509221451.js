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


        const hobbies = document.querySelector('.hobbies').classList

        if (!hobbies.contains('collapsed')) {
            const aboutText = document.getElementById('about-section-text')
            aboutText.style.display = 'none'

            document.querySelector('.content')
                .classList.add('collapsed')

            // Shrinks and fades out the middle box
            document.querySelector('.hobbies.collapsible')
                .classList.add('collapsed')

            // Adjust the social media box:
            document.querySelector('.social-media')
                .classList.add('collapsed')

            console.log(this.id)
            // console.log(this.dataset.color)

            repos(fullstackData)
        }
        else {
            console.log(this.id)
            console.log(this.dataset.color)
        }

    }))