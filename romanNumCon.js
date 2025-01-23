// Function to convert a number to Roman numeral
function convertToRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
    return result;
  }
  
  // Function to handle the conversion when the button is clicked
  document.getElementById('convert-btn').addEventListener('click', function () {
    const numberInput = document.getElementById('number').value;
    const outputElement = document.getElementById('output');
    
    const num = parseInt(numberInput);
  
    // Case 1: Invalid input (empty input or non-number)
    if (isNaN(num)) {
      outputElement.textContent = 'Please enter a valid number';
      return;
    }
  
    // Case 2: Number less than 1
    if (num < 1) {
      outputElement.textContent = 'Please enter a number greater than or equal to 1';
      return;
    }
  
    // Case 3: Number greater than or equal to 4000
    if (num >= 4000) {
      outputElement.textContent = 'Please enter a number less than or equal to 3999';
      return;
    }
  
    // Case 4: Convert the number to Roman numeral
    const romanNumeral = convertToRoman(num);
    outputElement.textContent = romanNumeral;
  });