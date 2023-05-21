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
    },
    projectHover: {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
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

// Projects interface
// Info
const getInfoEl = document.querySelector('.projects__info')
const getAllProjects = document.querySelectorAll('.projects__item')
getInfoEl.textContent = `Found: ${getAllProjects.length} projects`

// Project items
// Find every project
const pss = document.querySelector('#pss')
const wcdv = document.querySelector('#wcdv')
const sc = document.querySelector('#sc')
const law = document.querySelector('#law')
const school = document.querySelector('#school')
const rest = document.querySelector('#rest')
const archi = document.querySelector('#archi')
const typo = document.querySelector('#typo')
const digit = document.querySelector('#digit')

// Add eventListener for each project
getAllProjects.forEach(project => {
    const projectText = project.textContent
    project.addEventListener('mouseenter', () => {
        switch (project) {
            case pss:
                pss.style.backgroundImage = `url('img/projects/pss.jpg')`
                Object.assign(pss.style, jsStyles.projectHover)
                break
            case wcdv:
                wcdv.style.backgroundImage = `url('img/projects/pwcdv.jpg')`
                Object.assign(wcdv.style, jsStyles.projectHover)
                break
            case sc:
                sc.style.backgroundImage = `url('img/projects/psc.jpg')`
                Object.assign(sc.style, jsStyles.projectHover)
                break
            case law:
                law.style.backgroundImage = `url('img/projects/law.jpg')`
                Object.assign(law.style, jsStyles.projectHover)
                break
            case school:
                school.style.backgroundImage = `url('img/projects/gamaun.jpg')`
                Object.assign(school.style, jsStyles.projectHover)
                break
            case rest:
                rest.style.backgroundImage = `url('img/projects/vimarko.jpg')`
                Object.assign(rest.style, jsStyles.projectHover)
                break
            case archi:
                archi.style.backgroundImage = `url('img/projects/monticello.jpg')`
                Object.assign(archi.style, jsStyles.projectHover)
                break
            case typo:
                typo.style.backgroundImage = `url('img/projects/printe.jpg')`
                Object.assign(typo.style, jsStyles.projectHover)
                break
            case digit:
                digit.style.backgroundImage = `url('img/projects/digital.jpg')`
                Object.assign(digit.style, jsStyles.projectHover)
                break
        }

        project.textContent = ''
    })

    project.addEventListener('mouseout', () => {
        project.textContent = projectText
        project.style.backgroundImage = 'none'
    })
})

// Add eventListener for filter buttons
const getKeywords = document.querySelectorAll('.projects__key')
// const allProjectKeys = ['js', 'mp', 'lp', 'sass', 'scss', 'resp', 'sl', 'jq', 'gm']

// Update info
const updateInfo = () => {
    let totalProjects = 0
    getAllProjects.forEach(project => {
            if (project.style.display === 'flex') {
                totalProjects += 1
            }
    })
    getInfoEl.textContent = `Found: ${totalProjects} projects`
}

// Keywords filter function for projects
const filterProjects = () => {
    const addedKeywords = document.querySelectorAll('.added')
    // let totalProjects = 0

    // remove all projects (preparing field)
    getAllProjects.forEach(project => {
        project.style.display = 'none'
    })

    // display needed projects
    addedKeywords.forEach(el => {
        if (el.classList.contains('js-key')) {
            getAllProjects.forEach(project => {
                if (project.classList.contains('js')) {
                    project.style.display = 'flex'
                }
            })
        }
        if (el.classList.contains('mp-key')) {
            getAllProjects.forEach(project => {
                if (project.classList.contains('mp')) {
                    project.style.display = 'flex'
                }
            })
        }
        if (el.classList.contains('lp-key')) {
            getAllProjects.forEach(project => {
                if (project.classList.contains('lp')) {
                    project.style.display = 'flex'
                }
            })
        }
        if (el.classList.contains('scss-key')) {
            getAllProjects.forEach(project => {
                if (project.classList.contains('scss')) {
                    project.style.display = 'flex'
                }
            })
        }
        if (el.classList.contains('resp-key')) {
            getAllProjects.forEach(project => {
                if (project.classList.contains('re')) {
                    project.style.display = 'flex'
                }
            })
        }
        if (el.classList.contains('sl-key')) {
            getAllProjects.forEach(project => {
                if (project.classList.contains('sl')) {
                    project.style.display = 'flex'
                }
            })
        }
        if (el.classList.contains('jq-key')) {
            getAllProjects.forEach(project => {
                if (project.classList.contains('jq')) {
                    project.style.display = 'flex'
                }
            })
        }
        if (el.classList.contains('gm-key')) {
            getAllProjects.forEach(project => {
                if (project.classList.contains('gm')) {
                    project.style.display = 'flex'
                }
            })
        }
    })

    // update info
    updateInfo()
}

// Clear filters function
const removeFilter = () => {    // fix logic ❗❗❗
    // return all projects
    getKeywords.forEach(key => {
        if (!key.classList.contains('added')) {     // if there is no any filters
            getAllProjects.forEach(project => {     // display all projects
                project.style.display = 'flex'
            })
        } else {                                    // if there is a filter
            filterProjects()                        // filter projects
            // getInfoEl.textContent = `Found: ${getAllProjects.length} projects`
        }
    })
}

getKeywords.forEach(el => {
    const curElText = el.textContent

    el.addEventListener('click', () => {
        if (!el.classList.contains('added')) {
            el.style.backgroundColor = '#eae2b7'
            el.classList.add('added')
            el.textContent = curElText.replace('➕', '➖')
            filterProjects()
        } else {
            el.style.backgroundColor = 'transparent'
            el.classList.remove('added')
            el.textContent = curElText
            removeFilter()
            updateInfo()
        }

    })
})