const container = document.querySelector('.container')

const redText = document.createElement('p')
redText.textContent = "hey i'm red"
redText.style.color = "red";

redText.classList.add('redText')

container.appendChild(redText)

const blueHeading = document.createElement("h3");
blueHeading.classList.add('blueHeading');
blueHeading.textContent ="I'm a blue h3 !";
blueHeading.style.color ="blue"
container.appendChild(blueHeading)

const div = document.createElement('div')
div.classList.add('div')
div.setAttribute("style","background-color:pink; border : 0.1px solid black ; border-radius : 5px;padding:10px;padding-left:15px")

const h1 = document.createElement('h1');
h1.textContent="i'm in a div"

div.appendChild(h1)

const textInDiv = document.createElement('p')

textInDiv.textContent ="me tooo"

div.appendChild(textInDiv)

container.appendChild(div)

const lists = document.querySelectorAll('.lists')

// this we got the reference of node list , and im gonna convert this into array

const arrayLists = Array.from(lists)

arrayLists.forEach((li)=> {
    li.style.color = "darkgreen"
})


