function repos(arr) {

    const root = document.getElementById('articles-section-text')

    for (const element of arr) {

        const keys = Object.keys(element)

        console.log(keys)
        console.log(element)

        const container = document.createElement('div')
        const title = document.createElement('h1')
        const repolink = document.createElement('p')
        const demolink = document.createElement('p')
        const description = document.createElement('p')

        container.classList.add('fade-in')
        title.innerHTML = element['Repo']
        container.appendChild(tite)

        repolink.innerHTML = element['RepoLink']
        container.appendChild(repolink)

        demolink.innerHTML = element['DemoLink']
        container.appendChild(demolink)

        description.innerHTML = element['Description']
        container.appendChild(description)

    }
}

export default repos


// for (const key in Object.keys(frontendData)) {
//     const element = document.createElement('p')
//     element.id = 'article'
//     element.innerHTML = frontendData[key]
//     sectionTextArea.appendChild(element)
// }