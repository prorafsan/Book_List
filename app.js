var title = document.querySelector('#title');
var author = document.querySelector('#author');
var year = document.querySelector('#year');
var btn = document.querySelector('.btn');
var book_list = document.querySelector('#book-list');





btn.addEventListener('click', function (e) {
    e.preventDefault();



    if (title.value == '' && author.value == '' && year.value == '') {
        alert('vai kisu akta den');
    } else {
        var newRow = document.createElement('tr');

        var newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        var newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        var newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);





        book_list.appendChild(newRow);
    }

});
