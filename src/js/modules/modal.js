export function closeModal(modalSelector) {

    const modal = document.querySelectorAll(modalSelector)
    modal.forEach(modal => {
        document.body.style.overflow = ''
        modal.classList.remove('show')
        setTimeout(() => {
            modal.style.display = 'none'
        }, 300)
    })

}

export default function modal() {

    function openModal (triggerSelector, modalSelector, closeModalOverlay = true) {

        const modal = document.querySelector(modalSelector)
        let openedModal = false
        
        if(triggerSelector) {
            const trigger = document.querySelectorAll(triggerSelector)

            trigger.forEach(item => {
    
                item.addEventListener('click', (e) => {
                    if(!item.disabled) {
                        e.preventDefault()
        
                        document.body.style.overflow = 'hidden'
                        modal.style.display = 'block'
                        setTimeout(() => {
                            modal.classList.add('show')
                        }, 10)
                        clearTimeout(modalInterval)
                    }
                })
    
            })
        } else {
            document.body.style.overflow = 'hidden'
            modal.style.display = 'block'
            setTimeout(() => {
                modal.classList.add('show')
            }, 10)
        }

        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') closeModal(modalSelector)
        })

        modal.addEventListener('click', (e) => {
            if((e.currentTarget == e.target && closeModalOverlay) || 
                e.target.closest('.popup_close') || 
                e.target.closest('.popup_calc_button') || 
                e.target.closest('.popup_calc_profile_button')
            ){

                closeModal(modalSelector)
                        
            }
        })
    }

    let modalInterval = setTimeout(() => {
        openModal(null, '.popup')
    }, 60000)

    openModal('.popup_engineer_btn', '.popup_engineer')
    openModal('.phone_link', '.popup')
    openModal('.glazing_price_btn', '.popup_calc', )
    openModal('.popup_calc_button', '.popup_calc_profile', false)
    openModal('.popup_calc_profile_button', '.popup_calc_end', false)

}

