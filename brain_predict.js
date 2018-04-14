import trainedNN from './output-trainedmodel'
const brain = require('brainjs');
const parser = require('./parser.js');
// const fs = require('fs');
const ClassifyTweet = function(tweet){
	//const obj = JSON.parse(fs.readFileSync('output-trainedmodel.json', 'utf8'));

	let net = new brain.NeuralNetwork();
	net.fromJSON(trainedNN);

	const test_tweet = {tweet: tweet};
	const formatted_test_tweet = parser.formatTestSet(test_tweet);

	const output = net.run(formatted_test_tweet);
	console.info('Precision %f%', output[0]*100);

	if(output >= 0.6){
		return true;
	}
	else{
		return false;
	}
}

export default ClassifyTweet;
