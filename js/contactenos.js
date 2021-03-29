var vector=[];
function procesar(pnom1,pnom2,papellido1,papellido2,pemail,pid,pcelular){

    var persona = {
        nombre : pnom1,
        nombre2:pnom2,
        apellido:papellido1,
        apellido2:papellido2,
        email: pemail,
        id:pid,
        celular:pcelular
    }

    console.log(persona)
    vector.push(persona);
    jsonStore(vector);

}

function obtenerlista(){
    var storelist = localStorage.getItem('localFriendList');
    if(storelist==null){
        vector=[];
    }else{
        vector=JSON.parse(storelist);
    }
    return vector;
}

function jsonStore(plist){
    localStorage.setItem('localFriendList',JSON.stringify(plist));
}