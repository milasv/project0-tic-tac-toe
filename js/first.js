function startGame() {

            for (var i = 1; i <= 9; i = i + 1) {
                clearBox(i);
            }

            document.turn = "X";
            if (Math.random() < 0.5) {
                document.turn = "O";
            }
            document.winner = null;
            setMessage(document.turn + " " + "start");
        }

        function setMessage(msg) {
            document.getElementById("message").innerText = msg;
        }

        function nextMove(square) {
            if (document.winner != null) {
                setMessage(document.winner + "Game over. Start again");
            } else if (square.innerText == "") {
                square.innerText = document.turn;
                switchTurn();
            } else {
                setMessage("Already used!");
            }
        }

        function switchTurn() {

            if (checkForWinner(document.turn)) {
                setMessage(document.turn + " " + "is the Winner!");
                document.winner = document.turn;{
const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.top = '0px';
const catFall = function() {
  var oldTop = parseInt(img.style.top);
  var newTop = oldTop + 1;
  img.style.top = newTop + 'px';
  if (newTop > 200) {
      clearInterval( timerID2 );
     }
};
const timerID2 = setInterval(catFall, 10);
                }
            } else if (document.turn == "X") {
                document.turn = "O";
                setMessage("Go '0'");
            } else {
                document.turn = "X";
                setMessage("Go 'X'");
            }
        }

        function checkForWinner(move) {
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

        function checkRow(a, b, c, move) {
            var result = false;
            if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
                result = true;
            }
            return result;
        }

        function getBox(number) {
            return document.getElementById("s" + number).innerText;
        }

        function clearBox(number) {
            document.getElementById("s" + number).innerText = "";
        }
