import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor) {
	return valor.split('').reverse().join('')
})

// Mixin global
Vue.mixin({
	data(){
		return {
			global: 'Estou no Mixin Global'
		}
	},
	created() {
		console.log('Created - Mixin global!')
	}
})

new Vue({
	render: h => h(App),
	created() {
		console.log('Created - Vue Instance')
	}
}).$mount('#app')