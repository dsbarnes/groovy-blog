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
        titleAndLinks.appendChild(title)

        repolink.innerHTML = element['RepoLink']
        titleAndLinks.appendChild(repolink)

        if (element['DemoLink'] != undefined) {
            demolink.innerHTML = element['DemoLink']
            container.appendChild(demolink)
            titleAndLinks.appendChild(repolink)
        }

        container.appendChild(titleAndLinks)

        description.innerHTML = element['Description']
        container.appendChild(description)


        root.appendChild(container)

    }
}

export default repos
