// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const div = document.createElement('div')
document.body.appendChild(div)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement('div');

const p = document.createElement('p');
p.textContent = 'parrafo dentro del div';

div2.appendChild(p);
document.body.appendChild(div2);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.


const div3 = document.createElement('div');
        
for (let i = 1; i <= 6; i++) {
    const p = document.createElement('p');
    p.textContent = ` parrafo ${i} `;
    div3.appendChild(p);
}
document.body.appendChild(div3);

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const p = document.createElement('p');
p.textContent = 'Soy dinámico!';
document.body.appendChild(p);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');
apps.forEach((element)=> {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(function(element) {
    element.remove();
});



// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const p = document.createElement('p');
p.textContent = 'Voy en medio!';
document.body.insertBefore(p, div2);


