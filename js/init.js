(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.slider').slider({indicators:true});
    $('.parallax').parallax();
    sideBarInit();
    sliderInit();
    collapsibleInit();
    $('#comment').characterCounter();
  }); // end of document ready
})(jQuery); // end of jQuery name space
