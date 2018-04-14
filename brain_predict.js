var brain = require('brainjs');
var parser = require('./parser.js');
var fs = require('fs');

var nn = {};
nn.ClassifyTweet = function(tweet){
	var obj = JSON.parse(fs.readFileSync('output-trainedmodel.json', 'utf8'));

	var net = new brain.NeuralNetwork();
	net.fromJSON(obj);

	var test_tweet = {tweet: tweet};
	var formatted_test_tweet = parser.formatTestSet(test_tweet);

	var output = net.run(formatted_test_tweet);
	console.log(output);

	if(output >= 0.6){
		return true;
	}
	else{
		return false;
	}
}

module.exports = nn;