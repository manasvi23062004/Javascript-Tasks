document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (!searchInput) {
        alert("Please enter a Pokémon name or ID.");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon not found");
            }
            return response.json();
        })
        .then(data => {
            // Populate Pokémon data
            document.getElementById('pokemon-name').innerText = data.name.toUpperCase();
            document.getElementById('pokemon-id').innerText = `#${data.id}`;
            document.getElementById('weight').innerText = `Weight: ${data.weight}`;
            document.getElementById('height').innerText = `Height: ${data.height}`;
            document.getElementById('hp').innerText = `${data.stats[0].base_stat}`;
            document.getElementById('attack').innerText = `${data.stats[1].base_stat}`;
            document.getElementById('defense').innerText = `${data.stats[2].base_stat}`;
            document.getElementById('special-attack').innerText = `${data.stats[3].base_stat}`;
            document.getElementById('special-defense').innerText = `${data.stats[4].base_stat}`;
            document.getElementById('speed').innerText = `${data.stats[5].base_stat}`;
            
            // Populate Pokémon types
            const typesContainer = document.getElementById('types');
            typesContainer.innerHTML = ''; // Clear previous types
            data.types.forEach(typeInfo => {
                const typeElement = document.createElement('div');
                typeElement.innerText = typeInfo.type.name.toUpperCase();
                typesContainer.appendChild(typeElement);
            });

            // Display Pokémon sprite
            document.getElementById('sprite-container').innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}">`;
        })
        .catch(error => {
            alert(error.message);
            clearPokemonInfo();
        });
});

function clearPokemonInfo() {
    document.getElementById('pokemon-name').innerText = "";
    document.getElementById('pokemon-id').innerText = "";
    document.getElementById('weight').innerText = "";
    document.getElementById('height').innerText = "";
    document.getElementById('types').innerText = "";
    document.getElementById('hp').innerText = "";
    document.getElementById('attack').innerText = "";
    document.getElementById('defense').innerText = "";
    document.getElementById('special-attack').innerText = "";
    document.getElementById('special-defense').innerText = "";
    document.getElementById('speed').innerText = "";
    document.getElementById('sprite-container').innerHTML = "";
}
