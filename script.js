const allButtons = document.querySelectorAll("button");
const inputDesplay = document.querySelector(".display");
let string = "";
let string2 = "";


allButtons.forEach(button => {
  button.addEventListener("click", event => {
      if(event.target.innerHTML == "="){
        string = eval(string2);
        inputDesplay.value = string;
      }
      else if(event.target.innerHTML == "AC"){
        string = "";
        string2 = "";
        inputDesplay.value = string;
      }
      else if(event.target.innerHTML == "C"){
        string = string.slice(0, -1);
        string2 = string2.slice(0, -1);
        inputDesplay.value = string;
      }
      else if(event.target.innerHTML == "X"){
        string += "x";
        string2 += "*";
        inputDesplay.value = string;
      }
      else if(event.target.innerHTML == "÷"){
        string2 += "/";
        string += event.target.innerHTML;
        inputDesplay.value = string;
      }
      else if(event.target.innerHTML == "%"){
        string += "";
        string2 += "";
        inputDesplay.value = string;
      }
      else{
        inputDesplay.value = string += event.target.innerHTML;
        inputDesplay.value = string2 += event.target.innerHTML;
      }
  })
})

