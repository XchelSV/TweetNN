var brain = require('brainjs');
var parser = require('./parser.js');
var tweets_arr = require('./tweets.js');

var tweets = tweets_arr;

var formattedSet = parser.formatTrainingSet(tweets);
//console.log(formattedSet);

var net = new brain.NeuralNetwork();

net.train(formattedSet);

var test_tweet = {tweet: '@Qualitas_MX @Qulitas_Seguros atropellan a un estudiante en #PuertoVallarta y su aseguradora no quiere hacerse responsable de cubrir los gastos del joven que hoy se encuentra muy grave en terapia intensiva. ¡Exigimos respuesta a este caso de parte de su aseguradora!'};
//var test_tweet = {tweet: 'Accidente en Ruta 136 / La Garita - Puriscal #GPSGO 919 #TraficoCR. Tráfico 27m más lento de lo habitual.… https://t.c..'};
var formatted_test_tweet = parser.formatTestSet(test_tweet);
//console.log(formatted_test_tweet);
var output = net.run(formatted_test_tweet);

var json = JSON.stringify(net.toJSON());
var fs = require('fs');
fs.writeFile("output-trainedmodel.json", json, function(err) {
    if (err) {
        console.log(err);
    }
})

console.log(output);