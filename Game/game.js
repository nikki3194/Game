<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
<script type="text/javascript">
	function computerPlay(){
		var myOptions = ['rock', 'paper', 'scissors'];
		var randomOption = myOptions[Math.floor(Math.random() * myOptions.length)];
		return randomOption;
    }
    computerPlay()
    function playRound(playerSelection, computerSelection){
    	if (playerSelection === computerSelection) {
    		return 0;
    	}
    	if (playerSelection == 'rock' && computerSelection == 'paper') {
    		return 1;
    	}
    	if (playerSelection == 'paper' && computerSelection == 'scissors'){
    		return 1;
    	}
    	if (playerSelection == 'paper' && computerSelection == 'scissors'){
    		return 1;
    	}
    	if (playerSelection ==  'scissors' && computerSelection == 'rock'){
    		return 2;
    	}
    	if (playerSelection == 'rock' && computerSelection == 'scissors'){
    		return 2;
    	}
    	
    	if (playerSelection == 'scissors' && computerSelection == 'paper'){
            return 2;
    	}
    }
    function game(){
    	var playerScore = 0 , computerScore = 0;
    	for (round = 1 ; round <= 3; round++)
    	{
    	    const playerChoice = prompt('Pick one : Rock, Paper, Scissors');
    	    const computerChoice = computerPlay();
    	    var result = playRound(playerChoice,computerChoice);

    	    if (result == 1){
               playerScore++;
    	    }
    	    else if (result == 2){
               computerScore++;
    	    }

    }
    if (playerScore > computerScore) {
    	console.log('you won');
    }
    else if (playerScore === computerScore){
    	console.log('It is a tie');
    }
    else{
    	console.log('you lose :(');
    }
    }
    game();
</script>
</body>
</html>