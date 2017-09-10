var ScoreCard = function () {
  this.results = [];
  this.score = 0;
  this.frames = [];
};

ScoreCard.prototype.recordFrame = function(frame){
  this.frames.push(frame);
};

ScoreCard.prototype.newFrame = function(frame){
  this.frame = new Frame();
};

// ScoreCard.prototype.calculateScore = function(ball, pins, hasSpare, hasStrike) {
//   if ((hasStrike === true)||(hasSpare === true && ball === 1)){
//     this.score = pins * 2;
//   }else{
//       this.score = pins;
//   };
//
// };

// ScoreCard.prototype.recordScore = function(score){
//   this.results.push(score);
// };

ScoreCard.prototype.calcTotal = function(){
  this.total = 0;
  for (var scoreIndex =0; scoreIndex < this.results.length; scoreIndex++){
    this.total = this.total + this.results[scoreIndex];
  };
};
