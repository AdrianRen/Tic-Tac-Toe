(function(){
  let playerOne = '#player1';
  let playerTwo = '#player2';
  // set startPage with content of start.txt
  let startPage =
  `<div class="screen screen-start" id="start">
    <header>
      <h1>Tic Tac Toe</h1>
      <a href="#" class="button">Start game</a>
    </header>
  </div>`;
  // set resultPage with content of win.txt
  let resultPage =
  `<div class="screen screen-win" id="finish">
    <header>
      <h1>Tic Tac Toe</h1>
      <p class="message"></p>
      <a href="#" class="button">New game</a>
    </header>
  </div>`;
  //append them to to the body
  $('body').append(startPage)
           .append(resultPage);
  // hide them for future use
  $('#start, #finish').hide();

  /**
   *  Step 1: The startup screen should appear when the page *          loads
  **/
  (function () {
      $('#start').show();
      $('.button').on('click',function() {
        $('#start, #finish').hide();
        $('#board').show();
        $('.box').each(function() {
          this.style.backgroundImage = 'none';
          $(this).removeClass('box-filled-1')
                 .removeClass('box-filled-2');
        });
        // reset all the previous actived class
        $('li.players').removeClass('active');
        playGame();
      });
  }());

  /**
   * Step 2
  **/
  let playGame = function () {
    $('.box').each(function() {
      $(this).mouseenter(function() {
        /* Act on the event */
        if ($(playerOne).hasClass('active')) {
          this.style.backgroundImage = 'url("img/o.svg")';
        } else {
          this.style.backgroundImage = 'url("img/x.svg")'
        }
      });
      $(this).mouseleave(function() {
        /* Act on the event */
        this.style.backgroundImage = 'none';
      });
    });
    $('.box').click(function() {
      /* Act on the event */
      if($(playerOne).hasClass('active')){
        if ($(this).hasClass('box-filled-1') === false && $(this).hasClass('box-filled-2') === false) {
          $(this).addClass('box-filled-1');
          this.style.backgroundImage = 'url("img/o.svg")';
          $(this).unbind('mouseenter mouseleave');
          // checkWin();
          // nextTurn();
        }
      } else if($(playerTwo).hasClass("active")){
        if ($(this).hasClass('box-filled-1') === false && $(this).hasClass('box-filled-2') === false) {
          $(this).addClass('box-filled-2');
          this.style.backgroundImage = 'url("img/x.svg")';
          $(this).unbind('mouseenter mouseleave');
          // checkWin();
          // nextTurn();
        } 
      }
    });
  }
}());
