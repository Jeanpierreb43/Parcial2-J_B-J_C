
document.querySelector('#botonenviar').addEventListener('click', guardarpersona);
imprimirtabla();

function guardarpersona(){
    
    var nombre = document.querySelector("#nombre").value;
    var snombre = document.querySelector("#snombre").value;
    var apellido = document.querySelector("#apellido").value;
    var sapellido = document.querySelector("#sapellido").value;
    var email = document.querySelector("#correo").value;
    var pid = document.querySelector("#identificacion").value;
    var celular = document.querySelector("#celular").value;

    if(nombre==""|| snombre==""||  apellido==""||sapellido==""|| email==""|| pid==""|| celular==""){
        alert("Obligatorio llenar todos los campos");
    }else{
        procesar(nombre,snombre,apellido,sapellido,email,pid,celular);
        imprimirtabla();
    }

}

function imprimirtabla(){
    var listapersonas = obtenerlista();
    var tbody = document.querySelector('#tabla tbody');

    tbody.innerHTML = ''; 

    for(var i = 0; i<listapersonas.length;i++){
        var row = tbody.insertRow(i);
        var namecel = row.insertCell(0);
        var segundoname = row.insertCell(1);
        var apellidocel = row.insertCell(2);
        var apellido2cel = row.insertCell(3); 
        var emailcell = row.insertCell(4);
        var idcell = row.insertCell(5);
        var celularcell = row.insertCell(6);
        var celdamodificar = document.createElement('td');
        var enlance = document.createElement('a');

        celdamodificar.setAttribute('class','btnModificar');
        celdamodificar.setAttribute('id',i);

        enlance.href='modificar.html?id'+'='+i;
        

        var nodotextomodificar=document.createTextNode('Modificar');

        namecel.innerHTML = vector[i].nombre
        segundoname.innerHTML = vector[i].nombre2
        apellidocel.innerHTML = vector[i].apellido
        apellido2cel.innerHTML = vector[i].apellido2
        emailcell.innerHTML = vector[i].email
        idcell.innerHTML = vector[i].id
        celularcell.innerHTML = vector[i].celular
        enlance.appendChild(nodotextomodificar);
        celdamodificar.appendChild(enlance);

        tbody.appendChild(row);
        row.appendChild(celdamodificar)
    
    }
}

function eliminartodo(){
    localStorage.clear();
    imprimirtabla();
}
    
