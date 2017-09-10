describe('ScoreCard', function() {
  var scorecard;
  var frame;


  beforeEach(function() {
    scorecard = new ScoreCard();
    frame = {
      ball1: 5,
      ball2: 5,
      isSpare: true,
      updateWithSpareBonus: function(number){
        this.spareBonusDone = true;
      }
    };
    frame2 = {
      ball1: 3,
      ball2: 4
    };
    frame3 = {
      ball1: 10,
      ball2: 0,
      isSpare: true,
      updateWithStrikeBonus: function(number){
        this.strikeBonusDone = true;
      }
    };
    frame4 = {
      ball1: 2,
      ball2: 5
    };
  });

  it('starts with a zero score, on Frame 1 with no spares and strikes from the previous frame', function(){
    expect(scorecard.score).toEqual(0);
    expect(scorecard.currentFrameNumber).toEqual(1);
  });

  it('starts a new frame', function(){
    scorecard.startNewFrame(frame);
    expect(scorecard.currentFrame).toEqual(frame);
  });

  it('records a frame', function(){
    scorecard.recordFrame(frame);
    expect(scorecard.frames[scorecard.frames.length-1]).toEqual(frame);
  });

  it('adds bonus scores for spares to the previous frame after current frame has been played', function(){
    scorecard.recordFrame(frame);
    scorecard.startNewFrame(frame2);
    scorecard.addSpareBonusToPreviousFrame(frame2.ball1);
    expect(frame.spareBonusDone).toEqual(true);
  });

  it('adds bonus scores for strikes to the previous frame after current frame has been played', function(){
    scorecard.recordFrame(frame3);
    scorecard.startNewFrame(frame2);
    scorecard.addStrikeBonusToPreviousFrame(frame2.ball1, frame2.ball2);
    expect(frame3.strikeBonusDone).toEqual(true);
  });

  it('calculates the total score', function(){
    scorecard.recordFrame(frame2);
    scorecard.recordFrame(frame4);
    scorecard.calcTotal();
    expect(scorecard.score).toEqual(14);
  });

});
