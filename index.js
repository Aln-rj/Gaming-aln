// script.js
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn-success');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Loading game... Enjoy!");
        });
    });
});
