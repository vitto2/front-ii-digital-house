
function blackTheme() { 
    let body = document.querySelector('.dark');
        body.setAttribute('style',"background-color: rgb(39, 39, 39)");


    let container = document.querySelector('.container'); 
        container.style.backgroundColor = 'rgb(19, 19, 19)';
        container.style.color = 'rgb(170, 170, 170)';
        container.style.BorderColor = 'black';

    let itens = document.querySelectorAll('.item'); 
        itens.forEach(element => {
            element.style.backgroundColor = 'rgb(19, 19, 19)';
            element.style.borderColor = 'black';
            element.style.color =  'rgb(230, 230, 230)';
        });

    
    let h1 = document.querySelector('.h1'); 
        h1.style.backgroundColor = 'black';
        h1.style.color = 'white';
        h1.style.borderColor = 'black';
}

function ligthTheme() { 
    location.reload();
} 