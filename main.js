const body = document.querySelector('body')
const display = document.querySelector('.display')
const menu = document.querySelector('nav')
const menuWrapper = document.querySelector('.menu')
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
// Expirience block ↓
const getExpMoreBtn = document.querySelector('.exp__more')
const getExpBlocks = document.querySelectorAll('.exp__block')
let isExpHidden = true
const getExpMainCard = document.querySelector('.exp')
// Education block ↓
const getEduMoreBtn = document.querySelector('.edu__more')
const getEduBlocks = document.querySelectorAll('.edu__block')
let isEduHidden = true
const getEduMainCard = document.querySelector('.edu')
const getEduWrapper = document.querySelector('.edu__wrapper')
const getEduNames = document.querySelectorAll('.edu__place')
const getEduDescs = document.querySelectorAll('.edu__degree')
const getEduYears = document.querySelectorAll('.edu__year')
// Images
let aboutImgsLoaded = false
let skillsImgsLoaded = false
let expImgsLoaded = false
let eduImgsLoaded = false
// Responsive
const laptopSize = window.matchMedia("(max-width: 1024px)")
const largeLaptopSize = window.matchMedia("(max-width: 1360px)")
const llSize = window.matchMedia("(max-width: 1440px)")
const cardsArray = ['about', 'skills', 'exp', 'edu']
const allDisplayCards = document.querySelectorAll('.display-card')
const expPoints = document.querySelectorAll('.exp__list--done')
const mobileLSize = window.matchMedia("(max-width: 425px)")
const tabletSize = window.matchMedia("(max-width: 768px)")

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
    },
    img: {
        width: '200px',
        height: '200px',
        position: 'absolute',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        zIndex: '-1'
    }
}

