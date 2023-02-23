let index = 0

previousButton.addEventListener('click', () => {
    console.log('button was clicked')
    const reviewElements = document.querySelectorAll('.review')

    if (index <= 0) {
        index = reviewElements.length - 1
    } else {
        index--
    }
    console.log('index is', index)

    reviewElements.forEach((reviewElement) => {
        reviewElement.style.display = 'none'
    })

    reviewElements[index].style.display = 'block'
})