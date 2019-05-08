let playerX = 0;
let playerO = 0;

const game = {
    startGame: true,
    lastClick: 0,
    turn: 'X',
    board: [],
    checkWinner: function () {
        //Check the winner and set background color and add the score
        if (game.board[0] === game.board[1] && game.board[1] ===
            game.board[2] && game.board[1]) {
            $('#box-1,#box-2,#box-3').css('background-color', 'green');
            $('#main-box').css('box-shadow', '2px -1px 18px 22px green');
            $('.inner-box').off();
            game.addScore();
            game.lastClick = 0;
            $("#play-agin").show();
        } else if (game.board[3] === game.board[4] && game.board[4] ===
            game.board[5] && game.board[4]) {
            $('#box-4,#box-5,#box-6').css('background-color', 'green');
            $('#main-box').css('box-shadow', '2px -1px 18px 22px green');
            $('.inner-box').off();
            game.addScore();
            game.lastClick = 0;
            $("#play-agin").show();
        } else if (game.board[6] === game.board[7] && game.board[7] ===
            game.board[8] && game.board[7]) {
            $('#box-7,#box-8,#box-9').css('background-color', 'green');
            $('#main-box').css('box-shadow', '2px -1px 18px 22px green');
            $('.inner-box').off();
            game.addScore();
            game.lastClick = 0;
            $("#play-agin").show();
        } else if (game.board[0] === game.board[4] && game.board[4] ===
            game.board[8] && game.board[4]) {
            $('#box-1,#box-5,#box-9').css('background-color', 'green');
            $('#main-box').css('box-shadow', '2px -1px 18px 22px green');
            $('.inner-box').off();
            game.addScore();
            game.lastClick = 0;
            $("#play-agin").show();
        } else if (game.board[2] === game.board[4] && game.board[4] ===
            game.board[6] && game.board[4]) {
            $('#box-3,#box-5,#box-7').css('background-color', 'green');
            $('#main-box').css('box-shadow', '2px -1px 18px 22px green');
            $('.inner-box').off();
            game.addScore();
            game.lastClick = 0;
            $("#play-agin").show();
        } else if (game.board[0] === game.board[3] && game.board[3] ===
            game.board[6] && game.board[3]) {
            $('#box-1,#box-4,#box-7').css('background-color', 'green');
            $('#main-box').css('box-shadow', '2px -1px 18px 22px green');
            $('.inner-box').off();
            game.addScore();
            game.lastClick = 0;
            $("#play-agin").show();

        } else if (game.board[1] === game.board[4] && game.board[4] ===
            game.board[7] && game.board[4]) {
            $('#box-2,#box-5,#box-8').css('background-color', 'green');
            $('#main-box').css('box-shadow', '2px -1px 18px 22px green');
            $('.inner-box').off();
            game.addScore();
            game.lastClick = 0;
            $("#play-agin").show();
        } else if (game.board[2] === game.board[5] && game.board[5] ===
            game.board[8] && game.board[5]) {
            $('#box-3,#box-6,#box-9').css('background-color', 'green');
            $('#main-box').css('box-shadow', '2px -1px 18px 22px green');
            $('.inner-box').off();
            game.addScore();
            game.lastClick = 0;
            $("#play-agin").show();
        }
        //Alert will be shown when the current game is Tie
        if (game.lastClick === 9) {
            swal({
                title: "Tie",
                button: "Try Agin",
                restart: game.playAgin()
            });
            $("#play-agin").hide();
        }
    },

    play: function (e) {
        //Set the X as first player and O second Player
        $(e.target).children().text(game.turn);
        if (game.turn === 'X') {
            game.turn = 'O';
            $(e.target).off();
        } else if (game.turn === 'O') {
            game.turn = 'X';
            $(e.target).off();
        }
        game.board[$(e.target).attr('id')] = $(e.target).text().trim();
        //checkWinner function.
        game.lastClick++
        game.checkWinner();
    },
    playAgin: function () {
        //When user press Play Agine button reset everything.
        game.turn = 'X';
        game.lastClick = 0;
        $('.inner-box').on();
        $('.box').text('');
        $('.box').css('background-color', 'rgb(28, 2, 51)');
        game.board = [];
        $('.inner-box').on('click', game.play);
    },
    setWinLose: function () {
        //Control the text in the player menu to show score and text.
        if (playerO > playerX) {
            $('#p2-text').text(playerO);
            $('#p1-text').text(playerX);
            $('#p2').text('Palyer2 Score : ' + 'Winner');
            $('#p1').text('Palyer1 Score : ' + '')
        } else if (playerX > playerO) {
            $('#p1-text').text(playerX);
            $('#p2-text').text(playerO);
            $('#p1').text('Palyer1 Score : ' + 'Winner')
            $('#p2').text('Palyer2 Score : ' + '');
        } else {
            $('#p2').text('Palyer2 Score : ' + 'Tie');
            $('#p1').text('Palyer1 Score : ' + 'Tie')
            $('#p1-text').text(playerX);
            $('#p2-text').text(playerO);
        }
    },
    addScore: function () {
        //check if the winner was X or O to add the score.
        if (game.turn === 'X') {
            playerO++;

        } else {
            playerX++;
        }
        game.setWinLose();
    }

}
//hide the play agin button when page load
$("#play-agin").hide();

$('.inner-box').on('click', game.play);

//Playe agin button
$('#play-agin').on('click', function () {
    game.playAgin();
    $("#play-agin").hide();
    $('#main-box').css('box-shadow', '2px -1px 18px 22px rgba(184, 183, 183, 0.75)');

});
//Reset the score button 
$('#reset button').on('click', function () {
    playerO = 0;
    playerX = 0;
    $('#p1').text('Palyer1 Score : ');
    $('#p2').text('Palyer2 Score : ');
    $('#p2-text').text('');
    $('#p1-text').text('');
    $('#p1-text').text('');
    $('#p2-text').text('');

});