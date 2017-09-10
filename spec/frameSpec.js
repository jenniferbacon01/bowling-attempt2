describe('Frame', function() {
  var frame;


  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with ball1', function(){
    expect(frame.ball).toEqual(1);
  });

  it('records a score for ball1', function(){
    frame.recordBowl(4);
    expect(frame.ball1).toEqual(4);
  });

  it('records a score for ball2', function(){
    frame.recordBowl(4);
    frame.recordBowl(4);
    expect(frame.ball2).toEqual(4);
  });



});
