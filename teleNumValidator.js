function validatePhoneNumber(phoneNumber) {
    const validPatterns = [
        /^1\s\d{3}-\d{3}-\d{4}$/,
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
        /^1\(\d{3}\)\d{3}-\d{4}$/,
        /^1\s\d{3}\s\d{3}\s\d{4}$/,
        /^\d{10}$/,
        /^\d{3}-\d{3}-\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/
    ];

    for (const pattern of validPatterns) {
        if (pattern.test(phoneNumber)) {
            return true;
        }
    }
    return false;
}

document.getElementById('check-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }

    if (validatePhoneNumber(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});