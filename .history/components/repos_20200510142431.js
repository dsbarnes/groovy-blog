function repos(arr) {

    const root = document.getElementById('content-section-text')

    for (const element of arr) {

        const container = document.createElement('div')
        const titleAndLinks = document.createElement('div')
        const title = document.createElement('h1')
        const repolink = document.createElement('p')
        const demolink = document.createElement('p')
        const description = document.createElement('p')

        titleAndLinks.classList.add('repo-title-links')

        title.innerHTML = element['Repo']
        titleAndLinks.appendChild(title)

        repolink.innerHTML = element['RepoLink']
        titleAndLinks.appendChild(repolink)

        if (element['DemoLink'] != undefined) {
            demolink.innerHTML = element['DemoLink']
            container.appendChild(demolink)
            titleAndLinks.appendChild(demolink)
        }

        container.appendChild(titleAndLinks)

        description.innerHTML = element['Description']
        description.classList.add('repo-description')
        container.appendChild(description)

        container.classList.add('article-repo')
        root.appendChild(container)

    }
}

export default repos