 function checkAnswer() {
    const correctAnswer = "4"; // ✅ Set the correct answer

    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value; // ✅ Get user's selected value

    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// ✅ Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

