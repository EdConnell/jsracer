// 

function Game(playerOne, playerTwo, id) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.id = id;
};

Game.prototype.onKeyUp = function(event) {
  if (event == 39) {
      this.playerOne.position++;
      // alert(this.playerOne.position);
      
      this.finish(this.playerOne);
      this.render("#player_one_strip");
  };
  if (event == 37){
    this.playerTwo.position++;
    // alert(this.playerTwo.position);
    this.finish(this.playerTwo);
    this.render("#player_two_strip");
    
  };
};

Game.prototype.finish = function(player) {
  if(player.position >= 19){
 
    $.post('/winner', {winner: player.id, id: game.id}, function(response) {
      window.location.href = response;
    });
  };
};

Game.prototype.render = function(raceTrack) {
  var active = $(raceTrack).find(".active")
  $(active).removeClass("active");
  $(active).next().addClass("active");
}

function Player(name, id) {
  this.name = name;
  this.id = id;
  this.position = 0;
};



$(document).ready(function() {
 
  $(document).on('keyup', function(event) {
    game.onKeyUp(event.which);
  });
});

