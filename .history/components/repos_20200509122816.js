function repos(
    arr, title, repolink, demolink, description, image) {

    const root = document.getElementById('articles-section-text')

    for (let element of arr) {
        const keys = Object.keys(element)
        for (let key in keys) {
            const pTag = document.createElement('p')
            pTag.classList.add('fade-in')
            pTag.innerHTML = element[key]
            root.appendChild(pTag)
        }
    }
}

export default repos