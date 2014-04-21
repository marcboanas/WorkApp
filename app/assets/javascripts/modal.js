$(function() {
  var bodyH = $('.modal_body_scroll_wrapper').outerHeight(true);
  var scrollableH = $('.modal_body').outerHeight(true);
  var scrollH = bodyH / (scrollableH/bodyH);
  
  if (scrollableH <= bodyH) {
    $('.modal_body_scroll_handle_inner').hide();  
  }
  
  function dragging(){
    var bodyH = $('.modal_body_scroll_wrapper').outerHeight(true);
    var scrollableH = $('.modal_body').outerHeight(true);
    var scrollPos = $('.modal_body_scroll_handle_inner').position().top;   
    $('#modal_body').css({top: -(scrollPos*(scrollableH/bodyH)-1)});
  }
  
  $('.modal_body_scroll_handle').height(scrollH);
  
  $('.modal_body_scroll_handle_inner').draggable({
    axis: 'y',
    containment: '.modal_body_scroll_bar',
    drag: function() {
         dragging()
    }
  });
  
  $('.dialog_tabs a').click(function() {
  var id = $(this).attr('id');
    $('.modal_pane').each(function() {
      $(this).removeClass('active_pane');
    });
    $('.dialog_tabs a').each(function() {
    $(this).removeClass('active');
    });
    $('div#' + id).addClass('active_pane');
    $(this).addClass('active');
    var bodyH = $('.modal_body_scroll_wrapper').outerHeight(true);
    var scrollableH = $('.modal_body').outerHeight(true);
    var scrollH = bodyH / (scrollableH/bodyH);
    $('.modal_body_scroll_handle').height(scrollH);
    if (scrollableH <= bodyH) {
      $('.modal_body_scroll_handle_inner').hide();  
    } else {
      $('.modal_body_scroll_handle_inner').show();
    }
    $('#modal_body').css({top: 0});
  });
  $('.modal_open').click(function() {
    var modal_id = $(this).attr('id');
    $('.modal_window').each(function() {
      $(this).hide();
    });
    $('#modal_cover').fadeIn("fast", function() {
      $('#' + modal_id + '.modal_window').fadeIn("fast", function() {
      var top_margin = 20 + parseInt($(this).css('margin-top'),10) - $(this).offset().top
      $(this).css("margin-top",top_margin).delay(1000).css('opacity',1);
      var bodyH = $('.modal_body_scroll_wrapper').outerHeight(true);
      var scrollableH = $('.modal_body').outerHeight(true);
      var scrollH = bodyH / (scrollableH/bodyH);
      $('.modal_body_scroll_handle').height(scrollH);
      if (scrollableH <= bodyH) {
        $('.modal_body_scroll_handle_inner').hide();  
      } else {
        $('.modal_body_scroll_handle_inner').show();
      }
      });
    });  
  });
  $('button.close, #modal_cover').click(function() {
    $('#modal_cover').fadeOut("fast");
    $('.modal_window').fadeOut("fast");
  });
});