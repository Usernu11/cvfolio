const menu = document.querySelector('nav')
const menuButtons = menu.querySelectorAll('div')
let areLevelsFilled = false
// Info ↓
const getInfoEl = document.querySelector('.projects__info')
const getAllProjects = document.querySelectorAll('.projects__item')
getInfoEl.textContent = `Found: ${getAllProjects.length} projects`
// Project items ↓
const pss = document.querySelector('#pss')
const wcdv = document.querySelector('#wcdv')
const sc = document.querySelector('#sc')
const law = document.querySelector('#law')
const school = document.querySelector('#school')
const rest = document.querySelector('#rest')
const archi = document.querySelector('#archi')
const typo = document.querySelector('#typo')
const digit = document.querySelector('#digit')
// Filter buttons ↓
const getKeywords = document.querySelectorAll('.projects__key')
// Search projects input ↓
const getSearch = document.querySelector('.projects__input')
// Clear filter button ↓
const clearFiltersButton = document.querySelector('.projects__clear')
let isKeyAdded = false
// For skills button
const getSkillsMoreBtn = document.querySelector('.skills__more')
const getAdditionaNamesSkill = document.querySelectorAll('.skills__item--additional')
const getAdditionalLevelsSkill = document.querySelectorAll('.skills__level--additional')
let areSkillsWrapped = true
const getSkillsCard = document.querySelector('.skills')
const getSkillsWrapper = document.querySelector('.skills__first')
const getSkillLevels = document.querySelectorAll('.skills__level')
const getCsLevels = document.querySelectorAll('.skills__level--cs')
let areAdditionalLevelsFilled = false
const getLangsBlock = document.querySelector('.skills__sec')
let isBtnClicked = false

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

