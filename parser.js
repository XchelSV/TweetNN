var  parser = {};

var key_words = [ 'Robar','Robo','Seguridad','Inseguridad','Muerte','Accidente','Asalto','Delincuencia','Crimen','Automovilistico','Automovil','Coche','Auto','Aparatoso','Vehículo','camioneta','Conductor','Avenida','Tránsito','Tráfico','Murieron','Murió','Chofer','Calle','Heridos','Heridas','Choque','Velocidad','Enfermedad','Tratamiento','Riesgo','Delictivos','Horrible','Depresión','Impacto','Sufrir','muerto','muertos','delincuentes','Ruta','SegurosBancomer','GNPSeguros','Qualitas_MX','atropellar','atropellan','aseguradora','víal','vial','carretera','carril','av','col'];
var no_key_words = ['Meade', 'política','chichis', 'candidato', 'elecciones', 'margarita','trump', 'ecuador','bogota','colombia','pizza','VivirEsIncrible','cube','tropa','victoria','anaya','RicardoAnayaC','JoseAMeadek','cubanos','Perú'];


parser.formatTrainingSet = function( trainingSet ){

	var formattedSet = [];
	for (var i = 0; i < trainingSet.length; i++) {

		trainingSet[i].tweet = trainingSet[i].tweet.replace(/,/g , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace('.' , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace('/' , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace(':' , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace('!' , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace('?' , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace('¿' , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace('¡' , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace(/@/g , '');
		trainingSet[i].tweet = trainingSet[i].tweet.replace(/#/g , '');
		trainingSet[i].tweet = trainingSet[i].tweet.toLowerCase();

		var splited = trainingSet[i].tweet.split(" ");
		trainingSet[i].tweet = splited

		var input = {};
		for (var j = 0; j < trainingSet[i].tweet.length; j++) {
			for (var k = 0; k < key_words.length; k++) {
				//console.log( key_words[k].toLowerCase() + ' ' + trainingSet[i].tweet[j] );
				if(key_words[k].toLowerCase().toString() == trainingSet[i].tweet[j].toString() ){
					input[trainingSet[i].tweet[j]] = 1;
					break;
				}
				else{
					input[trainingSet[i].tweet[j]] = 0.5;
				}
				
			}
			for (var k = 0; k < no_key_words.length; k++) {
				//console.log( key_words[k].toLowerCase() + ' ' + trainingSet[i].tweet[j] );
				if(no_key_words[k].toLowerCase().toString() == trainingSet[i].tweet[j].toString() ){
					input[trainingSet[i].tweet[j]] = 0;
					break;
				}
			}
		}

		formattedSet.push({input: input, output: trainingSet[i].predict });

	}

	return formattedSet;
};


parser.formatTestSet = function (testSet){


	testSet.tweet = testSet.tweet.replace(/,/g , '');
	testSet.tweet = testSet.tweet.replace(/@/g , '');
	testSet.tweet = testSet.tweet.replace(/#/g , '');
	testSet.tweet = testSet.tweet.replace('_' , ' ');
	testSet.tweet = testSet.tweet.replace('_' , ' ');
	testSet.tweet = testSet.tweet.toLowerCase();

	var splited = testSet.tweet.split(" ");
	testSet.tweet = splited

	var input = {};
	for (var j = 0; j < testSet.tweet.length; j++) {
		for (var k = 0; k < key_words.length; k++) {
			//console.log( key_words[k].toLowerCase() + ' ' + testSet.tweet[j] );
			if(key_words[k].toLowerCase().toString() == testSet.tweet[j].toString() ){
				input[testSet.tweet[j]] = 1;
				break;
			}
			else{
				input[testSet.tweet[j]] = 0.5;
			}
			
		}
		for (var k = 0; k < no_key_words.length; k++) {
			//console.log( key_words[k].toLowerCase() + ' ' + testSet.tweet[j] );
			if(no_key_words[k].toLowerCase().toString() == testSet.tweet[j].toString() ){
				input[testSet.tweet[j]] = 0;
				break;
			}
		}
	}

	return input;

};

module.exports = parser;