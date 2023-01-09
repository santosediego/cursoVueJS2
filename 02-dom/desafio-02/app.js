new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        desafio1(){
            alert('Alert!')
        },
        desafio2(event) {
            this.valor = event.target.value;
        },
        desafio3(event) {
            this.valor = event.target.value;
        }
    }
})