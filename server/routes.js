module.exports = function(app){
	const examples = require('./routes/examples');

	app.use('/examples', examples);
}