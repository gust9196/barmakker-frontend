

// Find din bar

const findBar = document.querySelector('.findBar button')

findBar.addEventListener('click', function () {
    window.open('findbar.html','_self')
})


///

// Open about ud pop-up

const openAboutUsBtn = document.querySelector(`.aboutUs`)
const closeAboutUsBtn = document.querySelector(`.closePopUpBtn`)
const showAboutUsPopUp = document.querySelector(`.aboutUsPopUp`)
const overlay = document.querySelector(`#overlay`)

openAboutUsBtn.addEventListener
(`click`, function()
    {
        if (showAboutUsPopUp == null) return
        showAboutUsPopUp.classList.add(`active`)
        overlay.classList.add(`active`)
    }
)

closeAboutUsBtn.addEventListener(`click`, function (){
    if (showAboutUsPopUp == null) return
    showAboutUsPopUp.classList.remove(`active`)
    overlay.classList.remove(`active`)
})




