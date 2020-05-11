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

            for (key in Object.keys(frontendData)) {
                element = document.createElement('p')
                element.classList.add('fade-in')
                element.innerHTML = frontendData[key]
            }

            // Add overflow: scroll
            document.querySelector('.section-one')
                .classList.toggle('collapsed')

            // Shrinks and fades out the middle box
            document.querySelector('.section-two.collapsible')
                .classList.toggle('collapsed');

            // document.querySelector('.double-border.collapsible')
            //     .classList.toggle('collapsed')
        });