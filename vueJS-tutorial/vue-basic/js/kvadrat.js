const app = new Vue({
    el: "#main",
    data() {
        return {
            counter: 2,
        }
    },
    methods: {
        plus: function() {
            this.counter++
        },
        kvadrat: function() {
            this.counter = this.counter ** 2
        },
        kub: function() {
            this.counter = this.counter ** 3
        },
    }
})