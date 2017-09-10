var ScoreCard = function () {
  this.score = 0;
  this.frames = [];
  this.currentFrameNumber = 1;
};

ScoreCard.prototype.startNewFrame = function (frame = new Frame(this.currentFrameNumber) ) {
  this.currentFrame = frame;
};

ScoreCard.prototype.recordFrame = function(frame = this.currentFrame){
  this.frames.push(frame);
  this.currentFrameNumber ++;
};

ScoreCard.prototype.addSpareBonusToPreviousFrame = function(ball1 = this.currentFrame.ball1) {
  this.frames[this.frames.length-1].updateWithSpareBonus(this.currentFrame.ball1);
};


ScoreCard.prototype.addStrikeBonusToPreviousFrame = function(ball1 = this.currentFrame.ball1) {
  this.frames[this.frames.length-1].updateWithStrikeBonus(this.currentFrame.ball1, this.currentFrame.ball2);
};

ScoreCard.prototype.calcTotal = function() {
  for (var i = 0; i < this.frames.length; i++) {
    this.score += (this.frames[i].ball1 + this.frames[i].ball2);
  };
};
