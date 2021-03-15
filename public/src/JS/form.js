var URL = "https://bedurickandmorty.herokuapp.com/api/Users";


document.getElementById("login").addEventListener('click', async () => {
    const user = document.querySelector("#user").value;
    const pwd = document.querySelector("#pass").value;
    const response = await fetch(URL + '/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            password: pwd
        })
    });

    console.log(response);
    if (response.status === 200) {
        window.location.href = "./index.html";

    } else {
        alert("Contraseña o Usuario Incorrectos");
    }

});



document.getElementById("register").addEventListener('click', async () => {
    const user = document.querySelector("#email2").value;
    const pwd = document.querySelector("#passReg").value;
    const pwd2 = document.querySelector("#passReg2").value;
    console.log(user);
    if (pwd !== pwd2) {
        alert("las contraseñas no coinciden");
        return;
    }
    const response = await fetch(URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            password: pwd
        })
    });

    document.getElementById('registerBoton').innerHTML = '<p> ya puedes iniciar sesion</p>'

});