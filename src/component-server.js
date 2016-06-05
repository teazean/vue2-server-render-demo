'use strict';

let Vue = require('../dist/vue.common.js');
let createRenderer = require('../dist/server-renderer.js');
const renderToString = createRenderer().renderToString;
let compile = require('../dist/compiler.common').compileToFunctions;

module.exports = function (com) {
	com.render = compile(com.template).render;
	return renderToString(new Vue(com));
}
