$(document).ready(function(){
  $("section[arial-label='create-form']").hide();
  $("div[arial-label='adminOnline']").hide();
  $('.call_dropdown').hide();

  $('.custom-toggle').click(function(e){
    e.preventDefault();
    $(this).parent('div').find('.custom-dropdown').toggle();
  });

  $('#newDept').click(function(e) {
    e.preventDefault();
    $("section[arial-label='create-form']").show();
    $("section[arial-label='panel-listing']").hide();
  })

  $('#close-form').click(function(e){
    $(this).closest('section').hide();
    $("section[arial-label='panel-listing']").show();
  });

  $('#purchase').click(function(e){
    $('#purchase_panel').toggle();
    $('#payment_panel').toggle();
  });
  $("#cancel_purchase").click(function(){
    $('#purchase_panel').toggle();
    $('#payment_panel').toggle();
  });
  $('#add_coupon').click(function(){
    $('.coupon_input').toggle();
  });

  $('#select-status').change(function(){

    const availabilityStatus = $(this).find("option:selected").text();

    // var availabilityStatus = $(this).find("option:selected").text();

    if(availabilityStatus === "Online"){
      $("div[arial-label='adminOnline']").show();
      $("div[arial-label='adminOffline']").hide();
      $(".status-call").addClass('online');
      console.log(availabilityStatus);

    }else if(availabilityStatus === "Offline"){
      $("div[arial-label='adminOnline']").hide();
      $("div[arial-label='adminOffline']").show();
      $(".status-call").removeClass('online');
    }
  });


  $("#viewToggle").click(function () {
    $('.call__overlay').toggleClass("small-size");
    $(this).find('.-icon i').toggleClass("expand-icon");
    $(this).find('.-icon i').toggleClass("resize-icon");
  })

  $(".toggleDropdownTrigger").click(function(e){
    e.preventDefault();
    $(this).closest('li').find('.call_dropdown').toggle();
  });

  $(".cancel__call").click(function(){
    $('.call__overlay').hide();
  })

  // Call initiator
  $('#call_init').click(function(e){
    e.preventDefault();
    $('.call__overlay').show();
    $(".call__overlay").addClass('animated fadeIn');
    $('.call_dropdown').hide();
  });

  $('#viewUser').click(function(){
    $('.wone__right-view').addClass('animated slideInRight').toggle();
  })

})

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan 10', "00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"],
    datasets: [{
      // label: '',
      data: []
    }]
  },
  options: {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  }
  // options: options
});

$('.datepicker-here').datepicker({
  language: 'en',
  minDate: new Date() // Now can select only dates, which goes after today
})
