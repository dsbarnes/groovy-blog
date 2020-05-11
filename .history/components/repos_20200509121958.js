function repos(arr, title, repolink, demolink, description, image) {

    const root = document.getElementById('articles-section-text')

    for (let element of arr) {
        const titleTag = document.createElement('p')
        titleTag.classList.add('fade-in')
        titleTag.innerHTML = title

        console.log(element)
    }

    export default repos