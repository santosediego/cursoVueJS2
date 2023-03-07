<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!submetido">
        <div class="cabecalho">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->

        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->

        <NomeCompleto v-model="usuario" />

        <Rotulo nome="E-mail">
          <input type="email" v-model.lazy.trim="usuario.email" />
        </Rotulo>

        <Rotulo nome="Senha">
          <input type="password" v-model.lazy.trim="usuario.senha" />
        </Rotulo>

        <Rotulo nome="Armazenar Dados">
          <span class="mr-4"
            ><input type="radio" value="Sim" v-model="escolha" /> Sim</span
          >
          <span class="mr-4"
            ><input type="radio" value="Não" v-model="escolha" /> Não</span
          >
        </Rotulo>

        <hr />
        <button @click.prevent="enviar">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>

        <Rotulo nome="Nome">
          <span>{{ usuario.nome }}</span>
        </Rotulo>

        <Rotulo nome="Sobrenome">
          <span>{{ usuario.sobrenome }}</span>
        </Rotulo>

        <Rotulo nome="E-mail">
          <span>{{ usuario.email }}</span>
        </Rotulo>

        <Rotulo nome="E-mail">
          <span>{{ usuario.senha }}</span>
        </Rotulo>

        <Rotulo nome="Armazenar Dados">
          <span>{{ escolha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      usuario: {
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
      },
      escolha: "Sim",
      submetido: false,
    };
  },
  methods: {
    enviar() {
      this.submetido = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
