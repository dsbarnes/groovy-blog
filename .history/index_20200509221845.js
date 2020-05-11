import articles from './components/articles.js'
import repos from './components/repos.js'

import articlesData from './siteData/articles.js'
import backendData from './siteData/backEnd.js'
import frontendData from './siteData/frontEnd.js'
import fullstackData from './siteData/fullStack.js'


document.querySelectorAll('.nav')
    .forEach(btn => btn.addEventListener('click', function () {
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


            // repos(fullstackData)
            this.id == 'articles' && articles(articlesData)
            this.id == 'frontend' && repos(frontendData)
            this.id == 'backend' && repos(backendData)
            this.id == 'fullstack' && repos(fullstackData)
        }
        else {
            this.id == 'articles' && articles(articlesData)
            this.id == 'frontend' && repos(frontendData)
            this.id == 'backend' && repos(backendData)
            this.id == 'fullstack' && repos(fullstackData)
        }

    }))