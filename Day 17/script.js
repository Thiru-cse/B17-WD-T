document.getElementById("rollDice").addEventListener("click", ()=>{
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;
    

    const result = document.getElementById("result");
    
    if(dice1 > dice2){
        result.textContent = "Player 1 wins!";
    } else if(dice1 < dice2){
        result.textContent = "Player 2 wins!";
    } else {
        result.textContent = "It's a draw!";
    }
});