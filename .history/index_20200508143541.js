// Look ma, [very little] Javascript!
document.querySelector('#toggle-button')
    .addEventListener('click',
        function () {
            document.querySelector('.section-two.collapsible')
                .classList.toggle('collapsed');
        });