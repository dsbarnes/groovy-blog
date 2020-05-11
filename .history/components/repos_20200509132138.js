function repos(arr) {

    const root = document.getElementById('articles-section-text')

    for (const element of arr) {
        console.log(element)
        for (const key in Object.keys(element)) {

            console.log(key)
            console.log(element)

            const pTag = document.createElement('p')
            pTag.classList.add('fade-in')
            pTag.innerHTML = element[key]

            root.appendChild(pTag)
        }
    }
}

export default repos


// for (const key in Object.keys(frontendData)) {
//     const element = document.createElement('p')
//     element.id = 'article'
//     element.innerHTML = frontendData[key]
//     sectionTextArea.appendChild(element)
// }