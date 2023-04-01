let enemies = [
    {
        name: `phil`,
        img_url: `../images/enemy.png`,
        hp: 100,
        attack: 25
    }
];

let arena = document.getElementById(`arena`);

let selected_poke = Cookies.get(`selected`);

let selected_parse = JSON.parse(selected_poke);

arena.insertAdjacentHTML(`beforeend`, `<article id="pokemon">
<h1>${selected_parse[0].poke_name}</h1>
<h2>${selected_parse[0].hp} HP</h2>
<img class="pokemon_img" src="${selected_parse[0].img_url}" alt="">
<button class="attack" dmg="10">ATTACK</button>
</article>
<article id="enemy">
<h1>${enemies[0].name}</h1>
<h2>${enemies[0].hp} HP</h2>
<img class="enemy_img" src="${enemies[0].img_url}" alt="">
</article>`);





let attack_buttons = document.querySelectorAll(`.attack`);

function attack(poke, enemy) {
    let current_hp = poke[`target`].getAttribute(`hp`);
    let enemy_hp = enemy[`target`].getAttribute(`hp`)
}

for (i = 0; i < attack_buttons.length; i++) {
    attack_buttons[i].addEventListener(`click`, attack);
};
