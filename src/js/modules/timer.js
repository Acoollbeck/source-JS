export default function timer (parentSelector, deadLine) {

    const FUTURE_DATE = Date.parse(deadLine)

    const container = document.querySelector(parentSelector)
    const days = container.querySelector('#days')
    const hours = container.querySelector('#hours')
    const minutes = container.querySelector('#minutes')
    const seconds = container.querySelector('#seconds')
    
    function getTime() {

        const timeLeft = FUTURE_DATE - new Date().getTime()
        
        const newSeconds = Math.floor(timeLeft / 1000 % 60)
        const newMinutes = Math.floor(timeLeft / (1000 * 60) % 60)
        const newHours = Math.floor(timeLeft / ( 1000 * 60 * 60 ) % 24)
        const newDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24))

        return {
            days: newDays.toString().padStart(2, '0'),
            hours: newHours.toString().padStart(2, '0'),
            minutes: newMinutes.toString().padStart(2, '0'),
            seconds: newSeconds.toString().padStart(2, '0')
        }

    }

    function setTime() {
       
        const time = getTime()

        days.innerHTML = time.days
        hours.innerHTML = time.hours
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds

    }

    function startInterval () {

        setTime()

        let interval = setInterval(() => {
            setTime()
            if(FUTURE_DATE === (new Date().getTime())) {
                clearInterval(interval)
                days.innerHTML = '00'
                hours.innerHTML = '00'
                minutes.innerHTML = '00'
                seconds.innerHTML = '00'
            }
    
        }, 1000)
    }

    startInterval()
}