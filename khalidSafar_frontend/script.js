let countdown;
let time = 10; // 10 minutes in seconds

let arr='';
let data;
function fetchData(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'text.txt', true);
 
    xhr.onload = function () {
        if (xhr.status === 200) {
            data = xhr.responseText.split("\n");
            // var stringText = xhr.responseText;
            var teamDataElementA = document.getElementById('teamA');
            teamDataElementA.textContent = data[0];
            var teamDataElementB = document.getElementById('teamB');
            teamDataElementB.textContent = data[1];
        } else {
            console.error('Failed to load team data.');
        }
    };

    xhr.onerror = function () {
        console.error('Network error occurred.');
    };
 
    xhr.send();
}
fetchData();


function startTimer() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        const minutes = Math.floor(time / 60);
        let seconds = time ;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById('timer').innerText = `0${minutes}:${seconds}`;
        if (time === 0) {
            clearInterval(countdown);
            result();
        } else {
            time--;
        }
    }, 1000);
}

function incrementScore(team) {
    const scoreElement = document.getElementById(team);
    const currentScore = parseInt(scoreElement.innerText);
    scoreElement.innerText = currentScore + 1;
}

function resetScoreboard() {
    clearInterval(countdown);
    document.getElementById('timer').innerText = '00:10';
    document.getElementById('teamAScore').innerText = '0';
    document.getElementById('teamBScore').innerText = '0';
    time = 10;
}

function result(){
    document.getElementById('result').classList.remove('hidden');
    const scoreOfB =document.getElementById('teamBScore');
    const scoreOfA = document.getElementById('teamAScore');
    let currentBscore=0;
    let currentAscore=0;
    currentBscore = parseInt(scoreOfB.innerText);
    currentAscore = parseInt(scoreOfA.innerText);
    if(currentAscore>currentBscore){
        document.getElementById('showResult').innerHTML="<strong>Team A Wins,Congrats</strong>";
    } else if (currentAscore===currentBscore){
        document.getElementById('showResult').innerHTML="<strong>Its a tie,No winner No loser</strong>";
    }else {
        document.getElementById('showResult').innerHTML="<strong>Team B Wins,Congrats</strong>";
    }
}
