<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <!-- Todas as diretivas começam com "v-" -->
    <!-- Se quiser passar um valor string tem que usar aspas simples dentro -->
    <p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
    <p v-destaque="cor">Usando diretiva personalizada</p>

    <hr />
    <p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Usando diretiva personalizada local</p>
    <p v-destaque-local.atrasar="cor">Usando diretiva personalizada local</p>

	<hr>
	<p v-destaque-local2:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">
		Usando diretiva personalizada local
	</p>
	<p v-destaque-local2.atrasar="{cor1: 'green', atraso: 5000}">Usando diretiva personalizada local</p>

    <!-- Anatomia da diretiva -->
    <!--<p v-nome:argumento.mod1.mod2="..."></p>-->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
		  const aplicarCor = cor => {
			  if (binding.arg === "fundo") {
				el.style.backgroundColor = cor
			  } else {
				el.style.color = cor
			  }
		  }

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = 3000

		const cor1 = binding.value
		const cor2 = 'orange'
		let corAtual = cor1

        setTimeout(() => {
			if (binding.modifiers["alternar"]) {
				setInterval(() => {
					corAtual = corAtual === cor1 ? cor2 : cor1
					aplicarCor(corAtual)
				}, 1000)
			} else {
				aplicarCor(binding.value)
			}
        }, atraso);
      },
    },
	"destaque-local2": {
      bind(el, binding, vnode) {
		  const aplicarCor = cor => {
			  if (binding.arg === "fundo") {
				el.style.backgroundColor = cor
			  } else {
				el.style.color = cor
			  }
		  }

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso

		const cor1 = binding.value.cor1
		const cor2 = binding.value.cor2
		let corAtual = cor1

        setTimeout(() => {
			if (binding.modifiers["alternar"]) {
				setInterval(() => {
					corAtual = corAtual === cor1 ? cor2 : cor1
					aplicarCor(corAtual)
				}, binding.value.intervalo)
			} else {
				aplicarCor(binding.value.cor1)
			}
        }, atraso);
      },
    },
  },
  data() {
    return {
      cor: "red",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
