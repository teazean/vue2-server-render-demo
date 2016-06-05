import Vue from 'dist/vue';
import MyComponent from './component';

function extend(obj, obj2) {
	for (let key of Object.keys(obj2)) {
		obj[key] = obj2[key];
	}
}

new Vue({
	el: '#app',
	components: {
		MyComponent
	},
	template: '<my-component></my-component>'
});