// Fill img for each section
const loadImg = (section) => {
    const getCurSkillsImgs = document.querySelectorAll('.img-skills')
    const getCurExpImgs = document.querySelectorAll('.img-exp')
    const getCurEduImgs = document.querySelectorAll('.img-edu')
    const getAllImgs = document.querySelectorAll('.img')

    if (section === 'about') {
        loadImgFirst()
    }

    if (section === 'skills' && !skillsImgsLoaded) {
        const fImg = document.createElement('div')
        const sImg = document.createElement('div')
        const tImg = document.createElement('div')
        const foImg = document.createElement('div')
        const fiImg = document.createElement('div')
        const siImg = document.createElement('div')

        fImg.classList.add('img')   // first image
        sImg.classList.add('img')   // second image
        tImg.classList.add('img')   // third image
        foImg.classList.add('img')   // fourth image
        fiImg.classList.add('img')   // fifth image
        siImg.classList.add('img')   // sixth image

        fImg.classList.add('img-skills')   // first image
        sImg.classList.add('img-skills')   // second image
        tImg.classList.add('img-skills')   // third image
        foImg.classList.add('img-skills')   // fourth image
        fiImg.classList.add('img-skills')   // fifth image
        siImg.classList.add('img-skills')   // sixth image

        Object.assign(fImg.style, jsStyles.img)
        Object.assign(sImg.style, jsStyles.img)
        Object.assign(tImg.style, jsStyles.img)
        Object.assign(foImg.style, jsStyles.img)
        Object.assign(fiImg.style, jsStyles.img)
        Object.assign(siImg.style, jsStyles.img)

        display.appendChild(fImg)
        display.appendChild(sImg)
        display.appendChild(tImg)
        display.appendChild(foImg)
        display.appendChild(fiImg)
        display.appendChild(siImg)

        // js
        fImg.style.bottom = '75%'
        fImg.style.left = '25%'
        fImg.textContent = 'JS'
        fImg.style.borderRadius = '50%'
        fImg.style.backgroundColor = 'gold'
        fImg.style.fontSize = '0'      // 40
        fImg.style.display = 'flex'
        fImg.style.justifyContent = 'center'
        fImg.style.alignItems = 'center'
        fImg.style.width = '0'      // 100
        fImg.style.height = '0'     // 100
        fImg.style.transform = 'rotate(350deg)'

        // js
        let fz = 0  // font size
        let w = 0   // width
        let h = 0   // height
        setInterval(() => {
            if (w < 90) {
                w += 1
                h += 1

                fImg.style.width = `${w}px`      // 100
                fImg.style.height = `${h}px`     // 100       
            }

            if (fz < 60) {
                fz += 1
                fImg.style.fontSize = `${fz}px`   // 40
            }
        }, 10)

        // sass
        sImg.style.backgroundImage = 'url("img/skills/sass.png")'
        sImg.style.top = '40%'
        sImg.style.left = '30%'
        sImg.style.width = '100px'
        sImg.style.height = '100px'
        sImg.style.transform = 'rotate(16deg)'

        let sw = 0  // second width
        let sh = 0  // second height
        setInterval(() => {
            if (sw < 65) {
                sw += 1
                sh += 1
                sImg.style.width = `${sw}px`
                sImg.style.height = `${sh}px`
            }
        }, 10)

        // git
        tImg.style.backgroundImage = 'url("img/skills/github.png")'
        tImg.style.bottom = '28%'
        tImg.style.left = '20%'
        tImg.style.width = '100px'
        tImg.style.height = '100px'
        tImg.style.transform = 'rotate(320deg)'

        let tw = 0      // third width
        let th = 0      // third height
        setInterval(() => {
            if (tw < 115) {
                tw += 1
                th += 1
                tImg.style.width = `${tw}px`
                tImg.style.height = `${th}px`
            }
        }, 10);

        // germany
        foImg.style.backgroundImage = 'url("img/skills/switzerland.png")'
        foImg.style.top = '15%'
        foImg.style.right = '10%'
        foImg.style.width = '100px'
        foImg.style.height = '100px'
        foImg.style.transform = 'rotate(16deg)'

        let foW = 0
        let foH = 0
        setInterval(() => {
            if (foW < 100) {
                foW += 1
                foH += 1
                foImg.style.width = `${foW}px`
                foImg.style.height = `${foH}px`
            }
        }, 10);

        // ukraine
        fiImg.style.backgroundImage = 'url("img/skills/germany.png")'
        fiImg.style.top = '35%'
        fiImg.style.right = '5%'
        fiImg.style.width = '100px'
        fiImg.style.height = '100px'
        fiImg.style.transform = 'rotate(340deg)'

        let fiW = 0
        let fiH = 0
        setInterval(() => {
            if (fiW < 100) {
                fiW += 1
                fiH += 1
                fiImg.style.width = `${fiW}px`
                fiImg.style.height = `${fiH}px`
            }
        }, 10);

        // switzerland
        siImg.style.backgroundImage = 'url("img/skills/ukraine.png")'
        siImg.style.top = '60%'
        siImg.style.right = '8%'
        siImg.style.width = '100px'
        siImg.style.height = '100px'
        siImg.style.transform = 'rotate(7deg)'

        let siW = 0
        let siH = 0
        setInterval(() => {
            if (siW < 100) {
                siW += 1
                siH += 1
                siImg.style.width = `${siW}px`
                siImg.style.height = `${siH}px`
            }
        }, 10);

        skillsImgsLoaded = true
    } else if (section === 'skills' && skillsImgsLoaded) {
        getCurSkillsImgs.forEach(img => {
            img.style.display = 'flex'
        })
    }

    if (section === 'exp' && !expImgsLoaded) {
        const fCompanyImg = document.createElement('div')   // first
        const sCompanyImg = document.createElement('div')   // second

        display.appendChild(fCompanyImg)
        display.appendChild(sCompanyImg)

        Object.assign(fCompanyImg.style, jsStyles.img)
        Object.assign(sCompanyImg.style, jsStyles.img)

        fCompanyImg.classList.add('img')
        sCompanyImg.classList.add('img')

        fCompanyImg.classList.add('img-exp')
        sCompanyImg.classList.add('img-exp')

        // FDT
        fCompanyImg.style.backgroundImage = 'url("img/experience/fdt.png")'
        fCompanyImg.style.bottom = '14%'
        fCompanyImg.style.left = '10%'
        fCompanyImg.style.opacity = '0'

        let fcw = 0     // first company width
        let fcop = 0    // first company opacity
        setInterval(() => {
            if (fcw < 300) {
                fcw += 5
                fCompanyImg.style.width = `${fcw}px`
            }

            if (fcop < 1) {
                fcop += 0.05
                fCompanyImg.style.opacity = fcop
            }
        }, 10)

        // JTI
        sCompanyImg.style.backgroundImage = 'url("img/experience/jti.png")'
        sCompanyImg.style.bottom = '32%'
        sCompanyImg.style.right = '5%'
        sCompanyImg.style.opacity = '0'

        let scw = 0     // second company width
        let scop = 0    // second company opacity
        setInterval(() => {
            if (scw < 100) {
                scw += 5
                sCompanyImg.style.width = `${scw}px`
            }

            if (scop < 1) {
                scop += 0.05
                sCompanyImg.style.opacity = scop
            }
        }, 10)

        expImgsLoaded = true
    } else if (section === 'exp' && expImgsLoaded) {
        getCurExpImgs.forEach(img => {
            img.style.display = 'flex'
        })
    }

    if (section === 'edu' && !eduImgsLoaded) {
        const fEduImg = document.createElement('div')   // first image
        const sEduImg = document.createElement('div')   // second image

        fEduImg.classList.add('img')
        sEduImg.classList.add('img')

        fEduImg.classList.add('img-edu')
        sEduImg.classList.add('img-edu')

        display.appendChild(fEduImg)
        display.appendChild(sEduImg)

        Object.assign(fEduImg.style, jsStyles.img)
        Object.assign(sEduImg.style, jsStyles.img)

        // first image PSTU
        fEduImg.style.top = '35%'
        // fEduImg.style.left = '85%'
        fEduImg.style.backgroundImage = 'url("img/edu/pstu.png")'

        let posU = 120
        setInterval(() => {     // move PSTU from right to left
            if (posU > 85) {
                posU -= 1
                fEduImg.style.left = `${posU}%`
            }
        }, 20);

        // second img BA
        sEduImg.style.bottom = '38%'
        sEduImg.style.backgroundImage = 'url("img/edu/beetroot.svg")'

        let posBA = -20
        setInterval(() => {
            if (posBA < 21) {
                posBA += 1
                sEduImg.style.left = `${posBA}%`
            }
        }, 17);

        eduImgsLoaded = true
    } else if (section === 'edu' && eduImgsLoaded) {
        getCurEduImgs.forEach(img => {
            img.style.display = 'flex'
        })
    }
}

