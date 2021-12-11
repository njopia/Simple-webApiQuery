$(document).ready(function(){

    
})

function loginAlumno(){
    
    
    var correoLogin=$("#correo1").val()
    var password=$("#password").val()

    if(correoLogin=='' || password==''){
        alert("Hay campos vacios")
        return 0;
    
    }else{
        //Creamos objeto para enviar todas las variables almacenadas en JS
        var objEnviar={
            'EmailAlumno':correoLogin,
            'PasswordAlumno':password
        }
        console.log(objEnviar)

        $.ajax({
            'url':'https://codigo-alfa.cl/Api/setLoginAlumnosDesarrolloWeb',//'respuestas/respuestaAjax.html',
            'data':objEnviar,
            'type':'POST',// Puede ser GET o POST 
            success:function(response){ //Cuando tenga respuesta del servidor. Ejecutamos lo siguiente
               console.log(response)
               noticias()  

            }

        })


    }
}

function enviarFormulario(){
    
    

    var nombre=$("#nombre").val()
    var correoFormulario=$("#correoFormulario").val()
    var Mensaje=$("#Mensaje").val()

    if(nombre=='' || correoFormulario=='' || Mensaje==''){
        alert("Hay campos vacios")
        return 0;
    
    }else{
        //Creamos objeto para enviar todas las variables almacenadas en JS
        var objEnviar={
            'EmailContacto':correoFormulario,
            'NombreContacto':nombre,
            'Consulta':Mensaje
        }

        $.ajax({
            'url':'https://codigo-alfa.cl/Api/sendContacto',
            'data':objEnviar,
            'type':'GET',// Puede ser GET o POST 
            success:function(response){ //Cuando tenga respuesta del servidor. Ejecutamos lo siguiente
                console.log(response)
                noticias()

            }

        })


    }
}

function obtenerValorDolar(){

    $.ajax({
        'url':'https://mindicador.cl/api',
        'type':'GET',



        success:function(objSend){
           var ValorDolar=objSend.dolar.valor;
           

           alert("El valor del dólar es: " +ValorDolar)
           console.log(objSend.dolar.valor) 


        }

    })

}

function noticias(){
    if(document.getElementById('noticias').style.display == 'none')
    document.getElementById('noticias').style.display = 'block';
    else
    (document.getElementById('noticias').style.display = 'none');

}

function convertirPesoChileno(Param){
    var Dolar=$("#consola"+Param).html();
    $.ajax({
        'url':'https://mindicador.cl/api/',
        'type':'GET',


        success:function(objSend){
           var ValorDolar=objSend.dolar.valor;
           var resultado=Dolar*ValorDolar;
           var ResultadoString="<p style='color:red'>La conversion a peso chileno es de "+(resultado+'</p>')

           if(resultado>1000){
               alert("DEMASIADO CARO!!!!")
           }

           $("#resultado-peso"+Param).html(ResultadoString)

           

        }

    })
   
}

//setInterval("enviarFormulario()",5000)