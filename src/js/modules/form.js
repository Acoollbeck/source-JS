export default function form () {
    
    const forms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const phoneInputs = document.querySelectorAll('input[name = "user_phone"]')
    const nameInputs = document.querySelectorAll('input[name = "user_name"]')

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '')
        })
    })

    nameInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-яА-ЯA-Za-zёЁ\s]/g, '')
        })
    })

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
            postData('assets/server.php', formData)
                .then(response => {
                    console.log(response)
                    statusMessage.textContent = message.success
                })
                .catch((error) => {
                    console.error('Ошибка отправки данных:', error.message)
                    statusMessage.textContent = message.fail
                })
                .finally(() => {
                    inputs.forEach(input => {
                        input.value = ''
                    })
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 6000)
                })

        })
    })

}