// EventListener for main page (about section), when it will be loaded
const loadImgFirst = () => {
    const getCurAboutImages = document.querySelectorAll('.img-about')

    if (!laptopSize.matches) {
        if (aboutImgsLoaded === false) {
            document.addEventListener('DOMContentLoaded', () => {
                // fist
                const firstImg = document.createElement('div')
                firstImg.classList.add('img')
                firstImg.classList.add('img-about')
                display.appendChild(firstImg)
                Object.assign(firstImg.style, jsStyles.img)
                firstImg.style.backgroundImage = 'url("img/about/activism.png")'

                // fist
                let posBot = -40
                let posLeft = -40
                setInterval(() => {
                    if (posBot < 0) {
                        posBot += 1
                        firstImg.style.bottom = `${posBot}%`
                    }

                    if (posLeft < 0) {
                        posLeft += 1
                        firstImg.style.left = `${posLeft}%`
                    }
                }, 40)

                // switzerland
                const secondImg = document.createElement('div')
                secondImg.classList.add('img')
                secondImg.classList.add('img-about')
                display.appendChild(secondImg)
                Object.assign(secondImg.style, jsStyles.img)
                secondImg.style.backgroundImage = 'url("img/about/swiss.png")'
                secondImg.style.bottom = '-5%'
                secondImg.style.right = '1%'
                secondImg.style.opacity = 0
                secondImg.style.zIndex = -1
                secondImg.style.width = '300px'
                secondImg.style.height = '300px'

                // code
                const thirdImg = document.createElement('div')
                thirdImg.classList.add('img')
                thirdImg.classList.add('img-about')
                // thirdImg.classList.add('img-about')
                display.appendChild(thirdImg)
                Object.assign(thirdImg.style, jsStyles.img)
                thirdImg.style.backgroundImage = 'url("img/about/code.png")'
                thirdImg.style.top = '7%'
                thirdImg.style.left = '50%'
                thirdImg.style.opacity = .8
                thirdImg.style.zIndex = -1
                thirdImg.style.width = '100px'
                thirdImg.style.height = '100px'

                // switzerland
                let op = 0
                setInterval(() => {
                    if (op < 1) {
                        op += 0.01
                        secondImg.style.opacity = op
                    } else {
                        secondImg.style.opacity = 1
                    }
                }, 40)

                // code
                let tOp = 0
                setInterval(() => {
                    if (tOp < .8) {
                        tOp += 0.01
                        thirdImg.style.opacity = tOp
                    } else {
                        thirdImg.style.opacity = .8
                    }
                }, 40)
            })
        } else {
            getCurAboutImages.forEach(img => {
                img.style.display = 'flex'
            })
        }
    }

    aboutImgsLoaded = true
}
loadImgFirst()

