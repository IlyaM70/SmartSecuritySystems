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
