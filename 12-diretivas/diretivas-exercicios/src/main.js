/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Para criar uma diretiva
// Documentação Vue: https://br.vuejs.org/v2/guide/custom-directive.html
Vue.directive('destaque', {

	// existe outros dois elementos para ser trabalhodos, mas não são
	// obrigatórios (, binding, vnode)

	bind(el, binding, vnode) {
		// el.style.backgroundColor = 'lightgreen'

		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			// Só pode passar um único argumento, pode passar multiplos modificadores
			if(binding.arg === 'fundo'){
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
