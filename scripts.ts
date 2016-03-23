//***
// NOTE TO DAVID: I DID WIND UP REFERRING TO THE CLASS EXAMPLE FOR SOME PARTS I COULDN'T FIGURE OUT
//***

class Die {
    value: number;
    div: HTMLDivElement;

    add() {
        this.div = document.createElement('div');
        this.div.className = 'dieDesign';
        let addSingleDie = document.getElementById('mainDiv')
        addSingleDie.appendChild(this.div);
        this.roll();
    }

    roll() {
        let dieNumber = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = String(dieNumber);
        this.value = dieNumber;
    }
}

function addDie() {
    let newDie = new Die();
    newDie.add();
    diceValue.push(newDie);
}

function rollDice() {
    for (let i = 0; i < diceValue.length; i++) {
        let diceRoll = diceValue[i];
        diceRoll.roll();
    }
}

function sumDice() {
    let total = 0;
    for (let i = 0; i < diceValue.length; i++) {
        total += diceValue[i].value;
    }
    alert('The sum of the dice is ' + total);
}

let diceValue = [];