let Pokemon = ['', 'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'ekans', 'arbok', 'pikachu', 'raichu', 'spearow', 'fearow', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff'];

async function renderPokemon() {
    for (let i = 1; i < Pokemon.length; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${Pokemon[i]}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        console.log(responseAsJson);
        document.getElementById('contentContainer').innerHTML +=
            `
        <div onclick="openInfos(${i})" id="pokemonContainer${i}" class="pokemonContainer"> 
            <div> #${i} ${Pokemon[i]} </div>
            <div> <img src="${responseAsJson['sprites']['other']['dream_world']['front_default']}"> </div>
            <div class="type"> ${responseAsJson['types'][0]['type']['name']} </div>
        </div>

        `;


        if (responseAsJson['types'][0]['type']['name'] == 'grass') {
            document.getElementById(`pokemonContainer${i}`).classList.add('bg-green');
        }

        if (responseAsJson['types'][0]['type']['name'] == 'fire') {
            document.getElementById(`pokemonContainer${i}`).classList.add('bg-red');
        }

        if (responseAsJson['types'][0]['type']['name'] == 'water') {
            document.getElementById(`pokemonContainer${i}`).classList.add('bg-blue');
        }

        if (responseAsJson['types'][0]['type']['name'] == 'bug') {
            document.getElementById(`pokemonContainer${i}`).classList.add('bg-lightgreen');
        }

        if (responseAsJson['types'][0]['type']['name'] == 'normal') {
            document.getElementById(`pokemonContainer${i}`).classList.add('bg-lightgray');
        }

        if (responseAsJson['types'][0]['type']['name'] == 'poison') {
            document.getElementById(`pokemonContainer${i}`).classList.add('bg-violet');
        }

        if (responseAsJson['types'][0]['type']['name'] == 'electric') {
            document.getElementById(`pokemonContainer${i}`).classList.add('bg-yellow');
        }


    }



}

async function searchPokemon() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = '';
    for (let i = 0; i < Pokemon.length; i++) {
        let x = Pokemon[i]
        if (x.toLowerCase().includes(search)) {
            let url = `https://pokeapi.co/api/v2/pokemon/${x}`;
            let response = await fetch(url);
            let responseAsJson = await response.json();
            document.getElementById('contentContainer').innerHTML +=
                `
            <div onclick="openInfos(${i})" id="pokemonContainer${i}" class="pokemonContainer"> 
                <div> #${i} ${Pokemon[i]} </div>
                <div> <img src="${responseAsJson['sprites']['other']['dream_world']['front_default']}"> </div>
                <div class="type"> ${responseAsJson['types'][0]['type']['name']} </div>
            `;
            if (responseAsJson['types'][0]['type']['name'] == 'grass') {
                document.getElementById(`pokemonContainer${i}`).classList.add('bg-green');
            }

            if (responseAsJson['types'][0]['type']['name'] == 'fire') {
                document.getElementById(`pokemonContainer${i}`).classList.add('bg-red');
            }

            if (responseAsJson['types'][0]['type']['name'] == 'water') {
                document.getElementById(`pokemonContainer${i}`).classList.add('bg-blue');
            }

            if (responseAsJson['types'][0]['type']['name'] == 'bug') {
                document.getElementById(`pokemonContainer${i}`).classList.add('bg-lightgreen');
            }

            if (responseAsJson['types'][0]['type']['name'] == 'normal') {
                document.getElementById(`pokemonContainer${i}`).classList.add('bg-lightgray');
            }

            if (responseAsJson['types'][0]['type']['name'] == 'poison') {
                document.getElementById(`pokemonContainer${i}`).classList.add('bg-violet');
            }

            if (responseAsJson['types'][0]['type']['name'] == 'electric') {
                document.getElementById(`pokemonContainer${i}`).classList.add('bg-yellow');
            }
        }
    }


}

async function openInfos(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${Pokemon[i]}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    document.getElementById('pokemonInfos').classList.remove('d-none');
    document.getElementById('pokemonInfos').innerHTML +=
        `
            <div id="infosContainer${i}" class="infosContainer"> 
                <div class="infosName"> #${i} ${Pokemon[i]} </div>

                <div class="infosType">  
                <div class="type fw600"> ${responseAsJson['types'][0]['type']['name']} </div>
                </div>

                <div class="infosPicture"> <img src="${responseAsJson['sprites']['other']['dream_world']['front_default']}"> </div>

                <div class="infoBaseStats"> 
                    <div class="headlineBaseStats"> <h2> Base Stats </h2> </div>

                    <div class="baseStats">
                        <div class="baseStat"> <div> ${responseAsJson['stats'][0]['stat']['name']} </div> <div> ${responseAsJson['stats'][0]['base_stat']} </div> </div>
                        <div class="baseStat"> <div> ${responseAsJson['stats'][1]['stat']['name']} </div> <div> ${responseAsJson['stats'][1]['base_stat']} </div> </div>
                        <div class="baseStat"> <div> ${responseAsJson['stats'][2]['stat']['name']} </div> <div> ${responseAsJson['stats'][2]['base_stat']} </div> </div>
                        <div class="baseStat"> <div> ${responseAsJson['stats'][3]['stat']['name']} </div> <div> ${responseAsJson['stats'][3]['base_stat']} </div> </div>
                        <div class="baseStat"> <div> ${responseAsJson['stats'][4]['stat']['name']} </div> <div> ${responseAsJson['stats'][4]['base_stat']} </div> </div>
                        <div class="baseStat"> <div> ${responseAsJson['stats'][5]['stat']['name']} </div> <div> ${responseAsJson['stats'][5]['base_stat']} </div> </div>
                    </div>

                </div>

                <div class="close"> <button onclick="closeInfos(${i})"> Close </button>

            </div>
    `
    if (responseAsJson['types'][0]['type']['name'] == 'grass') {
        document.getElementById(`infosContainer${i}`).classList.add('bg-green');
    }

    if (responseAsJson['types'][0]['type']['name'] == 'fire') {
        document.getElementById(`infosContainer${i}`).classList.add('bg-red');
    }

    if (responseAsJson['types'][0]['type']['name'] == 'water') {
        document.getElementById(`infosContainer${i}`).classList.add('bg-blue');
    }

    if (responseAsJson['types'][0]['type']['name'] == 'bug') {
        document.getElementById(`infosContainer${i}`).classList.add('bg-lightgreen');
    }

    if (responseAsJson['types'][0]['type']['name'] == 'normal') {
        document.getElementById(`infosContainer${i}`).classList.add('bg-lightgray');
    }

    if (responseAsJson['types'][0]['type']['name'] == 'poison') {
        document.getElementById(`infosContainer${i}`).classList.add('bg-violet');
    }

    if (responseAsJson['types'][0]['type']['name'] == 'electric') {
        document.getElementById(`infosContainer${i}`).classList.add('bg-yellow');
    }

}

function closeInfos(i) {
    document.getElementById('pokemonInfos').innerHTML = '';
    document.getElementById(`pokemonInfos`).classList.add('d-none');
}

