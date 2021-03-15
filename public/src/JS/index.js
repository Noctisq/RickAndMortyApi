
var URL = "https://bedurickandmorty.herokuapp.com/api/Characters";


function CharacterPrototype(name, status, species, gender, origin, location) {

    this.name = name;
    this.status = status;
    this.species = species;
    this.gender = gender;
    this.origin = {
        name: origin,
    }
    this.location = {
        name: origin,
    };
}

const createProto = () => {


    const name = document.querySelector("#characterName").value;
    const status = document.querySelector("#characterStatus").value;
    const species = document.querySelector("#characterSpecies").value;
    const gender = document.querySelector("#characterGender").value;
    const origin = document.querySelector("#characterOrigin").value;
    const location = document.querySelector("#characterLocation").value;
    const character = new CharacterPrototype(name, status, species, gender, origin, location)

    return character;
}
const initCharacters = async () => {
    let response = await fetch(URL)
    let stringRows = '';
    const characters = await response.json();
    console.log(characters);

    characters.forEach((character) => {
        const { _id, name, status, species, gender, origin, location } = character;

        stringRows += `<tr>
        <th scope="row">${_id}</th>
        <td>${name}</td>
        <td>${status}</td>
        <td>${species}</td>
        <td>${gender}</td>
        <td>${origin.name}</td>
        <td>${location.name}</td>
        <td><button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning" id="${_id}">editar</button> <button class = "btn btn-danger" id="${_id}">borrar</button></td>
      </tr>`
    });
    document.getElementById("#character").innerHTML = stringRows;
}

initCharacters();

const createCharacter = async (character) => {
    console.log(character);

    const response = await fetch(URL + '/Add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    });
    console.log(response);
    const characterToPrint = await response.json();
    console.log(characterToPrint);
    const parent = document.getElementById("#character");
    const childtoAppend = `<tr>
    <th scope="row">${characterToPrint._id}</th>
    <td>${characterToPrint.name}</td>
    <td>${characterToPrint.status}</td>
    <td>${characterToPrint.species}</td>
    <td>${characterToPrint.gender}</td>
    <td>${characterToPrint.origin.name}</td>
    <td>${characterToPrint.location.name}</td>
    <td><button data-bs-toggle="modal" data-bs-target="#exampleModal" id="${characterToPrint._id}">editar</button> <button id="${characterToPrint._id}">borrar</button></td>
    </tr>`
    parent.append(childtoAppend);
    initCharacters();

}


const createListener = async () => {

    const character = await createProto();
    createCharacter(character);
}

document.getElementById("Add").addEventListener('click', createListener);



document.getElementById("#character").addEventListener('click', async (e) => {
    document.getElementById("Add").removeEventListener('click', createListener);
    if (e.target.innerHTML === "editar") {
        const childs = e.target.parentNode.parentNode.childNodes;

        document.querySelector("#characterName").value = childs[3].innerHTML;
        document.querySelector("#characterStatus").value = childs[5].innerHTML;
        document.querySelector("#characterSpecies").value = childs[7].innerHTML;
        document.querySelector("#characterGender").value = childs[9].innerHTML;
        document.querySelector("#characterOrigin").value = childs[11].innerHTML;
        document.querySelector("#characterLocation").value = childs[13].innerHTML;
        document.getElementById('formsRick').scrollIntoView();

        if (document.getElementById('Add')) {
            document.getElementById('Add').innerHTML = 'Edit Character';
        }

        if (document.getElementById('Add')) {
            document.getElementById('Add').id = 'Edit'
        }


        document.getElementById("Edit").addEventListener('click', async (e) => {
            e.preventDefault();
            console.log("konda");

            const character = createProto();

            const response = await fetch(URL + `/${childs[1].innerHTML}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(character)
            });

            initCharacters();
            document.querySelector("#characterName").value = "";
            document.querySelector("#characterStatus").value = "";
            document.querySelector("#characterSpecies").value = "";
            document.querySelector("#characterGender").value = "";
            document.querySelector("#characterOrigin").value = "";
            document.querySelector("#characterLocation").value = "";
            document.getElementById('Edit').outerHTML = document.getElementById('Edit').outerHTML;
            document.getElementById('Edit').innerHTML = 'Add Character';
            document.getElementById('Edit').id = 'Add';
            document.getElementById("Add").addEventListener('click', createListener);

        });


    } else if (e.target.innerHTML === "borrar") {

        const response = await fetch(URL + `/${e.target.id}`, {
            method: 'delete',
        });

        initCharacters();

    }
});


