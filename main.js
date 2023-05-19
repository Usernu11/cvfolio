const menuButtons = document.querySelectorAll('.menu-button')

// Adding an eventListener for menu buttons
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('active')) {
            button.classList.add('active')
            // remove old active class
        } else {
            console.log(true)
        }
    })
})
