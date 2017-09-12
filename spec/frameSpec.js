describe('Frame', function() {
  var frame;
  describe('first frame', function(){

    beforeEach(function() {
      frame = new Frame(1);
    });

    it('records a score for ball1', function(){
      frame.recordBall1(4);
      expect(frame.ball1).toEqual(4);
    });

    it('records a score for ball2', function(){
      frame.recordBall2(3);
      expect(frame.ball2).toEqual(3);
    });

    it('calculates a spare', function(){
      frame.recordBall1(5);
      frame.recordBall2(5);
      frame.calculateSparesAndStrikes();
      expect(frame.isSpare).toEqual(true);
    });

    it('calculates a strike', function(){
      frame.recordBall1(10);
      frame.recordBall2(0);
      frame.calculateSparesAndStrikes();
      expect(frame.isStrike).toEqual(true);
    });

    it('updates a frame with a bonus', function(){
      frame.updateWithBonus(3);
      expect(frame.bonus).toEqual(3);
    });

    it('calculates a total score for the frame', function(){
      frame.recordBall1(3);
      frame.recordBall2(4);
      frame.updateWithBonus(6);
      frame.calcTotalFrameScore();
      expect(frame.frameScore).toEqual(13);
    })


  });

});