// Remove images
const hideImgs = () => {
    // For images
    const getCurImages = document.querySelectorAll('.img')
    // clear curent images
    getCurImages.forEach(img => {
        // img.remove()
        // img.style.cssText = 'display: none !important'
        img.style.display = 'none'
    })
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

        hideImgs()

        // when do click on mobile version
        if (mobileLSize.matches) {
            getBurger.click()
        }

        switch (true) {
            case button.classList.contains('menu__about'):
                parrentDisplay.querySelector('.about').classList.remove('hidden')
                if (!laptopSize.matches) {
                    if (aboutImgsLoaded === false) {
                        // hideImgs()
                        loadImg('about')
                    } else {
                        // hideImgs()
                        loadImgFirst()
                    }
                }
                break
            case button.classList.contains('menu__skills'):
                parrentDisplay.querySelector('.skills').classList.remove('hidden')
                // hideImgs()
                if (!laptopSize.matches) {
                    loadImg('skills')
                }
                if (areLevelsFilled === false) {
                    skillsLoading()
                }
                break
            case button.classList.contains('menu__projects'):
                parrentDisplay.querySelector('.projects').classList.remove('hidden')
                hideImgs()
                // loadImg('projects')
                break
            case button.classList.contains('menu__exp'):
                parrentDisplay.querySelector('.exp').classList.remove('hidden')
                if (!laptopSize.matches) {
                    loadImg('exp')
                }
                break
            case button.classList.contains('menu__edu'):
                parrentDisplay.querySelector('.edu').classList.remove('hidden')
                // hideImgs()
                if (!laptopSize.matches) {
                    loadImg('edu')
                }
                break
            case button.classList.contains('menu__hobbies'):
                parrentDisplay.querySelector('.hobbies').classList.remove('hidden')
                // hideImgs()
                // loadImg('hobbies')
                break
            case button.classList.contains('menu__contacts'):
                parrentDisplay.querySelector('.contacts').classList.remove('hidden')
                // loadImg('contacts')
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
    if (areSkillsWrapped) {
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

        if (!areAdditionalLevelsFilled) {
            AdditionalSkillsLoading()
        }

        // Responsive 1440 (Skills opened)
        openedSkillsResp(llSize)
        llSize.addEventListener('change', openedSkillsResp)

        // Responsive 768 (Skills opened)
        osr(tabletSize)
        tabletSize.addEventListener('change', osr)

        // Responsve 425 (Skills opened)
        osm(mobileLSize)
        mobileLSize.addEventListener('change', osm)

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
        getSkillsCard.style.paddingRight = '100px'

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

        // Responsive 1440 (Skills opened)
        openedSkillsResp(llSize)
        llSize.addEventListener('change', openedSkillsResp)

        // Responsive 1024 (Skills opened)
        osl(laptopSize)
        laptopSize.addEventListener('change', osl)

        // Responsive 768 (skills opened)
        osr(tabletSize)
        tabletSize.addEventListener('change', osr)

        // Responsve 425 (Skills opened)
        osm(mobileLSize)
        mobileLSize.addEventListener('change', osm)
    }
})

// Expirience eventListener
getExpMoreBtn.addEventListener('click', () => {
    if (isExpHidden) {
        // Hidden block
        getExpBlocks.forEach(block => {
            if (block.classList.contains('hidden')) {
                block.classList.remove('hidden')
            }
        })

        // Main card
        getExpMainCard.style.width = '90%'

        // Button
        getExpMoreBtn.textContent = 'Less'

        // Var switcher
        isExpHidden = false

        openedExp(laptopSize)
        laptopSize.addEventListener('change', openedExp)
    } else {
        // Additional block (which was hidden)
        getExpBlocks.forEach(block => {
            if (block.classList.contains('exp__block--additional')) {
                block.classList.add('hidden')

                // Var switcher
                isExpHidden = true
            }
        })

        // Main card
        getExpMainCard.style.width = '50%'

        // Button
        getExpMoreBtn.textContent = 'More'
    }
})

