// Dropdown
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
// Modile Click On Burger
$(".burger").click(
  function () {
    if ($(".menu").hasClass('d-none')) {
      $(".menu").removeClass("d-none");
      $(".cart").addClass("d-none");
      $(".catalog").addClass("w-100");
      $(".burger img").attr('src','img/icons/close.svg');
    }
    else{
      $(".menu").addClass("d-none");
      $(".cart").removeClass("d-none");
      $(".catalog").removeClass("w-100");
      $(".burger img").attr('src','img/icons/menu.svg');
    }
  }
)


//Reviews Carousel 
$(function() {
  $('.owl-carousel').owlCarousel({
    margin: 8,
    loop: true,
    items: 2.2,
    autoplay:true,
    responsive : {
      600 : {
        items:3.2
      },
      768 : {
        items:4,
      },
      992 : {
        items:4,
        margin: 16
      },
      992 : {
        items:5,
        margin: 16
      },
    }
    
  });
});
