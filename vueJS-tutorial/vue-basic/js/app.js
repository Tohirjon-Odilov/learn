// console.log(Vue)
// vue.js Mening birinchi kodim.
const app = new Vue({
    el: "#main",
    data() {
        return {
            message: "Hello world",
            // name: ["John", "Vali"],
            // isOk: false,
            counter: 0,
            width: 100,
        }
    },
    methods: {
        counterPlusPlus: function() { //counterPlusPlus(){}
            this.counter++
        },
        widthPlusPlus() {
            let box = document.querySelector('.box')
            box.style.width = `${this.width += 15}px`
            this.counter++
        }
    }
});

// ! v-on => events    v-on:event name = ""
// ! v-if => condition
// ! v-else => condation
// ! v-blind => bundle(bog'lash)
// ! v-for => itaration

// ! zahiralangan so'zlar
// ! app == 
// ! el 
// ! data
// ! methods
// ! created
// ! computed
// ! filters

// MVS

// created => mounted => updated => destroyed => created