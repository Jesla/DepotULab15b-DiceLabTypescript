var Die = (function () {
    function Die() {
    }
    Die.prototype.add = function () {
        this.div = document.createElement('div');
        this.div.className = 'dieDesign';
        var addSingleDie = document.getElementById('mainDiv');
        addSingleDie.appendChild(this.div);
        this.roll();
    };
    Die.prototype.roll = function () {
        var dieNumber = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = String(dieNumber);
        this.value = dieNumber;
    };
    return Die;
}());
function addDie() {
    var newDie = new Die();
    newDie.add();
    diceValue.push(newDie);
}
function rollDice() {
    for (var i = 0; i < diceValue.length; i++) {
        var diceRoll = diceValue[i];
        diceRoll.roll();
    }
}
function sumDice() {
    var total = 0;
    for (var i = 0; i < diceValue.length; i++) {
        total += diceValue[i].value;
    }
    alert('The sum of the dice is ' + total);
}
var diceValue = [];
