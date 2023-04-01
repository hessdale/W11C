//defining enemy in an array so I can add others if I want
let enemies = [
    {
        name: `phil`,
        img_url: `../images/enemy.png`,
        hp: 100,
        attack: 25
    }
];
//defing a variable that gets the selected pokemon from the cookie
let selected_poke = Cookies.get(`selected`);
//defining variable that gives injected html an area to go
let arena = document.getElementById(`arena`);
//parsing the info from the selected pokemon cookie
let selected_parse = JSON.parse(selected_poke);
//defining variables to get players current health and enemies current health
let enemy_hp = Cookies.get(`computer_current_health`);
let player_hp = Cookies.get(`user_current_health`);
//ijecting html onto page with selected pokemon info and enemy info
arena.insertAdjacentHTML(`beforeend`, `<article id="pokemon">
<h1>${selected_parse[0].poke_name}</h1>
<h2>${player_hp} HP</h2>
<img class="pokemon_img" src="${selected_parse[0].img_url}" alt="">
<button class="attack" dmg="${selected_parse[0].dmg}" poke_>ATTACK</button>
</article>
<article id="enemy" enemy_hp="${enemies[0].hp}">
<h1>${enemies[0].name}</h1>
<h2>${enemy_hp} HP</h2>
<img class="enemy_img" src="${enemies[0].img_url}" alt="">
</article>`);
//converting enemie into string
let enemy_json = JSON.stringify(enemies[0]);
//setting the cookie of computer selection
Cookies.set(`computer_selection`, enemy_json);
//using querySelectorALL to grab all the attack classes I did it this way so I can add more attack options
let attack_buttons = document.querySelectorAll(`.attack`);
//using a function for attack and the math
function attack(details) {
    //defining poke_dmg as the selected pokemons.dmg
    let poke_dmg = selected_parse[0].dmg;
    //defining enemy_dmg as the selected enemies.attack
    let enemy_dmg = enemies[0].attack;
    //defining enemy_hp by getting cookie computers health
    let enemy_hp = Cookies.get(`computer_current_health`);
    //defining player_hp by getting cookie of users health
    let player_hp = Cookies.get(`user_current_health`);
    //doing math in a variable to get the result of user_hp-enemy_dmg
    let current_poke_hp = player_hp -= enemy_dmg;
    //doing math in a variable to get the result of enemy_hp-enemy_dmg
    let current_enemy_hp = enemy_hp -= poke_dmg;
    //setting cookies of updated health variables
    Cookies.set(`computer_current_health`, current_enemy_hp);
    Cookies.set(`user_current_health`, current_poke_hp);
    //using an if to check and see if user has won or lost
    if (current_enemy_hp <= 1) {
        arena.insertAdjacentHTML(`afterbegin`, `<h1>YOU WIN</h1>`)
    } else if (current_poke_hp <= 1) {
        arena.insertAdjacentHTML(`afterbegin`, `<h1>YOU LOSE</h1>`)
    };
};
//using a for loop to add event listeners to all the attack buttons
for (i = 0; i < attack_buttons.length; i++) {
    attack_buttons[i].addEventListener(`click`, attack);
};

