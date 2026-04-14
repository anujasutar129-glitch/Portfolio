function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('show');
    });

    document.getElementById(id).classList.add('show');

    document.querySelectorAll('.sidebar ul li').forEach(li => {
        li.classList.remove('active');
    });

    event.target.classList.add('active');
}
