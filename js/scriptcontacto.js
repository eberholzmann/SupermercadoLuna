//genero una variable para cada campo y lo asigno, via ID
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");
let btnEnviar = document.getElementById("btnEnviar");
//un arreglo donde cargo todos los datos
let informacion =[];


// Función de validación
function validarCampos() {
    if (nombre.value.trim() === "") {
        alert("El nombre no puede estar vacío");
        return false;
    }
    if (apellido.value.trim() === "") {
        alert("El apellido no puede estar vacío");
        return false;
    }
    if (email.value.trim() === "") {
        alert("El email no puede estar vacío");
        return false;
    }
    if (telefono.value.trim() === "") {
        alert("El teléfono no puede estar vacío");
        return false;
    }
    if (consulta.value.trim() === "") {
        alert("La consulta no puede estar vacía");
        return false;
    }
    return true;
}

//el "escuchador", se ejecuta cuando se hace clic en el btnEnviar
btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();//evita q se limpie la pagina/actualice
    if (validarCampos()) {
        informacion[0]=nombre.value;
        informacion[1]=apellido.value;
        informacion[2]=email.value;
        informacion[3]=telefono.value;
        informacion[4]=consulta.value;
        
        console.log("Nombre: " + informacion[0] + "Apellido: " + informacion[1]);
        
        //meto el arreglo en un objeto "Blob"
        let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});

        //aca uso la libreria q esta linkeada en el html, guarda el blob en un txt
        saveAs(blob,"contacto.txt");

        alert('Su consulta fue enviada');
    }
    
})