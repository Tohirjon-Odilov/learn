const operator = new Vue({
  el: "#operator",
  data() {
    return {
      beeline: 0,
      mobiuz: 0,
      ucell: 0,
      uzmobile: 0,
      phone: [],
      relPhone: null,
      code: [0, 1, 7, 8, 3, 4, 5, 9],
      allPhone: [],
    };
  },
  methods: {
    // * Oshiruvchilar
    plus1() {
      this.beeline++;
    },
    plus2() {
      this.mobiuz++;
    },
    plus3() {
      this.ucell++;
    },
    plus4() {
      this.uzmobile++;
    },

    // * Asosiy
    getNumber() {
      let codeNumber = Math.floor(Math.random() * 9);
      if (codeNumber == 2 || codeNumber == 6 || codeNumber == 8) {
        codeNumber++;
      }
      let rand1 = Math.floor(Math.random() * 999);
      // console.log(rand1)
      if(rand1 <= 99){
        rand1 = rand1 + 100
        // console.log("Qo'shildi")
      }
      let rand2 = Math.floor(Math.random() * 99);
      // console.log(rand2)
      if(rand2 <= 9){
        rand2 = rand2 + 10
        // console.log("Qo'shildi")
      }
      let rand3 = Math.floor(Math.random() * 99);
      // console.log(rand3)
      if(rand3 <= 9){
        rand3 = rand3 + 10
        // console.log("Qo'shildi")
      }

      this.phone.push(codeNumber);
      this.phone.push(rand1);
      this.phone.push(rand2);
      this.phone.push(rand3);

      let splic = this.phone.splice(0);
      // console.log(splic);
      this.relPhone = splic.join(" ");
      if (
        this.relPhone[0] == this.code[0] ||
        this.relPhone[0] == this.code[1]
      ) {
        this.plus1();
      } else if (
        this.relPhone[0] == this.code[2]
      ) {
        this.plus2();
      } else if (
        this.relPhone[0] == this.code[4] ||
        this.relPhone[0] == this.code[5]
      ) {
        this.plus3();
      } else if (
        this.relPhone[0] == this.code[6] ||
        this.relPhone[0] == this.code[7]
      ) {
        this.plus4();
      }
      console.log(this.relPhone)
      let arr = this.relPhone
      this.allPhone.push(arr)
    },
  },
});
