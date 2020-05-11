function repos(arr) {

    const root = document.getElementById('articles-section-text')

    if (root.hasChildNodes) {
        console.log('gotta remove them!')
        console.log(root.childNodes)
        console.log(root.children)
        for (element of Array.from(root.childNodes)) {
            element.remove()
        }
    }

    for (const element of arr) {
        // console.log('something')
        // const keys = Object.keys(element)

        const container = document.createElement('div')
        const title = document.createElement('h1')
        const repolink = document.createElement('p')
        const demolink = document.createElement('p')
        const description = document.createElement('p')

        title.innerHTML = element['Repo']
        container.appendChild(title)

        repolink.innerHTML = element['RepoLink']
        container.appendChild(repolink)

        demolink.innerHTML = element['DemoLink']
        container.appendChild(demolink)

        description.innerHTML = element['Description']
        container.appendChild(description)


        container.id = 'article'
        root.appendChild(container)

    }
}

export default repos
