'use strict'
let express = require('express');
let fs = require('fs');
let path = require('path');
let app = express();
let webpackConfig = require('./webpack.server.config');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let router = express.Router();
let renderToString = require('../src/component-server');
let myComponent = require('../src/component');


let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath
}));

app.use('/asserts', express.static('./output'));
app.use('/dist', express.static('./dist'));
router.get('/:file.html', function(req, res) {
	res.set('Content-Type', 'text/html');
	var text = fs.readFileSync(path.resolve(__dirname, '../test/webpackserver/' + req.params.file + '.html'), 'utf-8');
	// server-render
	var renderText = renderToString(myComponent);
	text = text.replace('!content!', renderText)
    res.send(new Buffer(text));
});
app.use(router);

app.listen(8800, function (err) {
	if (err) {
		return console.log(err);
	}
	console.log('server start 8800');
});