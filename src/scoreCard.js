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
  this.currentFrame = undefined;
  this.currentFrameNumber ++;
};

ScoreCard.prototype.addBonuses = function() {
  if (this.frames.length !== 0){
    if (this.frames[this.frames.length-1].isStrike){
      this.frames[this.frames.length-1].updateWithBonus(this.currentFrame.ball1 + this.currentFrame.ball2);
    } else if (this.frames[this.frames.length-1].isSpare) {
      this.frames[this.frames.length-1].updateWithBonus(this.currentFrame.ball1);
    };
  };
};

ScoreCard.prototype.calcTotal = function() {
  for (var i = 0; i < this.frames.length; i++) {
    if (this.frames[i].ball1) {this.score += this.frames[i].ball1};
    if (this.frames[i].ball2) {this.score += this.frames[i].ball2};
    if (this.frames[i].ball3) {this.score += this.frames[i].ball3};
    if (this.frames[i].bonus) {this.score += this.frames[i].bonus};
  };
  if (this.currentFrame){
    if (this.currentFrame.ball1){this.score += this.currentFrame.ball1};
    if (this.currentFrame.ball2){this.score += this.currentFrame.ball2};
    if (this.currentFrame.ball3){this.score += this.currentFrame.ball3};
  };
};
