var URL = "http://192.168.0.13:3000/api/Characters";


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