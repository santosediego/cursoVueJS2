import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contador', function (valor) {
	const arr = `${valor}`.split(" ");

	for (let i = 0; i < arr.length; i = i + 1) {
		arr[i] = arr[i].concat(` (${arr[i].length})`);
	}

	return arr.join(" ");
})

new Vue({
	render: h => h(App),
}).$mount('#app')
