//using a variable to get the div on the page to insert html later on
let select_html = document.getElementById(`select`);
//defining an empty array for selected pokemon
let selected_pokemon = [];
//Getting cookie that has selected pokemon in it
let pokemon_json = Cookies.get(`selected`)
//writing a function that adds selected pokemon to selected pokemon array
function choose_pokemon(details) {
    //defining pokemon info with attributes
    let pokemen = {
        poke_name: `${details[`target`].getAttribute(`poke_name`)}`,
        img_url: `${details[`target`].getAttribute(`img_url`)}`,
        hp: `${details[`target`].getAttribute(`hp`)}`,
        dmg1: `${details[`target`].getAttribute(`dmg1`)}`,
        dmg2: `${details[`target`].getAttribute(`dmg2`)}`,
        dmg3: `${details[`target`].getAttribute(`dmg3`)}`
    }
    //pushing pokemen to selected_pokemen array
    selected_pokemon.push(pokemen);
    //defining a variable to stringify selected pokemon to use to set the cookiue info
    let pokemon_json = JSON.stringify(selected_pokemon);
    //setting cookie to pokemon_json that has all the info of selected pokemon
    Cookies.set(`selected`, pokemon_json);
    //setting user and enemy health to default 100 after selection
    Cookies.set(`user_current_health`, 100);
    Cookies.set(`computer_current_health`, 100)
};
//using a for loop to inject html of pokemon selection on the page
for (i = 0; i < pokemen.length; i++) {
    select_html.insertAdjacentHTML(`beforeend`,
        `<article id="pokemon">
    <h1>${pokemen[i].poke_name}</h1>
    <img class="pokemon_img" src="${pokemen[i].img_url}" alt="">
    <a href="/pages/battle.html"><button class="clicker" hp="${pokemen[i].hp}" poke_name="${pokemen[i].poke_name}" img_url="${pokemen[i].img_url}" dmg1="${pokemen[i].dmg1}" dmg2="${pokemen[i].dmg2}" dmg3="${pokemen[i].dmg3}">CHOOSE ME</button></a>
  </article>`
    )
};
//defining all buttons to class of clicker
let all_buttons = document.querySelectorAll(`.clicker`);
//using a for loop to go through the array of buttons that have class of clicker and add an event listener to each that waits to execute choose_pokemon
for (i = 0; i < all_buttons.length; i++) {
    all_buttons[i].addEventListener(`click`, choose_pokemon);
}
