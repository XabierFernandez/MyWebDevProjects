let code = '';
const display = document.getElementById('codeEntered');
const successButton = document.getElementById('successButton');
const secretCode = '1234'; // Change this to your secret code

function press(num) {
  if (code.length < 4) {
    code += num;
    display.textContent = code;
  }
}

function clearCode() {
  code = '';
  display.textContent = '';
  resetColors();
}

function guessCode() {
  if (code.length === 4) {
    if (code === secretCode) {
      display.innerHTML = '<span style="color: green;">' + code + '</span> - Congratulations!';
      successButton.style.display = 'block';
    } else {
      display.innerHTML = getColoredCode(code) + ' - Try again!';
    }
  } else {
    display.textContent = 'Enter 4 digits.';
  }
}

function goToNext() {
  window.location.href = 'https://www.google.com';
}

function resetColors() {
  display.textContent = '';
}

function getColoredCode(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === secretCode[i]) {
      result += '<span style="color: green;">' + input[i] + '</span>';
    } else if (secretCode.includes(input[i])) {
      result += '<span style="color: red;">' + input[i] + '</span>';
    } else {
      result += input[i];
    }
  }
  return result;
}
