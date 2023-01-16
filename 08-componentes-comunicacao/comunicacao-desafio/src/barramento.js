import Vue from 'vue'
export default new Vue({
    methods: {
        // esse vai em quem dispara o evento
        setSelectedUser(usuario) {
            // o nome do evento tem que ser o mesmo entre o emit e on para ser capturado
            this.$emit('userSelectAction', usuario)
        },
        // esse vai em quem recebe a ação do evento
        onSelectedUser(callback) {
            this.$on('userSelectAction', callback)
        }
    }
})
