document.addEventListener('DOMContentLoaded', function () {
    const blackScreen = document.querySelector('#blackScreen');
    requestAnimationFrame(() => {
        blackScreen.style.opacity = '0';
    });
});

setTimeout(() => {
    blackScreen.style.display = 'none';
}, 6000);