// Education evenListener
getEduMoreBtn.addEventListener('click', () => {
    if (isEduHidden === true) {
        // Hidden block
        getEduBlocks.forEach(block => {
            if (block.classList.contains('hidden')) {
                block.classList.remove('hidden')

                // Var switcher
                isEduHidden = false
            }

            block.style.width = '13%'
            // block.style.transition = 'width .2s'
            // make more gap between flex items
            // make less right padding of main card
        })

        // Years
        getEduYears.forEach(year => {
            year.style.fontSize = '15px'
            year.style.marginBottom = '5px'
        })

        // Names or Place
        getEduNames.forEach(name => {
            name.style.fontSize = '20px'
        })

        // Description or degree
        getEduDescs.forEach(desc => {
            desc.style.paddingLeft = '0'
            desc.style.listStyleType = 'none'
        })

        // Main card
        getEduMainCard.style.width = '90%'
        getEduMainCard.style.transition = 'width 1s'

        // Wrapper
        getEduWrapper.style.display = 'flex'
        getEduWrapper.style.justifyContent = 'space-between'

        // Specific edu block
        // Beetroot Academy
        getEduBlocks[3].style.order = '-1'
        // Js challenge
        getEduBlocks[2].style.order = '-3'
        // Master degree at PSTU
        getEduBlocks[0].style.order = '-2'

        // Responsive 1440
        oEduLap(llSize)
        llSize.addEventListener('change', oEduLap)

        // Responsive 425
        oEduMob(mobileLSize)
        mobileLSize.addEventListener('change', oEduMob)

        // Button
        getEduMoreBtn.textContent = 'Less'
    } else {
        // Additional block (which was hidden)
        getEduBlocks.forEach(block => {
            if (block.classList.contains('edu__block--additional')) {
                block.classList.add('hidden')

                block.style.order = '0'
                // Var switcher
                isEduHidden = true
            }
            block.style.width = '100%'
        })

        // Years
        getEduYears.forEach(year => {
            year.style.fontSize = '20px'
            year.style.marginBottom = '0'
        })

        // Names or Place
        getEduNames.forEach(name => {
            name.style.fontSize = '28px'
        })

        // Description or degree
        getEduDescs.forEach(desc => {
            desc.style.paddingLeft = '40px'
            desc.style.listStyleType = 'disc'
        })

        // Main card
        getEduMainCard.style.width = '50%'

        // Wrapper
        getEduWrapper.style.display = 'block'
        getEduWrapper.style.justifyContent = 'none'

        // Button
        getEduMoreBtn.textContent = 'More'

        // Responsive 1440
        oEduLap(llSize)
        llSize.addEventListener('change', oEduLap)

        // Responsive 768
        сEduTab(tabletSize)
        tabletSize.addEventListener('change', oEduLap)

        // Responsive 425
        oEduMob(mobileLSize)
        mobileLSize.addEventListener('change', oEduMob)
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
    const words = getSearch.value.toLowerCase()

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

// Particles bg
window.onload = function () {
    Particles.init({
        selector: '.background',
        connectParticles: true,
        color: ['#eae2b7', '#d62828', '#f77f00', '#fcbf49'],
        maxParticles: 50,
        minDistance: 150,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 80,
                    minDistance: 80
                    // color: '#48F2E3',
                    // connectParticles: false
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 70,
                    minDistance: 50
                    // connectParticles: true
                }
            }, {
                breakpoint: 320,
                options: {
                    maxParticles: 35,
                    minDistance: 75,
                    // disables: particles.js
                }
            }
        ]
    })
}

// Responsive
const disableImgs = (size) => {
    // manage images
    const getAllImages = document.querySelectorAll('.img')
    if (size.matches) {
        getAllImages.forEach(img => {
            img.style.display = 'none'
        })
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            allDisplayCards.forEach(card => {
                if (!card.classList.contains('hidden')) {
                    const curCardArg = card.classList[1]
                    loadImg(curCardArg)
                }
            })
        })
    }
}

