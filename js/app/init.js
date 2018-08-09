(function($){
    $(function(){
  
      $('.sidenav').sidenav(
      {
          menuWidth: 300, // Default is 300
          edge: 'right', // Choose the horizontal origin
          draggable: true, // Choose whether you can drag to open on touch screens
        }
      );

      $(".dropdown-trigger").dropdown({
        hover: true,
        constrainWidth: false,
        alignment: 'right'
      });

      $(document).ready(function(){
        $('.slider').slider();
      });
    }); // end of document ready
})(jQuery); // end of jQuery name space