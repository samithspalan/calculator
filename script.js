let string = "";
const buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.innerHTML); // Debugging line
    if (e.target.innerHTML == '=') {
      if (string) { // Check if string is not empty
        try {
          string = eval(string);
          inputField.value = string;
        } catch {
          inputField.value = "Error"; // Handle error gracefully
        }
      }
    } else if (e.target.innerHTML == 'C') {
      string = "";
      inputField.value = string;
    } else {
      string += e.target.innerHTML; // Corrected to innerHTML
      inputField.value = string;
    }
  });
});
