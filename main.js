const menu = document.querySelector('nav')
const menuButtons = menu.querySelectorAll('div')
let areLevelsFilled = false

// Styles
const jsStyles = {
    levelBar: {
        width: '0%',
        height: '14px',
        backgroundColor: '#003049',
        borderRadius: '10px'
    },
    levelNumSkills: {
        width: '20px',
        height: '20px',
        fontSize: '20px',
        position: 'absolute',
        top: '-3px',
        right: '-30px'
    }
}

// Adding an eventListener for menu buttons and card changins
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parrentNav = document.querySelector('nav')
        const childNav = parrentNav.querySelector('.active')
        const parrentDisplay = document.querySelector('.display')
        const displayItems = parrentDisplay.querySelectorAll('.display-card')

        if (!button.classList.contains('active')) {
            childNav.classList.remove('active')     // remove class 'active' from other el
            button.classList.add('active')          // add class 'active' for new el
        }

        displayItems.forEach(el => {
            if (!el.classList.contains('hidden')) {
                el.classList.add('hidden')
            }
        })

        switch (true) {
            case button.classList.contains('menu__about'):
                parrentDisplay.querySelector('.about').classList.remove('hidden')
                break
            case button.classList.contains('menu__skills'):
                parrentDisplay.querySelector('.skills').classList.remove('hidden')
                if (areLevelsFilled === false) {
                    skillsLoading()
                }
                break
            case button.classList.contains('menu__projects'):
                parrentDisplay.querySelector('.projects').classList.remove('hidden')
                break
            case button.classList.contains('menu__exp'):
                parrentDisplay.querySelector('.exp').classList.remove('hidden')
                break
            case button.classList.contains('menu__edu'):
                parrentDisplay.querySelector('.edu').classList.remove('hidden')
                break
            case button.classList.contains('menu__hobbies'):
                parrentDisplay.querySelector('.hobbies').classList.remove('hidden')
                break
            case button.classList.contains('menu__contacts'):
                parrentDisplay.querySelector('.contacts').classList.remove('hidden')
                break
        }
    })
})

// Filling skills lelel
const skillsLoading = () => {
    // Find elements
    const jsLevel = document.querySelector('.js-level')
    const htmlcssLevel = document.querySelector('.htmlcss-level')
    const sassLevel = document.querySelector('.sass-level')
    const mysqlLevel = document.querySelector('.mysql-level')
    const gitLevel = document.querySelector('.git-level')
    const deLevel = document.querySelector('.de-level')
    const enLevel = document.querySelector('.en-level')
    const uaLevel = document.querySelector('.ua-level')
    const ruLevel = document.querySelector('.ru-level')
    const skillsLevelArray = [jsLevel, htmlcssLevel, sassLevel, mysqlLevel, gitLevel, deLevel, enLevel, uaLevel, ruLevel]

    // Create and add load-bars
    skillsLevelArray.forEach(level => {
        const levelBar = document.createElement('div')
        const levelPercent = document.createElement('div')

        level.appendChild(levelBar)
        level.appendChild(levelPercent)

        Object.assign(levelBar.style, jsStyles.levelBar)
        Object.assign(levelPercent.style, jsStyles.levelNumSkills)

        levelPercent.textContent = '0%'
        let curWidth = 0
        let curPercent = 0

        setInterval(() => {
            if (
                (level === jsLevel && curWidth < 90) ||
                (level === htmlcssLevel && curWidth < 85) ||
                (level === sassLevel && curWidth < 65) ||
                (level === mysqlLevel && curWidth < 45) ||
                (level === gitLevel && curWidth < 50) ||
                (level === deLevel && curWidth < 20) ||
                (level === enLevel && curWidth < 70) ||
                (level === uaLevel && curWidth < 90) ||
                (level === ruLevel && curWidth < 100)

            ) {
                curWidth += 1
                curPercent += 1
                levelBar.style.width = `${curWidth}%`
                levelPercent.textContent = `${curPercent}%`
            }
        }, 20)
    })

    areLevelsFilled = true
}