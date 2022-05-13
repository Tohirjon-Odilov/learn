const input = new Vue({
  el: "#input",
  data() {
    return {
      letter: null,
      letters: "qwertyuiopasdfghjklzxcvbnm".split(""),
      resultData: null,
      // undosh:null
      peoples: [
          {
              name: "John",
              age: 35
          },
          {
              name: "Mike",
              age: 45
          },
          {
              name: "Lily",
              age: 19
          },
          {
              name: "Martin",
              age: 66
          },
          {
              name: "Jonatan",
              age: 23
          },
      ],
      list: String

    };
  },
  methods: {
    showRightLetter() {
      if (
        "e" === this.letter ||
        "u" === this.letter ||
        "i" === this.letter ||
        "o" === this.letter ||
        "a" === this.letter
      ) {
        // this.resultData = this.letters[this.letters.indexOf(this.letter) + 1]
        // this.resultData = this.letters.length
        // console.log(this.resultData)
        if ("e" === this.letter) {
          this.resultData = "w" + this.letter + "r";
        } else if ("u" === this.letter) {
          this.resultData = "y" + this.letter + "i";
        } else if ("i" === this.letter) {
          this.resultData = "u" + this.letter + "o";
        } else if ("o" === this.letter) {
          this.resultData = "i" + this.letter + "p";
        } else if ("a" === this.letter) {
          this.resultData = "p" + this.letter + "s";
        }
        // console.log("Unli");
      } else {
        this.resultData = this.letters[this.letters.indexOf(this.letter) + 1];
        console.log(this.resultData);
      }
    },
    sortList(){
        this
        console.log(this.peoples == this.list)
    }
  },
});