// const restoreImg = (size) => {
//     if (size.matches) {
//         document.addEventListener('DOMContentLoaded', () => {
//             allDisplayCards.forEach(card => {
//                 if (!card.classList.contains('hidden')) {
//                     const curCardArg = card.classList[1]
//                     loadImg(curCardArg)
//                 }
//             })
//         })
//     }
// }

const toggleMenuClass = (size) => {
    // Skills (opened)
    // if (size.matches && !areSkillsWrapped) {
    //     getSkillsCard.style.padding = '5px 70px 5px 20px'

    //     getSkillLevels.forEach(level => {
    //         level.style.width = '140px'
    //     })
    // }

    // Exp opened
    // if (size.matches && !isExpHidden) {
    //     // скрываем инфу блоков
    //     // делаем кнопки аккордеонов
    //     // при клике на 1 кнопку, второй должен скрываться
    //     expPoints.forEach(point => {
    //         point.classList.add('hidden')
    //     })

    //     getExpBlocks.forEach(block => {
    //         block.style.border = '1px solid #003049'
    //         block.style.borderRadius = '5px'
    //         block.style.paddingLeft = '20px'
    //         block.style.cursor = 'pointer'
    //         // block.addEventListener('mouseenter', () => {
    //         //     block.style.boxShadow = 'inset 0px -8px 10px -3px #000000'
    //         // })
    //     })
    // } else {
    //     expPoints.forEach(point => {
    //         point.classList.remove('hidden')
    //     })
    // }

    // mobile 425 - menu
    if (size.matches) {
        menu.classList.add('hidden')
    } else {
        menu.classList.remove('hidden')
    }
}

// Responsive 1440 (Skills opened)
const openedSkillsResp = (size) => {
    if (!areSkillsWrapped && size.matches) {
        // console.log(!areSkillsWrapped && size.matches)
        // console.log('openedSkillsResp -> if')

        getSkillLevels.forEach(lvl => {
            // lvl.style.width = '140px'
            lvl.style.width = '140px'
        })
    } else if (areSkillsWrapped && size.matches) {
        // console.log('openedSkillsResp -> else')
        getSkillsCard.style.width = '70%'
    }
}

// Responsive 1024 (Opened Skills Laptop)
const osl = (size) => {
    if (size.matches) {
        getSkillLevels.forEach(lvl => {
            lvl.style.width = '75%'
        })
    }
}

// Responsive 768 (Skills opened)
const osr = (size) => {
    if (size.matches) {
        if (!areSkillsWrapped) {
            console.log('osr -> if')
            console.log(!areSkillsWrapped && size.matches)
            // main card
            getSkillsCard.style.display = 'flex'
            getSkillsCard.style.flexDirection = 'column'
            getSkillsCard.style.height = 'auto'
            getSkillsCard.style.width = '85%'
            getSkillsCard.style.padding = '10px'

            // first skills (hard)
            getSkillsWrapper.style.height = 'auto'
            getSkillsWrapper.style.width = '100%'

            // second skills (langs)
            getLangsBlock.style.width = '100%'
            getLangsBlock.style.height = 'auto'

            // skill levels
            getSkillLevels.forEach(lvl => {
                lvl.style.width = '75%'
            })
        }
    } else {
        if (!areSkillsWrapped) {
            // main card
            getSkillsCard.style.width = '80%'
            getSkillsCard.style.padding = '10px 20px'

            // first skills (hard)
            getSkillsWrapper.style.width = '25%'

            // sec skills (langs)
            getLangsBlock.style.width = '30%'

            getSkillLevels.forEach(lvl => {
                // lvl.style.width = '100%'
                lvl.style.marginRight = '50px'
            })
        }
    }
}

// Responsive 425 (Opened Skills Mobile)
const osm = (size) => {
    if (!areSkillsWrapped) {
        getSkillLevels.forEach(lvl => {
            lvl.style.width = '85%'
        })
    } else {
        getSkillLevels.forEach(lvl => {
            lvl.style.width = '85%'
        })
        getSkillsWrapper.style.width = '100%'
        getLangsBlock.style.width = '100%'

        getSkillsCard.style.padding = '10px'
        getSkillsCard.style.width = '85%'
    }
}

