new Vue({
    el: '#app',
    data: {
        // Game
        startGame: false,
        fineshGame: false,
        playerDamage: 15,
        monsterDamage: 10,
        bonus: 15,
        specialAttackValue: 15,
        logs: [],

        // Player
        lifePlayer: 100,
        withPlayer: '100%',

        // Monster
        lifeMonster: 100,
        withMonster: '100%',
    },
    methods: {
        attack() {
            this.damageMonster();
            this.damagePlayer();
        },
        specialAttack() {
            let value = Math.floor(Math.random() * this.specialAttackValue);
            this.lifeMonster = this.lifeMonster - value;

            if(this.lifeMonster < 0){
                this.withMonster = '0%'
            } else {
                this.withMonster = this.lifeMonster + '%'
            }

            this.logs.unshift({message: 'JOGADOR ATINGIU MONSTRO COM ' + value, classLog: 'player'});

            this.damagePlayer();
        },
        heal() {
            let value = Math.floor(Math.random() * this.bonus);
            this.lifePlayer = this.lifePlayer + value;

            if(this.lifePlayer > 100) {
                this.lifePlayer = 100
            }

            if(this.lifePlayer < 0) {
                this.lifePlayer = 0
            }

            this.withPlayer = this.lifePlayer+'%';
            this.logs.unshift({message: 'JOGADOR GANHOU FORÇA DE ' + value, classLog: 'player'});

            this.damagePlayer();
        },
        start() {
            // Game
            this.startGame = !this.startGame;
            this.logs = [];

            // Player
            this.lifePlayer = 100;
            this.withPlayer = '100%';

            // Monster
            this.lifeMonster = 100;
            this.withMonster = '100%';
        },
        damagePlayer(){
            let value = Math.floor(Math.random() * this.playerDamage);
            this.lifePlayer = this.lifePlayer - value;

            if(this.lifePlayer < 0){
                this.withPlayer = '0%'
            } else {
                this.withPlayer = this.lifePlayer + '%'
            }

            this.logs.unshift({message: 'MONSTRO ATINGIU JOGADOR COM ' + value, classLog: 'monster'});
        },
        damageMonster(){
            let value = Math.floor(Math.random() * this.monsterDamage);
            this.lifeMonster = this.lifeMonster - value;

            if(this.lifeMonster < 0){
                this.withMonster = '0%'
            } else {
                this.withMonster = this.lifeMonster + '%'
            }

            this.logs.unshift({message: 'JOGADOR ATINGIU MONSTRO COM ' + value, classLog: 'player'});
        }
    },
    computed: {
        playerCritical() {
            return this.lifePlayer <= 20 ? 'danger' : '';
        },
        monsterCritical() {
            return this.lifeMonster <= 20 ? 'danger' : '';
        },
        finesh(){
            if(this.lifePlayer <= 0 || this.lifeMonster <= 0){
                return  this.startGame = false, this.fineshGame = true;
            }
        }
    }
})
