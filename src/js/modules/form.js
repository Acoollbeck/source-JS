import { checkPhoneInputs, checkNameInputs } from "./checkInputs"
import { closeModal } from "./modal"

export default function form (objInformation) {
    
    const forms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const checkboxes = document.querySelectorAll('.checkbox')
    const select = document.querySelector('select')
    const phoneInputs = document.querySelectorAll('input[name = "user_phone"]')
    const nameInputs = document.querySelectorAll('input[name = "user_name"]')
    const popupCalcBtn  = document.querySelector('.popup_calc_button')
    const popupCalcProfileBtn  = document.querySelector('.popup_calc_profile_button')

    checkPhoneInputs(phoneInputs)
    checkNameInputs(nameInputs)

    const message = {
        load: 'Загрузка...',
        success: 'Спасибо!Мы скоро с вами свяжемся',
        fail: 'Что-то пошло не так'
    }

    async function postData (url, data) {
        try {
            document.querySelector('.status').textContent = message.load
            let response = await fetch(url, {
                method: 'POST',
                body: data
            })

            if(!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`)
            }
            
            return await response.text()
        } catch(error) {
            console.error(`Ошибка отправки данных ${error}`)
            throw error
        }
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            form.appendChild(statusMessage)

            const formData = new FormData(form)

            if(objInformation) {
                for(let key in objInformation) {
                    formData.append(key, objInformation[key])
                }
            }

            postData('assets/server.php', formData)
                .then(response => {
                    console.log(response)
                    statusMessage.textContent = message.success
                    setTimeout(() => closeModal('[data-form]'), 3000)
                })
                .catch((error) => {
                    console.error('Ошибка отправки данных:', error.message)
                    statusMessage.textContent = message.fail
                })
                .finally(() => {
                    inputs.forEach(input => {
                        input.value = ''
                        checkboxes.forEach(checkbox => checkbox.checked = false)
                        if(objInformation) {
                            for(let key in objInformation) {
                                if(key === 'glazingForm' || key === 'type') continue
                                objInformation[key] = ''
                            }
                        }
                        popupCalcBtn.disabled = true
                        popupCalcProfileBtn.disabled = true
                    })
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 6000)
                })

        })
    })

}