// Filling skills level
const skillsLoading = () => {
    // Find elements
    // Skills
    const jsLevel = document.querySelector('.js-level')
    const htmlcssLevel = document.querySelector('.htmlcss-level')
    const sassLevel = document.querySelector('.sass-level')
    const mysqlLevel = document.querySelector('.mysql-level')
    const gitLevel = document.querySelector('.git-level')
    const jqLevel = document.querySelector('.jq-level')
    const phLevel = document.querySelector('.ph-level')
    const phpLevel = document.querySelector('.php-level')
    const ftpLevel = document.querySelector('.ftp-level')
    const csLevel = document.querySelector('.skills__level--cs')

    // Langs
    const deLevel = document.querySelector('.de-level')
    const enLevel = document.querySelector('.en-level')
    const uaLevel = document.querySelector('.ua-level')
    const ruLevel = document.querySelector('.ru-level')
    const skillsLevelArray = [jsLevel, htmlcssLevel, sassLevel, mysqlLevel, gitLevel, deLevel, enLevel, uaLevel, ruLevel]
    const additionalSkillsArray = [jqLevel, phLevel, phpLevel, ftpLevel, csLevel]

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
                (level === gitLevel && curWidth < 70) ||
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

// Filling additional skills levels
const AdditionalSkillsLoading = () => {
    // Find elements
    // Additional Skills
    const jqLevel = document.querySelector('.jq-level')
    const phLevel = document.querySelector('.ph-level')
    const phpLevel = document.querySelector('.php-level')
    const ftpLevel = document.querySelector('.ftp-level')

    const additionalSkillsArray = [jqLevel, phLevel, phpLevel, ftpLevel]

    // Create and add load-bars
    if (areAdditionalLevelsFilled === false) {
        additionalSkillsArray.forEach(lvl => {
            const levelBar = document.createElement('div')
            const levelPercent = document.createElement('div')

            lvl.appendChild(levelBar)
            lvl.appendChild(levelPercent)

            Object.assign(levelBar.style, jsStyles.levelBar)
            Object.assign(levelPercent.style, jsStyles.levelNumSkills)

            levelPercent.textContent = '0%'
            let curWidth = 0
            let curPercent = 0

            setInterval(() => {
                if (
                    (lvl === jqLevel && curWidth < 60) ||
                    (lvl === phLevel && curWidth < 55) ||
                    (lvl === phpLevel && curWidth < 25) ||
                    (lvl === ftpLevel && curWidth < 35)

                ) {
                    curWidth += 1
                    curPercent += 1
                    levelBar.style.width = `${curWidth}%`
                    levelPercent.textContent = `${curPercent}%`
                }
            }, 50)
        })
    }
}

// Skills more button
getSkillsMoreBtn.addEventListener('click', () => {
    if (areSkillsWrapped === true) {
        getAdditionaNamesSkill.forEach(name => {
            name.style.display = 'block'
        })
        getAdditionalLevelsSkill.forEach(level => {
            level.style.display = 'block'
        })

        // Main Skills Card
        getSkillsCard.style.width = '65%'
        getSkillsCard.style.height = '500px'
        getSkillsCard.style.paddingRight = '100px'

        // SKills
        getSkillsWrapper.style.width = '60%'
        getSkillsWrapper.style.height = '440px'
        getSkillsWrapper.style.display = 'flex'
        getSkillsWrapper.style.flexDirection = 'column'
        getSkillsWrapper.style.justifyContent = 'flex-end'
        getSkillsWrapper.style.alignItems = 'flex-start'
        getSkillsWrapper.style.flexWrap = 'wrap'

        // Langs
        getLangsBlock.style.width = '25%'
        getLangsBlock.style.display = 'flex'
        getLangsBlock.style.flexDirection = 'column'
        // getLangsBlock.style.alignItems = 'flex-end'

        // Levels
        getSkillLevels.forEach(level => {
            level.style.width = '200px'
            level.style.marginRight = '70px'
        })

        // Levels (special)
        getCsLevels.forEach(csLevel => {
            csLevel.style.border = '1px solid #d62828'
        })

        // Button
        getSkillsMoreBtn.textContent = 'Less'
        getSkillsMoreBtn.style.width = '50%'
        getSkillsMoreBtn.style.margin = '0 auto'

        // Var switcher
        areSkillsWrapped = false

        if (areAdditionalLevelsFilled === false) {
            AdditionalSkillsLoading()
        }

        areAdditionalLevelsFilled = true
        isBtnClicked = true
    } else {
        // Skills name
        getAdditionaNamesSkill.forEach(name => {
            name.style.display = 'none'
        })
        // Skills name (additional)
        getAdditionalLevelsSkill.forEach(level => {
            level.style.display = 'none'
        })

        // Skills Main Card
        getSkillsCard.style.width = '40%'
        getSkillsCard.style.height = 'auto'
        getSkillsCard.style.paddingRight = '60px'

        // Skills
        getSkillsWrapper.style.width = '40%'
        getSkillsWrapper.style.height = 'auto'
        getSkillsWrapper.style.display = 'block'

        // Levels
        getSkillLevels.forEach(level => {
            level.style.width = '100%'
        })

        // Langs
        getLangsBlock.style.width = '40%'
        getLangsBlock.style.display = 'flex'
        getLangsBlock.style.flexDirection = 'column'

        // Button
        getSkillsMoreBtn.textContent = 'More'
        getSkillsMoreBtn.style.width = '100%'
        getSkillsMoreBtn.style.margin = '20px 0 0 0'

        // Var switcher
        areSkillsWrapped = true
    }
})

// Projects interface
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

// Remove all projects before some genereting
const clearProjectsField = () => {
    getAllProjects.forEach(project => {
        project.style.display = 'none'
    })
}

// Keywords filter function for projects
const filterProjects = () => {
    const addedKeywords = document.querySelectorAll('.added')

    // remove all projects (preparing field)
    clearProjectsField()

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
    updateInfo()
}

// Hide keywords
const hideKeywords = () => {
    getKeywords.forEach(keyword => {
        keyword.style.display = 'none'
    })
}

// Show keywords
const showKeywords = () => {
    getKeywords.forEach(keyword => {
        keyword.style.display = 'flex'
    })
}

// Retunr all projects
const showAllProjects = () => {
    getAllProjects.forEach(project => {
        project.style.display = 'flex'
    })
}

// Clear filters function
const removeFilter = () => {
    // return all projects
    getKeywords.forEach(key => {
        if (!key.classList.contains('added')) {     // if there is no any filters
            showKeywords()
            showAllProjects()
        }
    })
}

// Keyword panel
getKeywords.forEach(el => {
    const curElText = el.textContent

    el.addEventListener('click', () => {
        if (!el.classList.contains('added')) {
            hideKeywords()
            el.style.backgroundColor = '#eae2b7'
            el.classList.add('added')
            el.textContent = curElText.replace('➕', '➖')
            el.style.display = 'flex'
            filterProjects()
            isKeyAdded = true
            getSearch.disabled = true
            getSearch.placeholder = 'Keyword is active'
        } else {
            el.style.backgroundColor = 'transparent'
            el.classList.remove('added')
            el.textContent = curElText
            removeFilter()
            updateInfo()
            isKeyAdded = false
            getSearch.disabled = false
            getSearch.placeholder = 'Search ...'
        }

    })
})

// A function which generates projects by search bar (input)
const generateProjects = (wordPattern) => {

    if (isKeyAdded === false) {     // if there is no keywords
        getAllProjects.forEach(project => {     // display projects like normal
            if (project.textContent.toLowerCase().match(wordPattern)) {     // using wordPattern for all projects
                project.style.display = 'flex'      // display projects
            }
        })
    }

    if (isKeyAdded === true) {      // if there is a keywords
        getAllProjects.forEach(pr => {      // check all projects
            if (
                pr.style.display === 'flex' &&      // if a project display
                !pr.textContent.toLocaleLowerCase().match(wordPattern)      // and wordPattern isn't same
            ) {
                pr.style.display = 'none'       // hide the project
            }
        })
    }

    updateInfo()
}

// Adding eventListemer for search bar
getSearch.addEventListener('input', key => {
    const words = getSearch.value

    clearProjectsField()
    generateProjects(words)
    // console.log(words)
})

// EventListener for filters button
clearFiltersButton.addEventListener('click', () => {
    // CLear search bar
    getSearch.value = ''
    showAllProjects()

    // Clear filters
    removeFilter()
    getKeywords.forEach(el => {
        const text = el.textContent
        el.textContent = text.replace('➖', '➕')
        el.style.backgroundColor = 'transparent'
    })

    // Update info
    updateInfo()
})