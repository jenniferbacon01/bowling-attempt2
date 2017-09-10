var Frame = function(frameNumber) {
  this.frameNumber = frameNumber;
};

Frame.prototype.recordBall1 = function(number){
  this.ball1 = number;
};

Frame.prototype.recordBall2 = function(number){
  this.ball2 = number;
};

Frame.prototype.calculateSparesAndStrikes = function(){
  if (this.ball1 === 10){
    this.isStrike = true;
  }else if (this.ball1 + this.ball2 === 10){
    this.isSpare = true;
  }else{
    this.isStrike = false;
    this.isSpare = false;
  };
};

Frame.prototype.updateWithSpareBonus = function(spareBonus){
  this.ball1 += spareBonus;
};

Frame.prototype.updateWithStrikeBonus = function(ball1StrikeBonus, ball2StrikeBonus){
  this.ball1 += ball1StrikeBonus;
  this.ball2 += ball2StrikeBonus;
};

// Frame.prototype.recordBall3 = function(number){
//   this.ball3 = parseInt(number);
// };
