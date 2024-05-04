const acordion = document.getElementsByClassName('container');

for (i = 0; i<acordion.length; i++ ){
    acordion[i].addEventListener('click', function(){ 
        this.classList.toggle('active')
    }
)}