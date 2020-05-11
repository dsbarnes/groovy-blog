function repos(arr) {

    const root = document.getElementById('articles-section-text')

    for (const element of arr) {

        const container = document.createElement('div')
        const titleAndLinks = document.createElement('div')
        const title = document.createElement('h1')
        const repolink = document.createElement('p')
        const demolink = document.createElement('p')
        const description = document.createElement('p')

        titleAndLinks.id = 'repo-title-and-links'

        title.innerHTML = element['Repo']
        container.appendChild(title)

        repolink.innerHTML = element['RepoLink']
        container.appendChild(repolink)

        titleAndLinks.appendChild(title)
        titleAndLinks.appendChild(repolink)

        if (element['DemoLink'] != undefined) {
            demolink.innerHTML = element['DemoLink']
            container.appendChild(demolink)
            titleAndLinks.appendChild(repolink)
        }


        description.innerHTML = element['Description']
        container.appendChild(description)


        container.id = 'article'
        root.appendChild(container)

    }
}

export default repos
