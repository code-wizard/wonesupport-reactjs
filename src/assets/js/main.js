$(document).ready(function() {
  $("#search_field").keyup(function(){
    $(".et-field-search").addClass("has-history");
  });
  $("#search_field").blur(function(){
    $(".et-field-search").removeClass("has-history");
  });

  $("#registerForm").submit(function(e){
    $("#regSuccessModal").modal('show');
  });
  $('.wone-toggle-dropdown').click(function(e){
    $(this).parent('div').find('div.drop-menu').toggle();
  });

  $(window).scroll(function(){
    var navheight = $(window).height() - 10;
    if($(window).scrollTop() > navheight) {
      $('.wonesupport-profile-header').addClass('fixed');
    }else{
      $('.wonesupport-profile-header').removeClass('fixed');
    }
  });
  $("#wone_country").countrySelect();

  $(".wrapp__profile").click(function (e) {
    $(this).parent('div').find('.dropProfile').toggle();
  });

  if ($('#googleMap') == true){
    woneMap();
  }

});
function woneMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom: 10,
    disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
// Header Nav

var navBar = document.getElementById('top-filter');
var navTop = document.getElementById('top-nav');
var mapStick = document.querySelector('.map-view');

var stickyHead = '';

if(navTop){
  stickyHead = navBar.offsetTop;
}

window.onscroll = function () {
  if(this.stickyHead){
    topBarscroll();
  }
};

function topBarscroll(){
  if(window.pageYOffset >= stickyHead){
    navBar.classList.add('stickyHeader', 'animated', 'pulse');
    navTop.classList.add('stickyHeader', 'animated', 'pulse');
    mapStick.classList.add('stickMap', 'animated', 'pulse');
  }else{
    navBar.classList.remove('stickyHeader', 'animated', 'pulse');
    navTop.classList.remove('stickyHeader', 'animated', 'pulse');
    mapStick.classList.remove('stickMap', 'animated', 'pulse');
  }
}
