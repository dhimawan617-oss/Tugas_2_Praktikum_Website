const darkMode = document.querySelector('#click-toggle');
const logOut = document.querySelector('#logout-btn');
const table = document.querySelector('table');
let warna = false;

darkMode.addEventListener('click', function(){
    if (warna == false) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
        darkMode.textContent = 'Light Mode';
        logOut.style.backgroundColor = 'red';
        table.classList.remove('table-light-custom');
        table.classList.add('table-dark-custom');
        warna = true;
    }
    else{
        document.body.style.backgroundColor = '#FFFAD3' ;
        document.body.style.color = 'black';
        darkMode.textContent = 'Dark Mode';
        logOut.style.backgroundColor = '#333';
        table.classList.remove('table-dark-custom');
        table.classList.add('table-light-custom');
        warna = false;
    }
})

logOut.addEventListener('click', function(){
    let pindah = confirm('Are you sure want to Log Out ?');

    if (pindah == true) {
        window.location.href = 'index.html';
    }
    else{
        return;
    }
})