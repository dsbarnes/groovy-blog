import articles from './components/articles.js'
import repos from './components/repos.js'

import articlesData from './siteData/articles.js'
import backendData from './siteData/backEnd.js'
import frontendData from './siteData/frontEnd.js'
import fullstackData from './siteData/fullStack.js'

const handleRemoveData = (currentSection) => {

    const sections = Array.from(document.querySelectorAll('[id*="section-text"]'))
    // .filter(container =>
    //     container.id != `${currentSection}-section-text`)

    console.log(sections)
    for (const thing of sections) console.log(thing.children)
    console.log(currentSection)
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

        handleRemoveData(this.id)

        const hobbies = document.querySelector('.hobbies').classList

        hobbies.contains('collapsed') ?
            // Fades in the articles:
            populateData(this.id) :
            // Fades out about card, then runs populateData()
            handleTransition(this.id)
    }))