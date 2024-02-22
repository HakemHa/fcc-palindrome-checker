const textPrompt = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const answer = document.getElementById('answer');
const punctuation = ['.', ',', '/', '\'', '{', '}', '(', ')', '-', ' ', ':',"'", '"', "?", "!", '\\', '<', '>', "_"];
function checkPalindrome() {
  const textPromptValue = textPrompt.value;
  if (textPromptValue.length <= 0) {
    alert("Please input a value");
  }
  else {
    textPrompt.value = "";
    const formattedText = textPromptValue.split("").filter((el)=>!punctuation.includes(el)).join("").toLowerCase();
    const result = formattedText === formattedText.split("").reverse().join("") ? `<b id="0"></b> is a palindrome` : `<b id="0"></b> is not a palindrome`;
  answer.classList.remove('hide');
  answer.innerHTML = result;
  const tempb = document.getElementById('0');
  tempb.textContent = textPromptValue;
  }
  return;
}

checkBtn.addEventListener('click', checkPalindrome);
