var Frame = function() {
  this.ball = 1;
};

// Frame.prototype.recordBall1 = function(number){
//   this.ball1 = number;
// };

Frame.prototype.recordBowl = function(number) {
  if (this.ball === 1){
    this.ball1 = parseInt(number);
  }else if (this.ball === 2){
    this.ball2 = parseInt(number);
  }else if (this.ball === 3){
    this.ball3 = number;
  };
  this.ball ++;
};
