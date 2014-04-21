$(function() {
  
  $('.open_menu').click(function(e) {
    var id = $(this).attr('id');
    var pos = $(this).offset();
    var height = $(this).height();
    var winH = $(window).height();
    var menu = $('#' + id + '.menu');
    var menuH = menu.height();
    if (winH - pos.top - height - menuH - 30 > 0) {
    $('#' + id + '.menu').toggle().css({
      top: pos.top + height + 10,
      left: pos.left,
    }); } else {
     $('#' + id + '.menu').toggle().css({
      top: pos.top - 10 - menuH,
      left: pos.left,
    }); };
  });
  
  $(document).mouseup(function (e)
    {
      var container = $(".menu");
      if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.hide();
      }
  });
  
});