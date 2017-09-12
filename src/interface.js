$(document).ready(function() {
  var scorecard = new ScoreCard;

  function updateTable() {
    $('#results').find("tr:gt(0)").remove();
    scorecard.frames.forEach( function(frame){
      $('#results').append(
        '<tr><td>' + frame.frameNumber + '</td><td>1</td><td>' + frame.ball1 + '</td><td>' + frame.ball1 + '</td></tr>');
      $('#results').append(
        '<tr><td>' + frame.frameNumber + '</td><td>2</td><td>' + frame.ball2 + '</td><td>' + (frame.ball2 + frame.bonus) + '</td></tr>');
    });
    if (scorecard.currentFrame){
      $('#results').append(
        '<tr><td>' + scorecard.currentFrame.frameNumber + '</td><td>1</td><td>' + scorecard.currentFrame.ball1 + '</td><td>' + scorecard.currentFrame.ball1 + '</td></tr>')};
    $('#results').append('<tr><td></td><td></td><td>Total Score</td><td>' + scorecard.score + '</td></tr>');
  };

  // updateBallNumber();
  $('#numberofpins').on('submit', function(e) {
    e.preventDefault();
    var submits = $(this).data('submits');
    if (submits) {
      // ball2
      var pins = $('#numberofpins').find('input[name="pins"]').val();
      scorecard.currentFrame.recordBall2(pins);
      scorecard.currentFrame.calculateSparesAndStrikes();
      scorecard.addBonuses();
      scorecard.recordFrame();
      scorecard.calcTotal();
      updateTable();
    } else {
       // ball1
       var pins = $('#numberofpins').find('input[name="pins"]').val();
       scorecard.startNewFrame();
       scorecard.currentFrame.recordBall1(pins);
       scorecard.calcTotal();
       updateTable();
    }
    $(this).data("submits", !submits);
    });


});
