//genero una variable para cada campo y lo asigno, via ID
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");
let btnEnviar = document.getElementById("btnEnviar");
//un arreglo donde cargo todos los datos
let informacion =[];

//el "escuchador", se ejecuta cuando se hace clic en el btnEnviar
btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();//evita q se limpie la pagina/actualice
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
})