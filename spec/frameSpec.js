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
      frame.recordBall1(4);
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

    it('updates a frame with a spare bonus', function(){
      frame.recordBall1(5);
      frame.recordBall2(5);
      frame.calculateSparesAndStrikes();
      frame.updateWithSpareBonus(3);
      expect(frame.ball1).toEqual(8);
      expect(frame.ball2).toEqual(5);
    });

    it('updates a frame with a strike bonus', function(){
      frame.recordBall1(10);
      frame.recordBall2(0);
      frame.calculateSparesAndStrikes();
      frame.updateWithStrikeBonus(3, 4);
      expect(frame.ball1).toEqual(13);
      expect(frame.ball2).toEqual(4);
    });


  });

});
