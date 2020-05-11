function modules(arr) {
    const root = document.getElementById('content-section-text')
    for (const element of arr) {
        const container = document.createElement('div')
        const title = document.createElement('h1')
        const date = document.createElement('p')
        const short = document.createElement('p')

        container.classList.add('article')

        title.innerHTML = arr['Title']
        container.appendChild(title)

        date.innerHTML = arr['Date']
        container.appendChild(date)

        short.innerHTML = arr['Short']
        container.appendChild(short)

        root.appendChild(container)
    }
}

export default modules