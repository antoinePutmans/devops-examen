/* istanbul ignore file */
try {
    const {
        isEmpty,
        is8CharMin,
        containsSpecialsChar,
        containsNumbers,
    } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
        feedbackMessageText =
            isEmpty(gamerTagValue) &&
            is8CharMin(gamerTagInput) &&
            containsSpecialsChar(gamerTagInput) &&
            containsNumbers(gamerTagInput)
                ? "Gamer tag cannot be empty"
                : "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
