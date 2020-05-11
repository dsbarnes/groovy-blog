import articles from './components/articles.js'
import repos from './components/repos.js'

import articlesData from './siteData/articles.js'
import backendData from './siteData/backEnd.js'
import frontendData from './siteData/frontEnd.js'
import fullstackData from './siteData/fullStack.js'

document.querySelector('#toggle-button')
    .addEventListener('click',
        function () {

            const aboutText = document.getElementById('about-section-text')
            aboutText.style.display = 'none'

            const otherText = document.getElementById('articles-section-text')
            console.log(otherText)
            // otherText.style.display = 'static'

            // Add overflow: scroll
            document.querySelector('.section-one')
                .classList.toggle('collapsed')

            // Shrinks and fades out the middle box
            document.querySelector('.section-two.collapsible')
                .classList.toggle('collapsed');

            // document.querySelector('.double-border.collapsible')
            //     .classList.toggle('collapsed')
        });