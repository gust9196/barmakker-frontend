

fetch('https://barmakker-api.onrender.com/johnny')
    .then(response => response.json())
    .then(function (bars) {
        renderBars(bars);
        filterBars (bars);
    });

function renderBars(bars) {
    const ul = document.querySelector('ul#bars');
    console.log(ul);
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        console.log(bar)
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="text"><span> Navn: </span>${bar.bar_name}</p>
            <p class="bar_location"><span> Lokation: </span>${bar.bar_location}</p>
            <p class="bar_city"><span> By: </span>${bar.bar_city}</p>
            <p class="bar_description"><span> Beskrivelse: </span>${bar.bar_description}</p>
            <p class="opening_hours"><span> Åbningstider: </span>${bar.opening_hours}</p>
            <p class="prices"><span> Priser: </span>${bar.prices}</p>
            <p class="games"><span> Spil: </span>${bar.games}</p>
            <p class="billiard"><span> Billard: </span>${bar.billiard}</p>
            <p class="smoking_allowed"><span> Rygning indenfor: </span>${bar.smoking_allowed}</p>
            <p class="happy_hour"><span> Happy Hour: </span>${bar.happy_hour}</p>
            <p class="viser_sport"><span> Viser sport: </span>${bar.viser_sport}</p>
        `;
        ul.appendChild(li);
    }
}

function filterBars (bars) {
    const filterBtn = document.querySelector('HER')

    filterBtn.addEventListener('click', function () {
        const inputElement = document.querySelector('input');
        const minimumPrice = inputElement.value;

        const filteredBars = [];
        for (let i = 0; i < bars.length; i++) {
            const bar = bars[i];
            debugger;
            if(parseFloat(bar.price) > parseFloat(minimumPrice)) {
                filteredBars.push(bar);
            }
        }

        const filteredBarsFilter = bars.filter(bar => parseFloat(bar.price) > parseFloat(minimumPrice));

        renderBars(filteredBarsFilter);
    })
}

/*

function search () {
    for (i = 0; i < antesCanvasGlobal.length; i++) {
        let inputSearch = document.querySelector('#inputSearch').value
        inputSearch = inputSearch.toLowerCase();
        if (antesCanvasGlobal[i].innerHTML.includes(inputSearch)) {
            antesCanvasGlobal[i].style.display = 'none';
        }
        else {
            antesCanvasGlobal[i].style.display = ''
        }
    }
}

 */





//brugeren skal kunne tilføje en bar til databasen

const createBars = {
    bar_name: "Frughan",
    bar_location: "Mulighedsvej",
    bar_city: "København K",
    description: "Den første til at gøre det største"
};
fetch('http://localhost:3000/bars/create', {
    method: "POST",
    body: JSON.stringify(createBars),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => response.json())
    .then(function (isSuccessfulString) {
        console.log(isSuccessfulString);
    });

//Brugeren skal kunne tilføje bar features til deres netop tilføjede bar

const createBarFeatures = {
    fk_bar_id: 18,
    opening_hours: "Man-Søn",
    prices: "Angiv i $ 1-6",
    games: 1,
    billiard: 1,
    smoking_allowed: 1,
    happy_hour: 1,
    viser_sport: 1
};
fetch('http://localhost:3000/bar_features/create', {
    method: "POST",
    body: JSON.stringify(createBarFeatures),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => response.json())
    .then(function (isSuccessfulString) {
        console.log(isSuccessfulString);
    });

// Brugeren skal kunne log-in

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const createNewUser = document.querySelector('#signIn')

createNewUser.addEventListener('click', function () {

   const name = nameInput.value
   const email = emailInput.value

const createUser = {
    user_name: name,
    user_email: email,

};
fetch('http://localhost:3000/user/create', {
    method: "POST",
    body: JSON.stringify(createUser),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => response.json())
    .then(function (isSuccessfulString) {
        console.log(isSuccessfulString);
    });
})









// About us pop up

const openSignInBtn = document.querySelector(`.signIn`)
const closeSignInBtn = document.querySelector(`.closePopUpBtn`)
const showSignInPopUp = document.querySelector(`.signInPopUp`)
const overlay = document.querySelector(`#overlay`)

openSignInBtn.addEventListener
(`click`, function()
    {
        if (showSignInPopUp == null) return
        showSignInPopUp.classList.add(`active`)
        overlay.classList.add(`active`)
    }
)

closeSignInBtn.addEventListener(`click`, function (){
    if (showSignInPopUp == null) return
    showSignInPopUp.classList.remove(`active`)
    overlay.classList.remove(`active`)
})





