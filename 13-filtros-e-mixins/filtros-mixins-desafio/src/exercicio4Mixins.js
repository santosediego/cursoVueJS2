export default {
    computed: {
        espacoEmVirgula() {
            return this.frase.replace(/ /g, ",");
        },
        conteTamanho() {
            const arr = this.frase.split(" ");

            for (let i = 0; i < arr.length; i = i + 1) {
                arr[i] = arr[i].concat(` (${arr[i].length})`);
            }

            return arr.join(" ");
        }
    }
}