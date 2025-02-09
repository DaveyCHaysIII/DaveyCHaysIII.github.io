function toggleClass(clickedButton) {
    // Remove 'active' class from all buttons
    const allButtons = document.querySelectorAll('.button');
    allButtons.forEach(button => button.classList.remove('active'));

    // Add 'active' class to the clicked button
    clickedButton.classList.add('active');

	// Hide all elements with the 'card-inner-block' class
    const allCards = document.querySelectorAll('.card-inner-block');
    allCards.forEach(card => card.style.display = "none");

    // Find the target card and display it
    const targetCard = clickedButton.getAttribute("data-target");
    document.getElementById(targetCard).style.display = "block";
}