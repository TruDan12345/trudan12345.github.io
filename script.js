var isMoved = false;
var initialPosition = 0;

window.addEventListener('load', function () {
    var button = document.getElementById('moveButton');
    initialPosition = button.offsetLeft;
});


document.getElementById('moveButton').addEventListener('click', function (event) {
    event.stopPropagation();
    var button = document.getElementById('moveButton');

    if (!isMoved) {
        var newPosition = initialPosition;
        button.style.left = newPosition + 'px';
        button.classList.add('moved');
        document.querySelector('.light').classList.add('moved');
        document.querySelector('.shadow').classList.add('moved');
    } else {
        button.style.left = initialPosition + 'px';
        button.classList.remove('moved');
        document.querySelector('.light').classList.remove('moved');
        document.querySelector('.shadow').classList.remove('moved');
    }

    isMoved = !isMoved;
});

document.body.addEventListener('click', function (event) {
    var button = document.getElementById('moveButton');
    if (isMoved) {
        button.style.left = initialPosition + 'px';
        button.classList.remove('moved');
        document.querySelector('.light').classList.remove('moved');
        document.querySelector('.shadow').classList.remove('moved');
        isMoved = false;
    }
});