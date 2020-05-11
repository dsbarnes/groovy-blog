function repos(arr) {

    const root = document.getElementById('articles-section-text')

    for (const element of arr) {

        const keys = Object.keys(element)

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


        container.id = 'articles'
        container.classList.add('fade-in')
        root.appendChild(container)

    }
}

export default repos


// for (const key in Object.keys(frontendData)) {
//     const element = document.createElement('p')
//     element.id = 'article'
//     element.innerHTML = frontendData[key]
//     sectionTextArea.appendChild(element)
// }