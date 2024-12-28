document.addEventListener(DOMContentLoaded , function(){
    const allButton = document.querySelector('.header_btn');
    const searchBar = document.querySelector('.searchbar');
    const searchInput = document.getElementById('searchinput');
    const searchClose = document.getElementById('searchCloses');

    for (var i=0; i< allButton.length; i++) {
        allButton[i].addEventListener('click', function(){
            searchbar.style.visibility = 'visible';
            searchbar.classList.add('open');  
            this.setAttribute('aria-expended' , 'true');
            searchinput.focus();
        })
    }

});