// Responsive 1440 (Opened Edu Laptop)
const oEduLap = (size) => {
    if (size.matches) {
        if (!isEduHidden) {
            // main card
            getEduWrapper.style.flexDirection = 'column'
            getEduMainCard.style.margin = '10px'

            // edu blocks
            getEduBlocks.forEach(block => {
                block.style.width = '100%'
            })

            // general
            body.style.overflowY = 'scroll'
            body.style.height = 'auto'
        } else {
            // main card
            getEduMainCard.style.margin = '0 auto'
            getEduMainCard.style.width = '50%'

            // general
            body.style.overflowY = 'hidden'
            body.style.height = '100vh'
        }
    }
}

// Responsive 425 (Opened Edu Mobile)
const oEduMob = (size) => {
    if (size.matches) {
        if (!isEduHidden) {
            // Main card
            getEduMainCard.style.marginTop = '100px'

            // years
            getEduYears.forEach(year => {
                year.style.fontSize = '20px'
            })

            // names or places
            getEduNames.forEach(name => {
                name.style.fontSize = '20px'
            })

            // descs or degrees
            getEduDescs.forEach(desc => {
                desc.style.fontSize = '20px'
            })
        } else {
            // main card
            getEduMainCard.style.width = '100%'
            getEduMainCard.style.marginTop = '100px'

            // years
            getEduYears.forEach(year => {
                year.style.fontSize = '24px'
            })

            // names or places
            getEduNames.forEach(name => {
                name.style.fontSize = '28px'
            })

            // descs or degrees
            getEduDescs.forEach(desc => {
                desc.style.paddingLeft = '0px'
                desc.style.fontSize = '22px'
            })
        }
    }
}

// Responsive 768 (Opened Edu Tablet)
const сEduTab = (size) => {
    if (size.matches) {
        if (isEduHidden) {
            // Main card
            getEduMainCard.style.width = '70%'
            getEduMainCard.style.marginTop = '10px'

            // Degree
            getEduDescs.style.paddingLeft = '0'
        }
    }
}

// Responsive 1024 (Opened Exp Laptop)
const openedExp = (size) => {
    if (size.matches) {
        body.style.overflowY = 'scroll'
        body.style.height = 'auto'
        getExpMainCard.style.margin = '10px'
    }
}


disableImgs(tabletSize)
toggleMenuClass(mobileLSize)
// restoreImg(notTabletSize)
mobileLSize.addEventListener('change', toggleMenuClass)
tabletSize.addEventListener('change', disableImgs)
// notTabletSize.addEventListener('change', restoreImg)

// New Responsive
const getBurger = document.querySelector('.burger-menu')
const getBurgerMid = document.querySelector('.burger-menu__line--middle')
const getBurgerTopL = document.querySelector('.burger-menu__line--top-l')
const getBurgerTopR = document.querySelector('.burger-menu__line--top-r')
const getBurgerBotL = document.querySelector('.burger-menu__line--bottom-l')
const getBurgerBotR = document.querySelector('.burger-menu__line--bottom-r')

getBurger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        // menu buttons
        menu.classList.remove('hidden')
        menuWrapper.style.left = '0'

        // card
        display.style.filter = 'blur(6px)'

        // wrapper
        getBurger.style.height = '45px'

        // lines
        getBurgerMid.style.display = 'none'

        getBurgerTopL.style.transform = 'rotate(45deg)'
        getBurgerTopR.style.transform = 'rotate(315deg)'
        getBurgerBotL.style.transform = 'rotate(315deg)'
        getBurgerBotR.style.transform = 'rotate(45deg)'
    } else {
        menuWrapper.style.left = '-270px'
        menu.classList.add('hidden')

        // menu.style.display = 'none'

        // card
        display.style.filter = 'none'

        // wrapper
        getBurger.style.height = '60px'

        // lines
        getBurgerMid.style.display = 'flex'

        getBurgerTopL.style.transform = 'rotate(0deg)'
        getBurgerTopR.style.transform = 'rotate(0deg)'
        getBurgerBotL.style.transform = 'rotate(0deg)'
        getBurgerBotR.style.transform = 'rotate(0deg)'
    }
})