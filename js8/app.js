
console.log(document.querySelector('.boite').getBoundingClientRect());
let x = 0, y = 0;
document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowRight') {
        x++;
        document.querySelector('.boite').style.left = x + 'px';
    }
    if (event.key === 'ArrowLeft'){
        x--;
        document.querySelector('.boite').style.left = x + 'px';
    }
    if (event.key === 'ArrowDown') {
        y++;
        document.querySelector('.boite').style.top = y + 'px';
    }
    if (event.key === 'ArrowUp'){
        y--;
        document.querySelector('.boite').style.top = y + 'px';
    }
    console.log(event.key);
})