module.exports = {
	template: '<div @click="click">{{test}}</div>',
	data() {
		return {
			test: '我的内容是撸啦撸啦~seo here！'
		}
	},
	methods: {
		click() {
			alert('clicked');
		}
	}
};
