var delay = 0;
function startAnimation(className, animationClass, increment) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        showLater(element, delay, animationClass, increment);
        delay += increment;
    }

    showLast(document.getElementById('last'), delay);
}

function showLater(element, delay, animationClass, expiration) {
    setTimeout(function () {
        element.classList.add(animationClass);
        setTimeout(function () {
            element.classList.remove(animationClass);
        }, expiration);
    }, delay);
}

function showLast(element, delay) {
    setTimeout(function () {
        element.style.display = 'block';
    }, delay);
}