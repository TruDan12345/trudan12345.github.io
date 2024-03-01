var isMoved = false;
var initialPosition = 0;

window.addEventListener('load', function () {
    var button = document.getElementById('moveButton');
    initialPosition = button.offsetLeft;
});

// Add click event listener to the moveButton
document.getElementById('moveButton').addEventListener('click', function (event) {
    event.stopPropagation();
    var button = document.getElementById('moveButton');

    // Check if the click occurred within the button area
    var isButtonClicked = event.target === button;

    // Toggle movement only if the button is not clicked directly
    if (!isButtonClicked) {
        if (!isMoved) {
            moveButtonTo(initialPosition);
        } else {
            moveButtonTo(initialPosition);
        }

        isMoved = !isMoved;
    }
});

// Add click event listener to the body to handle clicks outside the button area
document.body.addEventListener('click', function (event) {
    var button = document.getElementById('moveButton');
    if (isMoved) {
        moveButtonTo(initialPosition);
        isMoved = false;
    }
});

// Function to move the button and related elements to the specified position
function moveButtonTo(position) {
    var button = document.getElementById('moveButton');
    var light = document.querySelector('.light');
    var shadow = document.querySelector('.shadow');

    button.style.left = position + 'px';
    button.classList.toggle('moved');
    light.classList.toggle('moved');
    shadow.classList.toggle('moved');
}
