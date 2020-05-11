import articles from './components/articles.js'
import repos from './components/repos.js'

import articles from './siteData/articles/js'
import backEnd from './siteData/backEnd/js'
import fromtEnd from './siteData/frontEnd/js'
import fullStack from './siteData/fullStack/js'

articles()
repos()

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