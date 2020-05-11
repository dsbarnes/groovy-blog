function modules(arr) {
    const root = document.getElementById('content-section-text')
    // for (const element of arr) {
    //     const container = document.createElement('div')
    //     const title = document.createElement('h1')
    //     const date = document.createElement('p')
    //     const short = document.createElement('p')

    //     title.innerHTML = element['Title']
    //     container.appendChild(title)

    //     date.innerHTML = element['Date']
    //     container.appendChild(date)

    //     short.innerHTML = element['Short']
    //     container.appendChild(short)

    //     container.classList.add('article-repo')
    //     root.appendChild(container)
    // }

    for (const i in arr) {
        (() => {
            setTimeout(() => {
                console.log('shit')
            }, 300 * i)
        })(i)
    }
}

export default modules