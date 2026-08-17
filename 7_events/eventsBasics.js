// event deligation

let menu = document.querySelector('#menu');

menu.addEventListener('click', function(e)  {
   //let target = e.target;

   switch(e.target.id ) { //target.id
    case 'home':
        alert('home clicked');
        break;
    case 'dashboard':
        alert('about clicked');
        break;
    case 'report':
        alert('report clicked');
        break;
   }
});

let createEvent =  new Event('click');

const hii = document.querySelector('#hii');

hii.addEventListener('click', function(e) {
    
    alert('hii clicked');
});

hii.dispatchEvent(createEvent);

