function modules(arr) {
    const root = document.getElementById('content-section-text')
    for (const element of arr) {
        const container = document.createElement('div')
        const title = document.createElement('h1')
        const date = document.createElement('p')
        const short = document.createElement('p')

        title.innerHTML = arr['Title']
        container.appendChild(title)

        date.innerHTML = arr['Date']
        container.appendChild(date)

        short.innerHTML = arr['Short']
        container.appendChild(short)

        root.appendChild(container)
    }


    // title.innerHTML = element['Repo']
    // titleAndLinks.appendChild(title)

    // repolink.innerHTML = element['RepoLink']
    // titleAndLinks.appendChild(repolink)

    // if (element['DemoLink'] != undefined) {
    //     demolink.innerHTML = element['DemoLink']
    //     container.appendChild(demolink)
    //     titleAndLinks.appendChild(demolink)
    // }

    // container.appendChild(titleAndLinks)

    // description.innerHTML = element['Description']
    // description.classList.add('repo-description')
    // container.appendChild(description)

    // container.id = 'article-repo'
    // root.appendChild(container)
}

export default modules