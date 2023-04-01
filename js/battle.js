let enemies = [
    {
        name: `phil`,
        img_url: `../images/enemy.png`,
        hp: 100,
        attack: 25
    }
];
let selected_poke = Cookies.get(`selected`);
let arena = document.getElementById(`arena`);
let selected_parse = JSON.parse(selected_poke);




arena.insertAdjacentHTML(`beforeend`, `<article id="pokemon">
<h1>${selected_parse[0].poke_name}</h1>
<h2>${selected_parse[0].hp} HP</h2>
<img class="pokemon_img" src="${selected_parse[0].img_url}" alt="">
<button class="attack" dmg="${selected_parse[0].dmg}" poke_>ATTACK</button>
</article>
<article id="enemy" enemy_hp="${enemies[0].hp}">
<h1>${enemies[0].name}</h1>
<h2>${enemies[0].hp} HP</h2>
<img class="enemy_img" src="${enemies[0].img_url}" alt="">
</article>`);

let enemy_json = JSON.stringify(enemies[0])

Cookies.set(`computer_selection`, enemy_json);



let attack_buttons = document.querySelectorAll(`.attack`);

function attack(details) {

    let poke_dmg = selected_parse[0].dmg
    let enemy_dmg = enemies[0].attack;
    let enemy_hp = Cookies.get(`computer_current_health`);
    let player_hp = Cookies.get(`user_current_health`);
    let current_poke_hp = player_hp -= enemy_dmg;
    let current_enemy_hp = enemy_hp -= poke_dmg;
    Cookies.set(`computer_current_health`, current_enemy_hp);
    Cookies.set(`user_current_health`, current_poke_hp);

    if (current_enemy_hp > 1) {
        arena.insertAdjacentHTML(`afterbegin`, `<h1>YOU WIN</h1>`)
    } else if (current_poke_hp > 1) {
        arena.insertAdjacentHTML(`afterbegin`, `<h1>YOU LOSE</h1>`)
    }


}

for (i = 0; i < attack_buttons.length; i++) {
    attack_buttons[i].addEventListener(`click`, attack);
};

