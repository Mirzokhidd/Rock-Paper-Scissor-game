var plays = ['<a href="#"><img src="rock.png"/></a>', '<a href="#"><img src="scissor.png"/></a>', '<a href="#"><img src="paper.png"/></a>'];
var results = document.getElementById("result");
var overallResults = document.getElementById("overallResult");
var random = document.getElementById("random");
var scorePlayer = 0;
var scoreComputer = 0;
var scorePlacePlayer = document.getElementById("scorePlayer");
var scorePlaceComputer = document.getElementById("scoreComputer");


//Rocks
function playRock() {
    switch ( random.innerHTML =  plays[Math.floor(Math.random() * plays.length)]) {
    //Draw for Rock
        case '<a href="#"><img src="rock.png"/></a>':
        results.innerHTML = "Draw";
        break;

    //Lose for Rock
     case '<a href="#"><img src="paper.png"/></a>': 
        results.innerHTML = "Lose";
        //Player loses score
        scorePlayer--;
        scorePlacePlayer.innerHTML = scorePlayer;  

        if (scorePlayer == -1) {
            scorePlayer++;
            scorePlacePlayer.innerHTML = scorePlayer;
        };
        //Computer gets score
        scoreComputer++;
        scorePlaceComputer.innerHTML = scoreComputer;
        break;

    //Win for Rock
    case '<a href="#"><img src="scissor.png"/></a>':
        results.innerHTML = "Win";
        //Computer loses score
        scoreComputer--;
        scorePlaceComputer.innerHTML = scoreComputer;

        if (scoreComputer == -1) {
            scoreComputer++;
            scorePlaceComputer.innerHTML = scoreComputer;
        };
        
        //Player gains a score
        scorePlayer++;
        scorePlacePlayer.innerHTML = scorePlayer;
        break;
    };

    //Winner Results
    if ( scoreComputer == 5) {
        overallResult.innerHTML = "COMPUTER IS THE WINNER";
        scoreComputer = 0;
        scorePlayer = 0;
    } else if(scorePlayer == 5) {
        overallResult.innerHTML = "PLAYER IS THE WINNER";
        scoreComputer = 0;
        scorePlayer = 0;
    };
};


//Paper
function playPaper() {
    switch ( random.innerHTML =  plays[Math.floor(Math.random() * plays.length)]) {
    
    //Win for Paper
    case '<a href="#"><img src="rock.png"/></a>':
        results.innerHTML = "Win";
        //Computer loses score
        scoreComputer--;
        scorePlaceComputer.innerHTML = scoreComputer;

        if (scoreComputer == -1) {
            scoreComputer++;
            scorePlaceComputer.innerHTML = scoreComputer;
        };
        
        //Player gains a score
        scorePlayer++;
        scorePlacePlayer.innerHTML = scorePlayer;
        break;
    
    // Draw for paper
    case '<a href="#"><img src="paper.png"/></a>': 
        results.innerHTML = "Draw";
        break;

    //Lose for Paper
    case '<a href="#"><img src="scissor.png"/></a>':
        results.innerHTML = "Lose";
        //Player loses score
            scorePlayer--;
            scorePlacePlayer.innerHTML = scorePlayer;

            if (scorePlayer == -1) {
                scorePlayer++;
                scorePlacePlayer.innerHTML = scorePlayer;
            };
        //Computer gets score
        scoreComputer++;
        scorePlaceComputer.innerHTML = scoreComputer;
        
        break;
    };

     //Winner Results
     if ( scoreComputer == 5) {
        overallResult.innerHTML = "COMPUTER IS THE WINNER";
        scoreComputer = 0;
        scorePlayer = 0;
    } else if(scorePlayer == 5) {
        overallResult.innerHTML = "PLAYER IS THE WINNER";
        scoreComputer = 0;
        scorePlayer = 0;
    };
};





function playScissor() {
    switch ( random.innerHTML =  plays[Math.floor(Math.random() * plays.length)]) {
    case '<a href="#"><img src="rock.png"/></a>':
        results.innerHTML = "Lose";
        //Player loses score
            scorePlayer--;
            scorePlacePlayer.innerHTML = scorePlayer;
        
            if (scorePlayer == -1) {
                scorePlayer++;
                scorePlacePlayer.innerHTML = scorePlayer;
            };
        //Computer gets score
        scoreComputer++;
        scorePlaceComputer.innerHTML = scoreComputer;
        break;
    case '<a href="#"><img src="paper.png"/></a>': 
        results.innerHTML = "Win";
        //Computer loses score
        scoreComputer--;
        scorePlaceComputer.innerHTML = scoreComputer;

        if (scoreComputer == -1) {
            scoreComputer++;
            scorePlaceComputer.innerHTML = scoreComputer;
        };
     
        //Player gains a score
        scorePlayer++;
        scorePlacePlayer.innerHTML = scorePlayer;
        break;
    case '<a href="#"><img src="scissor.png"/></a>':
        results.innerHTML = "Draw";
        break;
    };

     //Winner Results
     if ( scoreComputer == 5) {
        overallResult.innerHTML = "COMPUTER IS THE WINNER";
        scoreComputer = 0;
        scorePlayer = 0;
    } else if(scorePlayer == 5) {
        overallResult.innerHTML = "PLAYER IS THE WINNER";
        scoreComputer = 0;
        ScorePlayer = 0;
    };
};
