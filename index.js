var sorteia = function(nr){
	return Math.floor(Math.random()*nr);
};

var geradorDeNome = function(){
	var vogais = [
		'A', 'E', 'I', 'O', 'U',
		'A', 'E', 'I', 'O', 'U',
		'AR', 'ER', 'IR', 'OR', 'UR',
		'A', 'E', 'I', 'O', 'U',
		'A', 'E', 'I', 'O', 'U',
		'AS', 'ES', 'IS', 'OS', 'US',
		'A', 'E', 'I', 'O', 'U',
		'A', 'E', 'I', 'O', 'U',
		'AL', 'EL', 'IL', 'OL', 'UL',
		'A', 'E', 'I', 'O', 'U',
		'A', 'E', 'I', 'O', 'U'
	];

	var consoantes = [
		'B', 'C', 'D', 'F', 'G', 'GU', 'J', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'Z'
	];

	var silabas = sorteia(4)+1;
	var palavra = '';

	for (var i = 0; i < silabas; i++) {
		palavra += consoantes[sorteia(consoantes.length)];
		palavra += vogais[sorteia(vogais.length)];
	}

	return palavra;
};
