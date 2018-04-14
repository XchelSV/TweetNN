var nn = require('./brain_predict.js');

var result = nn.ClassifyTweet('Nos dirigimos a Choque, Romero esq. Calle Bolivar, Col. Niños Héroes, al mando V-12-1 unidad 0063.');
console.log(result); //true