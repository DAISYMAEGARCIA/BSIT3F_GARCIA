// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
	// Typewriter effect for name, contact, and objective
	const nameElement = document.getElementById('name');
	const contactElement = document.getElementById('contact');
	const objectiveElement = document.getElementById('objective');

	// Function to type text with delay
	function typeText(element, text, delay) {
		let i = 0;
		let interval = setInterval(function() {
			element.innerHTML += text.charAt(i);
			i++;
			if (i >= text.length) {
				clearInterval(interval);
			}
		}, delay);
	}

	// Call typeText function with different elements and texts
	typeText(nameElement, 'Garcia, Daisy Mae T.', 100);
	setTimeout(function() {
		typeText(contactElement, '09360938943', 100);
	}, 2500); // Delay before typing contact

	setTimeout(function() {
		typeText(objectiveElement, 'To be a part of a company where I can be highly competitive, develop my skills, and continue to learn in various fields of work.', 100);
	}, 5000); // Delay before typing objective
});
