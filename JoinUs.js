// Create a new IntersectionObserver to watch elements when they appear/disappear from view
const observer = new IntersectionObserver((entries) => {

    // Loop through each observed entry (element)
    entries.forEach((entry) => {
        console.log(entry); // Log the entry info to the console for debugging

        // Check if the element is currently visible on the screen
        if (entry.isIntersecting) {
            // If visible, add the 'show' class to trigger CSS animation
            entry.target.classList.add("show");
        } else {
            // If not visible, remove the 'show' class
            entry.target.classList.remove("show");
        }
    });
});

// Select all elements with the 'hidden' class (these start off invisible)
const hiddenElements = document.querySelectorAll(".join-section");

// Tell the observer to watch each of these hidden elements
hiddenElements.forEach((el) => observer.observe(el));