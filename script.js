// Function to create continuous confetti
function continuousConfetti() {
    var duration = 15 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        } else {
            continuousConfetti(); // Continue confetti after the duration
        }
    })();
}

// Trigger confetti on page load
window.onload = function() {
    continuousConfetti();
};

// Function to show message when a card is clicked
function showMessage(cardNumber) {
    const messages = [
        "Message 1",
        "Message 2",
        "Message 3",
        "Message 4",
        "Message 5",
        "Message 6",
        "Message 7",
        "Message 8",
        "Message 9",
    ];

    const modal = document.getElementById("messageModal");
    const modalMessage = document.getElementById("modalMessage");

    modalMessage.textContent = messages[cardNumber - 1];
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("messageModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("messageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
