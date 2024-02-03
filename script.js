// portfolio.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to handle button click
    function handleButtonClick() {
      alert("Button clicked! Customize this function as needed.");
    }
  
    // Attach the function to the button click event
    var button = document.getElementById("contactButton");
    if (button) {
      button.addEventListener("click", handleButtonClick);
    }
  });
  