
// Definindo parametros AJAX 
var ajax;

if (window.XMLHttpRequest) {
	ajax = new XMLHttpRequest();
} else {
	ajax = new ActiveXObjetc("Microsoft.XMLHTTP");
}



// Limpa os campos do form ao clicar em Cancelar
function limparForm() {
	$('#cancelar').click(function(){
		$('input.form-control').val("");

		return false;
	});
}


// Carregando meu banco de dados XML
function carregarDados() {
	$.ajax({
		url:'xml/db.xml'
	}).then(sucesso, falha);

	function sucesso(catalogo) {
		var elementoId;
		var elementoMarca;
		var elementoModelo;
		var elementoAno;
		
		//Busca e lista os IDs
		elementoId = "<ul>";
		
		$(catalogo).find('carro').each(function () {
			var id = $(this).find('veiculoId').text();

			elementoId += "<li class='campoId'>" + id + "</li>";
		});

		elementoId += "</ul>";

		$('div#id').html(elementoId);


		//Busca e lista as Marcas
		elementoMarca = "<ul>";
		
		$(catalogo).find('carro').each(function () {
			var marca = $(this).find('marca').text();

			elementoMarca += "<li class='campoMarca'>" + marca + "</li>";
		});

		elementoMarca += "</ul>";

		$('div#marca').html(elementoMarca);


		//Busca e lista os Modelos
		elementoModelo = "<ul>";
		
		$(catalogo).find('carro').each(function () {
			var modelo = $(this).find('modelo').text();

			elementoModelo += "<li class='campoModelo'>" + modelo + "</li>";
		});

		elementoModelo += "</ul>";

		$('div#modelo').html(elementoModelo);


		//Busca e lista os Anos
		elementoAno = "<ul>";
		
		$(catalogo).find('carro').each(function () {
			var ano = $(this).find('ano').text();

			elementoAno += "<li class='campoAno'>" + ano + "</li>";
		});

		elementoAno += "</ul>";

		$('div#ano').html(elementoAno);


		$('div.listagem').css('display', 'block');
		return false;
	}

	function falha() {
		var msgerro;

		msgerro = "<div class='col-md-12'><p class='msgErro'>Houve alguma falha no carregamento do nosso cátalogo, por favor contacte o nosso time de suporte.</p></div>";
		
		$('div.msgErro').css('display', 'block');
		$('div.msgErro').html(msgerro);

		console.log(ajax);

		return false;
	}
}


//Salvando novo Carro - ligacao com o arquivo api.php
function saveCarro() {
	var = marca $('#marca').val();
	var = modelo $('#modelo').val();
	var = ano $('#ano').val();

	$.ajax({
		type: 'POST',
		url: 'api.php?p=add',
		data: 'marca =' + marca + '&modelo =' + modelo + '&ano' + ano,
		success: function(msg){
			alert('Carro cadastrado com sucesso.');
		}
	});
}
