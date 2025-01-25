export default function tabs () {

    function initTabs  (parentSelector, tabsSelector, contentSelector, activeClass) {
        const target = document.querySelector(parentSelector)
        const tabs = document.querySelectorAll(tabsSelector)
        const content = document.querySelectorAll(contentSelector)

        function hideContent() {

            content.forEach(item => {
                item.style.display = 'none'
                item.classList.add('animated', 'fadeIn')
            })

            tabs.forEach(tab => {
                tab.classList.remove(activeClass)
            })

        }

        function showContent(i = 0) {

            content[i].style.display = 'block'
            content[i].classList.add('animated', 'fadeIn')
            tabs[i].classList.add(activeClass)

            
        }
        
        hideContent()
        showContent()
        target.addEventListener('click', (e) => {

            tabs.forEach((tab, i) => {
                if(e.target.closest(tabsSelector) === tab) {
                    hideContent()
                    showContent(i)
                }
            })

        })

    }

    initTabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    initTabs('.decoration_slider', '.no_click', '.internal, .external, .rising, .roof', 'after_click')

}