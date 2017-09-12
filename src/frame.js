var Frame = function(frameNumber) {
  this.frameNumber = frameNumber;
  this.bonus = 0;
};

Frame.prototype.recordBall1 = function(number){
  this.ball1 = parseInt(number);
};

Frame.prototype.recordBall2 = function(number){
  this.ball2 = parseInt(number);
};

Frame.prototype.recordBall3 = function(number){
  this.ball3 = parseInt(number);
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

Frame.prototype.updateWithBonus = function(bonus){
  this.bonus = bonus;
};

Frame.prototype.calcTotalFrameScore = function () {
  if (this.ball1) {
    this.frameScore = this.ball1;
  };
  if (this.ball2) {
    this.frameScore += this.ball2;
  };
  if (this.ball3) {
    this.frameScore += this.ball3;
  };
  if (this.bonus) {
    this.frameScore += this.bonus;
  };
};
