import "./slider"
import modal from '../js/modules/modal'
import { closeModal } from "../js/modules/modal"
import tabs from '../js/modules/tabs'
import form from '../js/modules/form'
import glazingDataCollection from "../js/modules/glazingDataCollection"
import timer from "./modules/timer"
import imgages from "./modules/images"

window.addEventListener('DOMContentLoaded',() => {
    
    'use strict'

    const deadLine = '2025-12-08'
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
    timer('.container1', deadLine)
    imgages()

})