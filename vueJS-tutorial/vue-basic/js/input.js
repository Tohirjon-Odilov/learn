const input = new Vue({
    el: "#input",
    data() {
        return {
            // qiymat: 2,
            // qiymatt: 2,
            // result: 0,

            // ! task - 2

            // change: 0,
            // changeNum1: "cofe",
            // changeNum2: "choy",
            // changeResult1: '',

            // ! task - 3

            // letter: '',

            // ? vazifa
            // ! task - 4
            name: '',
            ism: '',
            familiya: '',
            ota: '',

            age: '',
            agee: '',

            text: '',
            result: ''
        }
    },
    methods: {
        // natija() {
        //     this.result = parseInt(this.qiymat) + parseInt(this.qiymatt)
        // },
        // * task - 2
        // plus() {
        //     this.changeResult1 = this.changeNum1
        //     this.changeNum1 = this.changeNum2
        //     this.changeNum2 = this.changeResult1
        // },
        // * task - 3
        // checkLetter() {
        //     let lastElem = this.letter[this.letter.length - 1]
        //     if (lastElem === 'x') {
        //         this.letter = ''
        //     } else if (lastElem === 'y') {
        //         this.letter = ''
        //     } else if (lastElem === 'z') {
        //         this.letter = ''
        //     } else {
        //         console.log("stop");
        //     }
        // },

        // ? vazifa
        // * task - 4

        split() {
            let name = this.name.split(' ')
            this.ism = name[0]
            this.familiya = name[1]
            this.ota = name[2]
        },

        // * task - 5
        agea() {
            let d = new Date()
            let agea = 2022 - parseInt(this.age)
            this.agee = agea
        },

        // * task - 6

        teskari() {
            let text = this.text.split('')
            this.result = text.reverse().join("")
        }
    },
})