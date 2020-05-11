function modules(arr) {
    const root = document.getElementById('content-section-text')
    for (const element of arr) {
        //Needs to be it's own funtion for the timeout
        const container = document.createElement('div')
        const title = document.createElement('h1')
        const date = document.createElement('p')
        const short = document.createElement('p')

        title.innerHTML = element['Title']
        container.appendChild(title)

        date.innerHTML = element['Date']
        container.appendChild(date)

        short.innerHTML = element['Short']
        container.appendChild(short)

        container.classList.add('article-repo')
        root.appendChild(container)
    }

    for (const el of arr) {
        ((i) => {
            setTimeout(() => {

            }, 300)
        })(i)
    }
}

export default modules