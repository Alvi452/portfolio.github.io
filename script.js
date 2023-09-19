document.addEventListener("DOMContentLoaded", function() {
    const workButton = document.getElementById("btn");

    workButton.addEventListener("click", function() {
        workButton.textContent = "Working on it...";
        workButton.disabled = true;

        
    })
    });

