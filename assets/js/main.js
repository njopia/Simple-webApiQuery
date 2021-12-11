$(document).ready(function(){
   
	ejecutarLlamada()

})

function ejecutarLlamada(){
	
	$.ajax({
		'url':'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000',//'respuestas/respuestaAjax.html',
		'type':'GET',//GET 
		success:function(objSend){
		   let NumeroPokemon=1;

		   let cadenena=''
		   $.each(objSend.results,function(index,value){
				console.log(value)
				cadenena+='<tr><td>'+NumeroPokemon+'</td><td>'+value.name+'</td><td><button class="btn btn-primary btn-sm" onclick="MostrarDetalle(\''+value.url+'\',\''+value.name+'\')">Mostrar</button></td></tr>'
				NumeroPokemon++;
		   })

		   
		   $("#TablaPokemon tbody").append(cadenena)

		   
		   $('#TablaPokemon').DataTable();

		}

	})
}

function MostrarDetalle(Url,namePk){
	$("#panel-principal").hide()
	$.ajax({
		'url':Url,
		'type':'GET',
		success:function (pokemon){
			
			let tiposPokemon='';
			$.each(pokemon.types,function(index,value){
				tiposPokemon+=value.type.name+' ';
			})
			
			$("#nombre-pokemon").html(namePk)
			$("#tipo-POkemon").html(tiposPokemon)
			$("#foto-grande").attr('src',pokemon.sprites.other['official-artwork'].front_default)

			$("#foto-pequna-1").attr('src',pokemon.sprites.back_default)

			$("#foto-pequna-2").attr('src',pokemon.sprites.front_default);

			$("#panel-principal").slideDown()


		}
	})
}