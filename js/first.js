let board = [];
function startGame() { //function to randomly change order of the first player X  or O after pressing start again button
            for (var i = 1; i <= 9; i++) {
                clearBox(i); // activate clear box fuction in a loop (9)
            }
            board = [];

            document.turn = "X";
            if (Math.random() < 0.5) { //math random 0-1 ()
                document.turn = "O";
            }
            document.winner = null;
            setMessage(document.turn + " " + "start");
            $('#cat').css('visibility', 'hidden'); //cat image disappearing
}

        function setMessage(msg) { //Function to set message at the top
            document.getElementById("message").innerText = msg;
        }

        function nextMove(square) {
          console.log(square);
            if (document.winner != null) {// check if there is a winer
                setMessage("Game over. Start again"); //if clicking after the game ends
            } else if (square.innerText == "") {
                console.log('hello?');
                square.innerText = document.turn; //if square is empty records next move
                board.push(document.turn)
                switchTurn();//activate the function to switch a turn
            } else {
                setMessage("Already used!");//if clicking on used square
            }
        }

        function switchTurn() { //function to switch turn and show cat dance if someone wins

            if (!checkForWinner(document.turn) && board.length >= 9) {
              console.log("It's a draw");
              setMessage("It's a draw");
              return;
            }

            if (checkForWinner(document.turn)) {
                setMessage(document.turn + " " + "is the Winner!");//display the message who is the winner
                document.winner = document.turn; {
                  $('#cat').css('visibility', 'visible');
                  // $('#cat').attr('src', 'https://99px.ru/sstorage/86/2017/08/image_862008170724122647718.gif')//changing 0px image to cat image (picture showing)
const img = document.getElementsByTagName('img')[0]; //cat falls
img.style.position = 'absolute';
img.style.top = '0px';
// img.style.display = "visible";
const catFall = function() {
  var oldTop = parseInt(img.style.top);
  var newTop = oldTop + 1;
  img.style.top = newTop + 'px';
  if (newTop > 230) {
      clearInterval( timerID2 );
     }
};
const timerID2 = setInterval(catFall, 10); //stop cat falling
                }
            } else if (document.turn == "X") {//changing turn (if now x turn, next 0)
                document.turn = "O";
                setMessage("Go '0'");
            } else {
                document.turn = "X";
                setMessage("Go 'X'");
            }
        }

        function checkForWinner(move) { //check for all possible winning scenarios
            var result = false;
            if (checkRow(1, 2, 3, move) ||
                checkRow(4, 5, 6, move) ||
                checkRow(7, 8, 9, move) ||
                checkRow(1, 4, 7, move) ||
                checkRow(2, 5, 8, move) ||
                checkRow(3, 6, 9, move) ||
                checkRow(1, 5, 9, move) ||
                checkRow(3, 5, 7, move)) {

                result = true;
            }

            return result;
        }

        function checkRow(a, b, c, move) { //to check same values in a row, column or diagonal from checkForWinner function inputs
            var result = false;
            if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
                result = true; //box = s1,2,3...
            }
            return result;
        }

        function getBox(number) { //get the value from each square
            return document.getElementById("s" + number).innerText;
        }

        function clearBox(number) { /// set null value in square
            document.getElementById("s" + number).innerText = ""; //used to clear all squares before game starts
        }
