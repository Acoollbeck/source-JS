export default function imgages() {

    const popup = document.createElement('div')
    const popupImg = document.createElement('img')
    const parentSelector = document.querySelector('.works')
    
    popup.classList.add('popup_works', 'fadeIn')
    popupImg.classList.add('fadeIn')
    popup.append(popupImg)
    parentSelector.append(popup)
    
    parentSelector.addEventListener('click', (e) => {

        e.preventDefault()
            if(e.target.closest('.preview')) {

                const imgAtr = e.target.parentElement.getAttribute('href')
                popupImg.setAttribute('src', imgAtr)
                document.querySelector('body').style.overflow = 'hidden'

                popup.style.opacity = '1'
                popup.style.visibility = 'visible'

            }

            if(e.target == popup) {
                popup.style.opacity = '0'
                document.querySelector('body').style.overflow = ''
                popup.style.visibility = 'hidden'
            }
    })
}