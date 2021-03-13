
var URL = "http://192.168.0.10:3000/api/Characters";


(async function () {
    let response = await fetch(URL)
    let stringRows = '';
    const characters = await response.json();
    console.log(characters);

    characters.forEach((character) => {
        const { id, name, status, species, gender, origin, location } = character;

        stringRows += `<tr>
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${status}</td>
        <td>${species}</td>
        <td>${gender}</td>
        <td>${origin.name}</td>
        <td>${location.name}</td>

      </tr>`
    });
    document.getElementById("#character").innerHTML = stringRows;
})();


const createCharacter = async (character) => {
    console.log(character);
    const createdCharacter = await fetch(URL + '/Add', {
        method: 'POST',
        body: character
    });


    const parent = document.getElementById("#character");
    const childtoAppend = `<tr>
    <th scope="row">${id}</th>
    <td>${createdCharacter.name}</td>
    <td>${createdCharacter.status}</td>
    <td>${createdCharacter.species}</td>
    <td>${createdCharacter.gender}</td>
    <td>${createdCharacter.origin.name}</td>
    <td>${createdCharacter.location.name}</td>

  </tr>`
    parent.append(childtoAppend);

}


document.getElementById("Add").addEventListener('click', (e) => {
    e.preventDefault();
    let formElement = document.querySelector("#formsRick");
    console.log(formElement);
    let formData = new FormData(formElement);

    createCharacter(formData);
});