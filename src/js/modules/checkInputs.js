export function checkPhoneInputs (nameInputs) {
    nameInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '')
        })
    })
}

export function checkNameInputs (nameInputs) {
    nameInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^A-Za-zА-Яа-яёЁ\s]/g, '')
        })
    })
}