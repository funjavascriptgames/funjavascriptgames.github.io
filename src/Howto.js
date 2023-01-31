Ball.Howto = function (game) {};
Ball.Howto.prototype = {
  create() {
    this.buttonContinue = this.add.button(
      0,
      0,
      "screen-howtoplay",
      this.startGame,
      this
    );
  },
  startGame() {
    this.game.state.start("Game");
  },
};
