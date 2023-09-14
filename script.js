document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-button");
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("result-text");

    submitButton.addEventListener("click", function () {
        const missedPeriod = document.querySelector('input[name="missed-period"]:checked');
        const symptoms = document.querySelector('input[name="symptoms"]:checked');
        const pregnancyTest = document.querySelector('input[name="pregnancy-test"]:checked');

        if (!missedPeriod || !symptoms || !pregnancyTest) {
            alert("Please answer all questions.");
            return;
        }

        // Replace this logic with your pregnancy detection algorithm.
        if (missedPeriod.value === "yes" && (symptoms.value === "yes" || pregnancyTest.value === "yes")) {
            resultText.textContent = "Based on your answers, you may be pregnant. Please consult a healthcare professional for confirmation.";
        } else {
            resultText.textContent = "Based on your answers, you may not be pregnant. If you have concerns, consult a healthcare professional.";
        }

        resultDiv.classList.remove("hidden");
    });
});
