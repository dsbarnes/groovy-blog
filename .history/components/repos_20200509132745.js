function repos(arr) {

    const root = document.getElementById('articles-section-text')

    for (const element of arr) {

        const keys = Object.keys(element)

        console.log(keys)
        console.log(element)

        const container = document.createElement('div')
        const title = document.createElement('p')
        const date = document.createElement('small')
        const description = document.createElement('p')

        container.classList.add('fade-in')

    }
}

export default repos


// for (const key in Object.keys(frontendData)) {
//     const element = document.createElement('p')
//     element.id = 'article'
//     element.innerHTML = frontendData[key]
//     sectionTextArea.appendChild(element)
// }