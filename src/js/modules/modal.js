export default function modal() {

    function openModal (triggerSelector, modalSelector) {

        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)


        function closeModal() {

            document.body.style.overflow = ''
            modal.classList.remove('show')
            setTimeout(() => {
                modal.style.display = 'none'
            }, 300)

        }

        trigger.forEach(item => {

            item.addEventListener('click', (e) => {
                if(!item.disabled) {
                    e.preventDefault()
    
                    document.body.style.overflow = 'hidden'
                    modal.style.display = 'block'
                    setTimeout(() => {
                        modal.classList.add('show')
                    }, 10)

                }
            })

        })

        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') closeModal()
        })

        modal.addEventListener('click', (e) => {
            if(e.currentTarget == e.target || e.target.closest('.popup_close') || e.target.closest('.popup_calc_button') || e.target.closest('.popup_calc_profile_button') || e.target.closest('.popup_calc_btn-form')) {
                
                    closeModal()
                
            }
        })
    }

    openModal('.popup_engineer_btn', '.popup_engineer')
    openModal('.phone_link', '.popup')
    openModal('.popup_calc_button' , '.popup_calc_profile ')
    openModal('.glazing_price_btn' , '.popup_calc')
    openModal('.popup_calc_profile_button', '.popup_calc_end')

}