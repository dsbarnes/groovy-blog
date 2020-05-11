import articles from './components/articles.js'
import repos from './components/repos.js'

import articlesData from './siteData/articles.js'
import backendData from './siteData/backEnd.js'
import frontendData from './siteData/frontEnd.js'
import fullstackData from './siteData/fullStack.js'

const handleRemoveData = () => {
    const section = document.querySelectorAll('[id*="section"]')
    section && console.log('true')
}

const populateData = (id) => {
    id == 'articles' && articles(articlesData)
    id == 'frontend' && repos(frontendData)
    id == 'backend' && repos(backendData)
    id == 'fullstack' && repos(fullstackData)
}

const handleTransition = (id) => {
    // Remove the about card.

    // document.getElementById('about-section-text').remove()

    // Adds overflow: scroll to the content car:
    document.querySelector('.content')
        .classList.add('collapsed')

    // Shrinks and fades out the middle card:
    document.querySelector('.hobbies')
        .classList.add('collapsed')

    // Adjust the social media card:
    document.querySelector('.social-media')
        .classList.add('collapsed')

    populateData(id)
}

document.querySelectorAll('.nav')
    .forEach(btn => btn.addEventListener('click', function () {

        handleRemoveData()

        const hobbies = document.querySelector('.hobbies').classList

        hobbies.contains('collapsed') ?
            // Fades in the articles:
            populateData(this.id) :
            // Fades out about card, then runs populateData()
            handleTransition(this.id)
    }))