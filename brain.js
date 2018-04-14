var brain = require('brainjs');
var parser = require('./parser.js');
var tweets_arr = require('./tweets.js');

var tweets = tweets_arr;

var formattedSet = parser.formatTrainingSet(tweets);
//console.log(formattedSet);

var net = new brain.NeuralNetwork();

net.train(formattedSet);

//var test_tweet = {tweet: 'Amenza Trump con dar muerte a todos los delincuentes inmigrantes #HailTrump'};
var test_tweet = {tweet: 'Accidente en Ruta 136 / La Garita - Puriscal #GPSGO 919 #TraficoCR. Tráfico 27m más lento de lo habitual.… https://t.c..'};
var formatted_test_tweet = parser.formatTestSet(test_tweet);
console.log(formatted_test_tweet);

var output = net.run(formatted_test_tweet);

console.log(output);