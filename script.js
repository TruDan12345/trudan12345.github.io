const makeBarButton = document.getElementById('MakeBar'); // Get the button element

makeBarButton.addEventListener('click', function () { // Add click event listener
    this.classList.toggle('bar'); // Toggle the 'bar' class on click
});
