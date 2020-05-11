function modules(arr) {
    const root = document.getElementById('content-section-text')

    // Conceptually this is the same thing as
    // handleElementSection in articles.js
    // however, it builds two different components.
    const handleElementSection = (element) => {
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

    for (const i in arr) {
        // setTimeout is non-blocking
        // IIFE to prevent setTimeout from stacking
        // and executing all at once:
        (() => {
            const element = arr[i]
            setTimeout(() => {
                handleElementSection(element)
                // Not for(of) b/c i is necessary here:
            }, 80 * i)
        })(i)
    }
}

export default modules