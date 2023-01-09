new Vue({
	el: '#desafio',
	data: {
		desafio1: 'destaque',
		efeito1: true,
		desafio3: 'circle',
		border: false,
		desafio4Classe: '',
		desafio4Aplicar: false,
		desafio5Dinamico: '',
		desafio5Estilo: {
			width: '100px',
			height: '100px',
			border: '1px solid black'
		},
		desfio6Widht: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.desafio1 = this.desafio1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0;
			const tempo = setInterval(() => {
				valor += 5;
				this.desfio6Widht = `${valor}%`;
				if(valor == 100) clearInterval(tempo);
			}, 500)
		},
		setDesafio4(event) {
			if(event.target.value == 'true'){
				this.border = true
			}
			if(event.target.value == 'false'){
				this.border = false
			}
		}
	}
})
