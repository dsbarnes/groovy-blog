function repos(arr) {

    const root = document.getElementById('articles-section-text')

    for (const element of arr) {
        const keys = Object.keys(element)
        for (const key in keys) {
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