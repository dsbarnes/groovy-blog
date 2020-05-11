import articles from './components/articles.js'
import repos from './components/repos.js'

// import articles from './siteData/articles/js'
import backEnd from './siteData/backEnd/js'
import frontEnd from './siteData/frontEnd/js'
import fullStack from './siteData/fullStack/js'

articles(frontEnd)
repos(backEnd)

document.querySelector('#toggle-button')
    .addEventListener('click',
        function () {
            document.querySelector('.section-one')
                .classList.toggle('collapsed')
            document.querySelector('.section-two.collapsible')
                .classList.toggle('collapsed');
            document.querySelector('.double-border.collapsible')
                .classList.toggle('collapsed')
        });