$('.adtitle').popover();
$('.select')
  .dropdown()
	;
// $('.login.modal.ui.mini')
//   .modal({
//     blurring: true
//   })
//   .modal('attach events', '.login', 'show')
//   .modal('setting', 'transition', 'vertical flip')
// ;
$('.coupled.modal')
  .modal({
    allowMultiple: false
  })
;
// attach events to buttons
$('.login.modal')
  .modal({
    blurring: true
  })
  .modal('attach events', '.login', 'show')
  .modal('setting', 'transition', 'vertical flip')
;
// show first now
$('.registration.modal')
 .modal({
    blurring: true
  })
  .modal('attach events', '.registration', 'show')
;

$('.postad.modal')
 .modal({
    blurring: true
  })
  .modal('attach events', '.postad', 'show')
  .modal('setting', 'transition', 'vertical flip')
;

$('.search-select')
  .dropdown()
;
$('.multi-select')
  .dropdown()
;
$('.tooltips')
  .popup({
    inline: true,
      position : 'right center'
  });

 $(function() {
            var offset = $(".sticky").offset();
            var topPadding = 15;
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    $(".sticky").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $(".sticky").stop().animate({
                        marginTop: 0
                    });
                };
            });
        });
 