document.getElementById("check-btn").addEventListener("click", function() {
    const textInput = document.getElementById("text-input").value;
    const result = document.getElementById("result");
  
    if (textInput.trim() === "") {
      alert("Please input a value");
      return;
    }
  
    function isPalindrome(str) {
      const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
    }
  
    if (isPalindrome(textInput)) {
      result.textContent = `${textInput} is a palindrome`;
    } else {
      result.textContent = `${textInput} is not a palindrome`;
    }
  });