async function Pokemon(id){

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await res.json();

    console.log(data)
    var root = document.getElementById("root");

    let tipoPoke = "";
    for (let i = 0; i < data.types.length; i++) {
        tipoPoke += `<span>${data.types[i].type.name}</span>`;
    }

    root.innerHTML = `
    <section class="c-detalle">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
        <p>${data.name}</p>
        <p>${data.id}</p>
        <p>Altura: ${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
        <p>HP: ${data.stats[0].base_stat}</p>
        <p>Velocidad: ${data.stats[5].base_stat}</p>
        <p>Ataque: ${data.stats[1].base_stat} Defensa: ${data.stats[2].base_stat}</p>
        <p>Ataque Especial: ${data.stats[3].base_stat} Defensa Especial: ${data.stats[4].base_stat}</p>
    ${tipoPoke}
    </section>
    `;
}

Pokemon(5);