function repos(arr, title, repolink, demolink, description, image) {

    const pTag = document.createElement('p')
    pTag.classList.add('fade-in')
    pTag.innerHTML = title

    for (let element of arr)
        console.log(element)
}

export default repos