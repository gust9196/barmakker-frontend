fetch('https://barmakker-api.onrender.com/johnny')
    .then(response => response.json())
    .then(function (bars) {
        renderBars(bars);
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

