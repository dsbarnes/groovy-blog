function repos(arr, title, repolink, demolink, description, image) {

    const titleTag = document.createElement('p')
    titleTag.classList.add('fade-in')
    titleTag.innerHTML = title


    for (let element of arr)
        console.log(element)
}

export default repos