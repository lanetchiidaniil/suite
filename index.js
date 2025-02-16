document.querySelector('.burger-menu').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});

document.querySelector('.hidden-menu').addEventListener('click', () => {
    document.querySelector('.hidden-menu').classList.add('active');
})