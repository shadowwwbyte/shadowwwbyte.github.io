// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select the paragraph element
  const paragraph = document.querySelector("p");

  // Add a click event listener to the paragraph
  paragraph.addEventListener("click", () => {
    // Change the paragraph text when clicked
    paragraph.textContent = "You just clicked me! Isn't JavaScript fun?";
  });

  // Log a message to the console
  console.log("Script.js is loaded and ready!");
});
