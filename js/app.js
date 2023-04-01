let select_html = document.getElementById(`select`);

let selected_pokemon = [];
let pokemon_json = Cookies.get(`selected`)



function choose_pokemon(details) {
    let pokemen = {
        poke_name: `${details[`target`].getAttribute(`poke_name`)}`,
        img_url: `${details[`target`].getAttribute(`img_url`)}`,
        hp: `${details[`target`].getAttribute(`hp`)}`,
        dmg: `${details[`target`].getAttribute(`dmg`)}`
    }
    selected_pokemon.push(pokemen);
    let pokemon_json = JSON.stringify(selected_pokemon);
    Cookies.set(`selected`, pokemon_json);
    Cookies.set(`user_current_health`, 100);
    Cookies.set(`computer_current_health`, 100)
};

for (i = 0; i < pokemen.length; i++) {
    select_html.insertAdjacentHTML(`beforeend`,
        `<article id="pokemon">
    <h1>${pokemen[i].poke_name}</h1>
    <img class="pokemon_img" src="${pokemen[i].img_url}" alt="">
    <a href="/pages/battle.html"><button class="clicker" hp="${pokemen[i].hp}" poke_name="${pokemen[i].poke_name}" img_url="${pokemen[i].img_url}" dmg="${pokemen[i].dmg}">CHOOSE ME</button></a>
  </article>`
    )
};

let all_buttons = document.querySelectorAll(`.clicker`);

for (i = 0; i < all_buttons.length; i++) {
    all_buttons[i].addEventListener(`click`, choose_pokemon);
}
