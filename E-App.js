var products = [{
    index: 1,
    id: 'p1',
    name: 'Samsung TV',
    price: 500000
},
{
    index: 2,
    id: 'p2',
    name: 'Pixel 4a',
    price: 250000
},
{
    index: 3,
    id: 'p3',
    name: 'PS 5',
    price: 300000
},
{
    index: 4,
    id: 'p4',
    name: 'MacBook Air',
    price: 800000
},
{
    index: 5,
    id: 'p5',
    name: 'Apple Watch',
    price: 95000
},
{
    index: 6,
    id: 'p6',
    name: 'Air Pods',
    price: 75000
},

]




var counter = 0;

var noOfItemsAdded = document.getElementById('counter')
noOfItemsAdded.innerHTML = counter;

var popup;



function AddToCart () {
    
    var whenAdded = document.getElementsByClassName('addcart')
    whenAdded.innerHTML ='Remove from cart'   

    counter++;
    noOfItemsAdded.innerHTML = counter;
}

function openPopUp () {
    popup = document.getElementById('popup')

    popup.classList.add('open-popup')
}