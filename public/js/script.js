const selector = (el) => document.querySelector(el);
const selectorAll = (el) => document.querySelectorAll(el);

/* mapping the pizza's json */
pizzaJson.map((item, index) => {
    let pizzaItem = selector('.models .pizza-item').cloneNode(true);
    /* Informazioni in pizzaItem */
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    selector('.pizza-area').append( pizzaItem );
})
