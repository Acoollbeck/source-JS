import { getScrollWidth } from "./modal"

export default function imgages() {

    const popup = document.createElement('div')
    const popupImg = document.createElement('img')
    const parentSelector = document.querySelector('.works')
    const scrollWidth = getScrollWidth()
    
    popup.classList.add('popup_works', 'fadeIn')
    popupImg.classList.add('fadeIn')
    popup.append(popupImg)
    parentSelector.append(popup)
    
    parentSelector.addEventListener('click', (e) => {

        e.preventDefault()
            if(e.target.closest('.preview')) {

                const imgAtr = e.target.parentElement.getAttribute('href')
                popupImg.setAttribute('src', imgAtr)
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scrollWidth}px`

                popup.style.opacity = '1'
                popup.style.visibility = 'visible'

            }

            if(e.target == popup) {
                popup.style.opacity = '0'
                document.body.style.overflow = ''
                document.body.style.marginRight = ''
                popup.style.visibility = 'hidden'
            }
    })
}