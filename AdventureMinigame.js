document.addEventListener('DOMContentLoaded', function () {
    const blackScreen = document.querySelector('#blackScreen');
    requestAnimationFrame(() => {
        blackScreen.style.opacity = '0';
    });
});
