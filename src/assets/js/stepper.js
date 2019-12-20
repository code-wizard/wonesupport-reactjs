$(document).ready(function(){
  var stepper = new Stepper($('.bs-stepper')[0]);
  $('.next').click(function(){
    stepper.next();
  });
  $('.previous').click(function(){
    stepper.previous();
  });

  // Error View Padd

});
