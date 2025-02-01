import { checkPhoneInputs } from "./checkInputs"

export default function glazingDataCollection (data) {

    const glazingForm = document.querySelectorAll('.balcon_icons_img')
    const glazingWidth = document.querySelectorAll('#width')
    const glazingHeight = document.querySelectorAll('#height')
    const glazingType = document.querySelectorAll('#view_type')
    const glazingWeather = document.querySelectorAll('.checkbox')
    const popupCalcBtn  = document.querySelector('.popup_calc_button')
    const popupCalcProfileBtn  = document.querySelector('.popup_calc_profile_button')

    popupCalcBtn.disabled = true
    popupCalcProfileBtn.disabled = true

    function checkWidthHeight () {
        const width = document.querySelector('#width').value
        const height = document.querySelector('#height').value

        popupCalcBtn.disabled = !(width && height)
    }

    checkWidthHeight()
    checkPhoneInputs(glazingHeight)
    checkPhoneInputs(glazingWidth)

    function getGlazingData (event, glazing, dataName) {
        glazing.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {

                    case 'SPAN': 
                        data[dataName] = i + 1
                        console.log(data)
                        break

                    case 'INPUT':
                        checkWidthHeight()
                        if(item.getAttribute('type') === 'text') {
                            data[dataName] = item.value
                            console.log(data)
                        } else {
                            glazing.forEach(checkbox => checkbox.checked = false)
                            item.checked = true
                            popupCalcProfileBtn.disabled = false
                            i === 0 ? data[dataName] = 'Холодное' : data[dataName] =  'Теплое'
                            console.log(i)
                            console.log(data)
                        }
                        break

                    case 'SELECT':
                        data[dataName] = item.value 
                        console.log(data)
                        break

                }
            })
        })
    }

    getGlazingData('click', glazingForm, 'glazingForm')
    getGlazingData('input', glazingWidth, 'width')
    getGlazingData('input', glazingHeight, 'height')
    getGlazingData('change', glazingType, 'type')
    getGlazingData('change', glazingWeather, 'weather')
    
}