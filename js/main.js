<<<<<<< HEAD
// Dropdown
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
// Modile Click On Burger Start
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
// Modile Click On Burger End
=======
// Dropdown
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
// Modile Click On Burger Start
$(".burger").click(
  function () {
    if ($(".menu").hasClass('d-none')) {
      $(".menu").removeClass("d-none");
      $(".cart").addClass("d-none");
      $(".catalog").addClass("w-100");
    }
    else{
      $(".menu").addClass("d-none");
      $(".cart").removeClass("d-none");
      $(".catalog").removeClass("w-100");
    }
  }
)
// Modile Click On Burger End
>>>>>>> 6530de1a6fc496fd44a1c40ec7e0c783186fdd5d
