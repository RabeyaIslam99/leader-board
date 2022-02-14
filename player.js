//change title colors
const colorTitle = document.getElementById('title1');
colorTitle.style.color = "Purple";


const changeTitle = document.getElementById('title2');
changeTitle.style.color = 'Crimson';

//change the players bacgroud color with rgba color

const bacgroudChange = document.getElementById('players-background');

bacgroudChange.style.backgroundColor = 'rgba(255, 99, 71, 0.4)';


//Now add new li(or an element) into a list using button

const addFruitList = document.getElementById('add-button').addEventListener
    ('click', function () {
        const addItem = document.getElementById('mylist');

        const newItem1 = document.createElement('li');
        const newItem2 = document.createElement('li');
        newItem1.textContent = "banana";
        newItem2.textContent = "mango";
        addItem.appendChild(newItem1);
        addItem.appendChild(newItem2);



    });
//Now add an input fileds where the numberr will be increase by a button
const getInputButton = document.getElementById('increase-number').
    addEventListener('click', function () {
        const numberIncrease = document.getElementById('number-input');
        const number = numberIncrease.value;
        if (number == 5) {
            document.getElementById("increase-number").disabled = true;
        }

        else {

            const newNumber = parseInt(number) + 1;
            numberIncrease.value = newNumber;

        }

    });

