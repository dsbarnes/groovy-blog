function modules(arr) {
    const root = document.getElementById('content-section-text')
    // for (const element of arr) {
    // setTimeout(() => {
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
    // }, 3000)
    // }
    for (const el of arr) {
        setTimeout(() => console.log(el), 2000)
    }

    for (var i = 0; i < 5; i++) {
        (
            (i) => {
                setTimeout(() => {
                    console.log("hello")
                }, 3000 * i)
            }
        )(i)
    };
}

export default modules