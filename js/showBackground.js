function showBackground() {
    var content = document.getElementById('content');
    // var header = document.getElementById('header');
    var sidebar = document.getElementById('sidebar');
    var footer = document.getElementById('footer');
    var title = document.getElementById('title');
    if (content.classList.contains("hide")) {
        content.classList.remove('hide');
        // header.classList.remove('hide');
        sidebar.classList.remove('hide');
        footer.classList.remove('hide');
        title.classList.remove('hide');
    } else {
        content.classList.add('hide');
        // header.classList.add('hide');
        sidebar.classList.add('hide');
        footer.classList.add('hide');
        title.classList.add('hide');
    }
}