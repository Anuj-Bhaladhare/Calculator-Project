const buttonAll = document.querySelectorAll(".btn");
const inputShow = document.querySelector("[data-display]");

let string = "";
let arr = Array.from(buttonAll);

arr.forEach((buttonAll) => {

  buttonAll.addEventListener("click", (e) => {

    if (e.target.innerHTML == "=") 
    {
      string = eval(string);
      inputShow.value = string;
    } 
    else if (e.target.innerHTML == "AC") 
    {
      string = "";
      inputShow.value = string;
    } 
    else if (e.target.innerHTML == "C") 
    {
      string = string.substring(0, string.length - 1);
      inputShow.value = string;
    } 
    else 
    {
      string += e.target.innerHTML;
      inputShow.value = string;
    }

  });

});
