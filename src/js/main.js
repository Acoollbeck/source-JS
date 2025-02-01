import "./slider"
import modal from '../js/modules/modal'
import { closeModal } from "../js/modules/modal"
import tabs from '../js/modules/tabs'
import form from '../js/modules/form'
import glazingDataCollection from "../js/modules/glazingDataCollection"

window.addEventListener('DOMContentLoaded',() => {
    
    'use strict'

    const glazingData = {
        'glazingForm': 1,
        'width': '',
        'height': '',
        'type': 'tree',
        'weather': ''
    }
    
    glazingDataCollection(glazingData)
    modal()
    tabs()
    form(glazingData)

})