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

            const sectionTextArea = document.getElementById('articles-section-text')

            console.log(frontendData)
            for (const key in Object.keys(frontendData)) {
                const element = document.createElement('p')
                element.id = 'article'
                element.innerHTML = frontendData[key]
                sectionTextArea.appendChild(element)
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