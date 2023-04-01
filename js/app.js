let select_html = document.getElementById(`select`);

let selected_pokemon = [];
let pokemon_json = Cookies.get(`selected`)

let pokemen = [
    {
        poke_name: `bulbasaur`,
        img_url: `/images/bulbasaur.png`,
        hp: 100
    },
    {
        poke_name: `charmander`,
        img_url: `/images/charmander.png`,
        hp: 100
    },
    {
        poke_name: `squirtle`,
        img_url: `/images/squirtle.png`,
        hp: 100
    }
];


function choose_pokemon(details) {
    let pokemen = {
        poke_name: `${details[`target`].getAttribute(`poke_name`)}`,
        img_url: `${details[`target`].getAttribute(`img_url`)}`,
        hp: `${details[`target`].getAttribute(`hp`)}`
    }
    selected_pokemon.push(pokemen);
    let pokemon_json = JSON.stringify(selected_pokemon);
    Cookies.set(`selected`, pokemon_json);
};

for (i = 0; i < pokemen.length; i++) {
    select_html.insertAdjacentHTML(`beforeend`,
        `<article id="pokemon">
    <h1>${pokemen[i].poke_name}</h1>
    <img class="pokemon_img" src="${pokemen[i].img_url}" alt="">
    <a href="/pages/battle.html"><button class="clicker" hp="${pokemen[i].hp}" poke_name="${pokemen[i].poke_name}" img_url="${pokemen[i].img_url}">CHOOSE ME</button></a>
  </article>`
    )
};

let all_buttons = document.querySelectorAll(`.clicker`);

for (i = 0; i < all_buttons.length; i++) {
    all_buttons[i].addEventListener(`click`, choose_pokemon);
}
