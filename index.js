class Password {
  constructor() {
    this.numberr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.alphabet = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
    ];
    this.splchar = ["@", "#", "$"];
    this.pass = "";
  }
  generateRandomNumber() {
    return this.numberr[Math.floor(Math.random() * 10)];
  }
  generateRandomAlphabet() {
    return this.alphabet[Math.floor(Math.random() * 26)];
  }
  generateRandomSplchar() {
    return this.splchar[Math.floor(Math.random() * 3)];
  }
  generateWeakPasswordAlpha() {
    this.pass =
      this.pass +
      this.generateRandomAlphabet().toUpperCase() +
      this.generateRandomAlphabet() +
      this.generateRandomNumber() +
      this.generateRandomSplchar();
    for (let i = 0; i < 4; i++) {
      this.pass = this.pass + this.generateRandomAlphabet();
    }
    return this.pass;
  }
  generateWeakPasswordNumber() {
    this.pass =
      this.pass +
      this.generateRandomAlphabet().toUpperCase() +
      this.generateRandomAlphabet() +
      this.generateRandomNumber() +
      this.generateRandomSplchar();
    for (let i = 0; i < 4; i++) {
      this.pass = this.pass + this.generateRandomNumber();
    }
    return this.pass;
  }
  generateStrongPasswordAlpha() {
      for (let i = 0; i < 8; i++) {
        this.pass = this.pass + this.generateRandomAlphabet();
      }
    this.pass =
      this.pass +
      this.generateRandomAlphabet().toUpperCase() +
      this.generateRandomAlphabet() +
      this.generateRandomSplchar() +
      this.generateRandomNumber();
    return this.pass;
  }
  generateStrongPasswordNumber() {
    for (let i = 0; i < 8; i++) {
      this.pass = this.pass + this.generateRandomNumber();
    }
    this.pass =
      this.pass +
      this.generateRandomAlphabet().toUpperCase() +
      this.generateRandomAlphabet() +
      this.generateRandomSplchar() +
      this.generateRandomNumber() ;
    return this.pass;
  }
}

const mainFunc = (id1, id2) => {
  let password = new Password();
  if (id1 == 1 && id2==3) return password.generateWeakPasswordAlpha();
  if (id1 == 1 && id2==4) return password.generateWeakPasswordNumber();
  if (id1 == 2 && id2==3) return password.generateStrongPasswordAlpha();
  if (id1 == 2 && id2==4) return password.generateStrongPasswordNumber();
};

document.getElementById('myform').addEventListener("submit", function(event){
    event.preventDefault()

    try {
        let id1 = document.querySelector('input[name="type"]:checked').value
        let id2 = document.querySelector('input[name="prefer"]:checked').value
        let passWord = mainFunc(id1, id2)
        document.getElementById('password').innerHTML = passWord
        document.getElementById('screen').style.display = "block"
        document.getElementById('modal').style.display = "flex"
        document.getElementById('modal').classList.remove("scale-out-center")
        document.getElementById('modal').classList.add("scale-in-center")
    } catch (error) {
        alert("Fill out all the fields first");
    }
})

document.getElementById('close').addEventListener("click",function(){
    document.getElementById('modal').classList.remove("scale-in-center")
    document.getElementById('modal').classList.add("scale-out-center")
    document.getElementById('screen').style.display = "none"
    // document.getElementById('modal').style.display = "none"
    document.getElementById('copy').innerHTML = 'Copy'
})

document.getElementById('copy').addEventListener('click',function(){
    const text = document.getElementById('password').innerHTML
    navigator.clipboard.writeText(text)
    .then(()=>{
        document.getElementById('copy').innerHTML = `<i class="fa-solid fa-check"></i>`
    }).catch(error=>{
        alert("Error copying the password...")
    })
})