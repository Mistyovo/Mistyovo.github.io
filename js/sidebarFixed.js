document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var sidebar = document.querySelector('#sidebar');
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition >= 160) {
            sidebar.classList.add('fixed');
        } else {
            sidebar.classList.remove('fixed');
        }
    });
});