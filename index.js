// Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
async function getRandomPokemon() {
    const numeroRandom = Math.floor(Math.random() * 20) + 1;
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`);
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        const message = `<p>Error:${error.stack}</p>
        <img src="https://http.cat/images/301.jpg" alt=""></img>`
        document.body.innerHTML = message;
    };
};
getRandomPokemon().then((data) => {
    console.log(data)
});

// // Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName(pokemon) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        return { name, img }
    } catch {
    }

    getImageAndName().then((data) => {
        console.log(data)
    });
}
// // Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar 
// la imagen y el nombre del pokemon en el DOM de la siguiente forma:

{/* <section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
 </section> */}


async function printImageAndName() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}}`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        const message = `<p>Error:${error.stack}</p>
        <img src="https://http.cat/images/301.jpg" alt=""></img>`
        document.body.innerHTML = message;

    };
};
printImageAndName().then((data) => {
    console.log(data)
});

printImageAndName("nombre de pokemon").then(usuario => {
    const imgElement = document.createElement("img");
    imgElement.src = usuario.img;
    imgElement.alt = `Avatar de ${usuario.name}`;

    const nameElement = document.createElement("h3");
    nameElement.textContent = usuario.name;

    const container = document.getElementById("ejercicio 3");
    container.innerHTML = "";
    container.appendChild(imgElement);
    container.appendChild(nameElement);


    console.log(usuario.img)
});

// ejercicio 4  Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio 

async function getRandomDogImage() {
    const perroRandom = Math.floor(Math.random()) + 1;
    try {
        let response = await fetch(`https://dog.ceo/api/breeds/image/${perroRandom}`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        const message = `<p>Error:${error.stack}</p>
        <img src="https://http.cat/images/301.jpg" alt=""></img>`
        document.body.innerHTML = message;

    };
}

