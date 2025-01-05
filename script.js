let string = "";
const buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.innerHTML); 
    if (e.target.innerHTML == '=') {
      if (string) { 
        try {
          string = eval(string);
          inputField.value = string;
        } catch {
          inputField.value = "Error"; 
        }
      }
    } else if (e.target.innerHTML == 'C') {
      string = "";
      inputField.value = string;
    } else {
      string += e.target.innerHTML;
      inputField.value = string;
    }
  });
});
