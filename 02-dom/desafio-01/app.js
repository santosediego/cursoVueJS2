new Vue({
    el: '#desafio',
    data: {
        nome: 'Diego',
        idade: 30,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadePor3: function(){
            return this.idade * 3
        },
        random: function(){
            return Math.random()
        },
    }
})