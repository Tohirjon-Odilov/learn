const order = new Vue({
    el: '#order',
    data() {
        return {
            lorem: true,
            text: false,
            poem: false,

            // ! radio

            radio: '',
            html: "HTML - HyperText Markup Language",
            css: "Cascading Style Sheet",
            js: "Javascript Programming Language",

            // ? Darsdagi kodlar

            // ? Vazifa 
            // ! task - 1
            farangeyt: '',
            selsiy: 273,
            toSelsiy: '',

            // ! task - 2
            random: Number,
            userNumber: Number,

        }
    },
    methods: {
        changeToSelsiy() {
            this.toSelsiy = this.farangeyt - this.selsiy
        },
        mathRandom() {
            let funcRandom = Math.floor(Math.random() * 100)
            console.log(funcRandom)
            this.random = funcRandom
        },
        taxmin() {
            if (this.userNumber < this.random) {
                alert('Iltimos kattaroq raqam kiriting!')
            } else if (this.userNumber > this.random) {
                alert('iltimos kichikroq raqam kiriting')
            } else {
                let load = confirm("O'yinni qaytadan boshlashga tayyormisiz")
                if (load) {
                    location.reload()
                }
            }
        }

    },
})