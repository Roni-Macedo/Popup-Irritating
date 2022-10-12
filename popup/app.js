const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {

    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const getClass = event.target.className
    const popupClassName = ['popup-close', 'popup-link']
    const popupCloses = popupClassName.some(popupClose => popupClose === getClass)

    if (popupCloses) {

        popup.style.display = 'none'
    }
})