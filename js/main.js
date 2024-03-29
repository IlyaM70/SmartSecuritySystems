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
      $(".burger img").attr('src', 'img/icons/close.svg');
    }
    else {
      $(".menu").addClass("d-none");
      $(".cart").removeClass("d-none");
      $(".catalog").removeClass("w-100");
      $(".burger img").attr('src', 'img/icons/menu.svg');
    }
  }
)


//Reviews Carousel 
$(function () {
  $('.owl-carousel').owlCarousel({
    margin: 8,
    loop: true,
    items: 2.2,
    autoplay: true,
    responsive: {
      600: {
        items: 3.2
      },
      768: {
        items: 4,
      },
      992: {
        items: 4,
        margin: 16
      },
      992: {
        items: 5,
        margin: 16
      },
    }

  });
});


//////////////////////////// Price Range Start
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;


let plusLeft = 0;
let minusRight = 0;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {

    let minPrice, maxPrice;

    if (window.innerWidth < 1200) {
      //console.log("<1200");
      minPrice = parseInt(priceInput[0].value);
      maxPrice = parseInt(priceInput[1].value);



      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;

          // if ((minPrice / rangeInput[0].max) * 100 < 91) plusLeft=4;
          // if ((minPrice / rangeInput[0].max) * 100 < 84) plusLeft=3;
          // if ((minPrice / rangeInput[0].max) * 100 < 61) plusLeft=2;
          // if ((minPrice / rangeInput[0].max) * 100 < 45) plusLeft=1;
          // if ((minPrice / rangeInput[0].max) * 100 < 28) plusLeft=0;


          range.style.left = (((minPrice / rangeInput[0].max) * 100) + plusLeft) + "%";
        } else {
          rangeInput[1].value = maxPrice;


          // if (((maxPrice / rangeInput[1].max) * 100) > 9) minusRight = 4;
          // if (((maxPrice / rangeInput[1].max) * 100) > 16) minusRight = 3;
          // if (((maxPrice / rangeInput[1].max) * 100) > 40) minusRight = 2;
          // if (((maxPrice / rangeInput[1].max) * 100) > 55) minusRight = 1;
          // if (((maxPrice / rangeInput[1].max) * 100) > 77) minusRight = 0;


          range.style.right = (100 - minusRight - (maxPrice / rangeInput[1].max) * 100) + "%";
        }
      }
    }
    else {
      //console.log(">1200");
      minPrice = parseInt(priceInput[2].value);
      maxPrice = parseInt(priceInput[3].value);


      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[3].max) {
        if (e.target.className === "input-min") {
          rangeInput[2].value = minPrice;

          // if ((minPrice / rangeInput[0].max) * 100 < 91) plusLeft=4;
          // if ((minPrice / rangeInput[0].max) * 100 < 84) plusLeft=3;
          // if ((minPrice / rangeInput[0].max) * 100 < 61) plusLeft=2;
          // if ((minPrice / rangeInput[0].max) * 100 < 45) plusLeft=1;
          // if ((minPrice / rangeInput[0].max) * 100 < 28) plusLeft=0;


          range.style.left = (((minPrice / rangeInput[3].max) * 100) + plusLeft) + "%";
        } else {
          rangeInput[3].value = maxPrice;


          // if (((maxPrice / rangeInput[1].max) * 100) > 9) minusRight = 4;
          // if (((maxPrice / rangeInput[1].max) * 100) > 16) minusRight = 3;
          // if (((maxPrice / rangeInput[1].max) * 100) > 40) minusRight = 2;
          // if (((maxPrice / rangeInput[1].max) * 100) > 55) minusRight = 1;
          // if (((maxPrice / rangeInput[1].max) * 100) > 77) minusRight = 0;


          range.style.right = (100 - minusRight - (maxPrice / rangeInput[2].max) * 100) + "%";
        }
      }

    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {




    let minVal, maxVal;

    if (window.innerWidth < 1200) {
      minVal = parseInt(rangeInput[0].value);
      maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;




        // if ((minVal / rangeInput[0].max) * 100 < 91) plusLeft = 4;
        // if ((minVal / rangeInput[0].max) * 100 < 84) plusLeft = 3;
        // if ((minVal / rangeInput[0].max) * 100 < 61) plusLeft = 2;
        // if ((minVal / rangeInput[0].max) * 100 < 45) plusLeft = 1;
        // if ((minVal / rangeInput[0].max) * 100 < 28) plusLeft = 0;


        range.style.left = (((minVal / rangeInput[0].max) * 100) - plusLeft) + "%";





        // if (((maxVal / rangeInput[1].max) * 100) > 9) minusRight = 4;
        // if (((maxVal / rangeInput[1].max) * 100) > 16) minusRight = 3;
        // if (((maxVal / rangeInput[1].max) * 100) > 40) minusRight = 2;
        // if (((maxVal / rangeInput[1].max) * 100) > 55) minusRight = 1;
        // if (((maxVal / rangeInput[1].max) * 100) > 77) minusRight = 0;

        range.style.right = 100 - minusRight - ((maxVal / rangeInput[1].max) * 100) + "%";
      }

    }
    else {
      minVal = parseInt(rangeInput[2].value);
      maxVal = parseInt(rangeInput[3].value);


      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[2].value = maxVal - priceGap;
        } else {
          rangeInput[3].value = minVal + priceGap;
        }
      } else {
        priceInput[2].value = minVal;
        priceInput[3].value = maxVal;




        // if ((minVal / rangeInput[0].max) * 100 < 91) plusLeft = 4;
        // if ((minVal / rangeInput[0].max) * 100 < 84) plusLeft = 3;
        // if ((minVal / rangeInput[0].max) * 100 < 61) plusLeft = 2;
        // if ((minVal / rangeInput[0].max) * 100 < 45) plusLeft = 1;
        // if ((minVal / rangeInput[0].max) * 100 < 28) plusLeft = 0;


        range.style.left = (((minVal / rangeInput[2].max) * 100) - plusLeft) + "%";





        // if (((maxVal / rangeInput[1].max) * 100) > 9) minusRight = 4;
        // if (((maxVal / rangeInput[1].max) * 100) > 16) minusRight = 3;
        // if (((maxVal / rangeInput[1].max) * 100) > 40) minusRight = 2;
        // if (((maxVal / rangeInput[1].max) * 100) > 55) minusRight = 1;
        // if (((maxVal / rangeInput[1].max) * 100) > 77) minusRight = 0;

        range.style.right = 100 - minusRight - ((maxVal / rangeInput[3].max) * 100) + "%";
      }
    }


  });
});

//////////////////////////// Price Range End


///////////////////////////// Columns Toggler

let colsToggle = $(".cols-toggle");
let oneColBtnColor = $(".1-col-btn > g > path");
let manyColsBtnColor = $(".many-cols-btn > g > rect");
let grayDark = "#CCD5DB"; /* mid-grey-l */
let primaryColor = "#00A0E3";/* light-blue */
let card = $(".catalog-main__cads .card .row");
let cardCols = card.find(".col");
let cardLeftCol = ['col-4', 'col-sm-3', 'col-md-2'];
let cardRightCol = ["col-8", "col-sm-9", "col-md-10"];

$(".1-col-btn").click(function () {

  if (!colsToggle.hasClass("single")) {
    colsToggle.removeClass("row-cols-2 g-2 row-cols-md-3 g-md-3 row-cols-lg-4");
    colsToggle.addClass("row-cols-1 gy-2 single");
    oneColBtnColor.attr("fill", primaryColor);
    manyColsBtnColor.attr("fill", grayDark);
    card.removeClass("row-cols-1");
    card.addClass("row-cols-2");

    //////////// change cols
    for (let index = 0; index < cardCols.length; index++) {
      const element = cardCols[index];
      if (index % 2 == 0) {
        element.classList.add(...cardLeftCol);
      } else {
        element.classList.add(...cardRightCol);
      }
    }
  }
})

$(".many-cols-btn").click(function () {

  if (colsToggle.hasClass("single")) {
    colsToggle.removeClass("row-cols-1 gy-2 single");
    colsToggle.addClass("row-cols-2 g-2 row-cols-md-3 g-md-3 row-cols-lg-4");
    manyColsBtnColor.attr("fill", primaryColor);
    oneColBtnColor.attr("fill", grayDark);
    card.removeClass("row-cols-2");
    card.addClass("row-cols-1");
    //////////// change cols
    for (let index = 0; index < cardCols.length; index++) {
      const element = cardCols[index];
      if (index % 2 == 0) {
        element.classList.remove(...cardLeftCol);
      } else {
        element.classList.remove(...cardRightCol);
      }
    }
  }
})

////////////////////// Quantity Input///////////////
let min = 1;
let max = 1000;
$('.input-number-increment').click(function () {
  var $input = $(this).parents('.input-number-group').find('.input-number');
  var val = parseInt($input.val(), 10);
  if ($input.val() < max) $input.val(val + 1);
});

$('.input-number-decrement').click(function () {
  var $input = $(this).parents('.input-number-group').find('.input-number');
  var val = parseInt($input.val(), 10);
  if ($input.val() > min) $input.val(val - 1);
})

let quantity = $(".input-number");
quantity.change(function () {
  if (quantity.val() < min) {
    quantity.val(min);
  }
  if (quantity.val() > max) {
    quantity.val(max);
  }
});

//////////////// Reach Text
if ($('#reviewMessage').length) {
  let editor;
  ClassicEditor
    .create(document.querySelector('#reviewMessage'), {
      language: 'ru',
      toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],


    })
    .then(newEditor => {
      editor = newEditor;
    })
    .catch(error => {
      console.log(error);
    });

  ////// CKE editor validation

  $(".ckeditor-container").keyup(function (e) {
    //console.log("keydown");
    const editorData = editor.getData();
    // console.log(editorData);

    html = $(editorData).text();
    if ($.trim(html) == '' || $.trim(html) == ' ') {
      //console.log("html empty");
      $(".invalid-cke").css("display", "block");
    } else {
      //console.log("html NOT empty");
      $(".invalid-cke").css("display", "none");
    }
  });

  $("#reviewsAddBody").submit(function (e) {
    //console.log("keydown");
    const editorData = editor.getData();
    //console.log(editorData);

    html = $(editorData).text();
    if ($.trim(html) == '') {
      //console.log("html empty");
      $(".invalid-cke").css("display", "block");
    } else {
      // console.log("html NOT empty");
      $(".invalid-cke").css("display", "none");
    }
  });
}





//////////////// Input Validation Start

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated');

      $.each($(".input-form .invalid-feedback").closest(".input-wrapper"), function () {
        if ($(this).find(".invalid-feedback").css("display") == "flex") {
          $(this).closest(".input-wrapper").attr("style", "padding-bottom:20px");
          $(this).closest(".input-wrapper").find(".input-group").addClass("input-group-invalid");
        }
      });


    }, false)
  })
})()
$(".input-form .form-control")

//////////// Key Up in form
$(".input-form .form-control").keyup(function (e) {

  $.each($(".input-form .form-control"), function (indexInArray, valueOfElement) {

    //console.log("change");
    if ($(this).closest(".input-wrapper").find(".invalid-feedback").css("display") != "flex") {
      $(this).closest(".input-wrapper").attr("style", "padding-bottom:0px");
      $(this).closest(".input-wrapper").find(".input-group").removeClass("input-group-invalid");
    }
    else {
      $.each($(".input-form .invalid-feedback").closest(".input-wrapper"), function () {
        if ($(this).find(".invalid-feedback").css("display") == "flex") {
          $(this).closest(".input-wrapper").attr("style", "padding-bottom:20px");
          $(this).closest(".input-wrapper").find(".input-group").addClass("input-group-invalid");
        }
      });
    }

  });


});

//////////// Check Click
$(".input-form .form-check").click(function (e) {

  $.each($(".input-form .form-check"), function (indexInArray, valueOfElement) {

    //console.log("change");
    if ($(this).closest(".input-wrapper").find(".invalid-feedback").css("display") != "flex") {
      $(this).closest(".input-wrapper").attr("style", "padding-bottom:0px");
      $(this).closest(".input-wrapper").find(".input-group").removeClass("input-group-invalid");
    }
    else {
      $.each($(".input-form .invalid-feedback").closest(".input-wrapper"), function () {
        if ($(this).find(".invalid-feedback").css("display") == "flex") {
          $(this).closest(".input-wrapper").attr("style", "padding-bottom:20px");
          $(this).closest(".input-wrapper").find(".input-group").addClass("input-group-invalid");
        }
      });
    }

  });


});

/////////////////////////////////Ordering Page Validation

//////////////////
// 
// 
// 
// 
// 
// 
// 
// 
// 

//////////////////// Input Validation End



////////////////// Stop Dropdown on Desktop
//console.log(location.pathname);
if (location.pathname == "/" || location.pathname == "/index.php") {
  if ($(window).width() > 991) $("#header-dropdown-toggler").attr("data-bs-target", "#none")
  else $("#header-dropdown-toggler").attr("data-bs-target", "#catalog");
}

//////////////////////////// Hover DropDown

let dropdownParent = $(".hover-dropend");
let dropdownBtn = $(".hover-dropend .btn");


dropdownBtn.click(function (e) {
  dropdownBtn.css("border","none");
});

if ($(window).width() > 991) {
  dropdownParent.hover(function () {
    $(this).find('.btn').trigger("click");
    $(this).addClass('hover-border');
    
  }, function () {
    $(this).find('.dropdown-menu').removeClass("show");
    $(this).removeClass('hover-border');
  }
  );

  $(dropdownBtn).click(function (e) {
    dropdownBtn.css("box-shadow", "none");
  });

}

$(".catalog-item__text").click(function (e) {
  let link = $(this).attr("href");
  //console.log(link);
  window.location.href = link;
});

///////////////////// Input Group Focus
let inputGroup = $(".input-form .input-group");
let input = $(".input-form .form-control");
let inputLabel = $(".input-form .input-label");
let placeholder;

input.focus(function (e) {
  e.preventDefault();

  if (!$(this).closest(inputGroup).hasClass("delivery-adress-input")) {
    $(this).closest(inputGroup).css("padding", "0px 0px");
  }


  $(this).closest(inputGroup).addClass("input-group-focused");
  placeholder = $(this).closest(inputGroup).find(input).attr("placeholder")

  if ($(this).closest(inputGroup).find(input).attr("id") == "online_phone") {
    $(this).closest(inputGroup).find(input).attr("placeholder", "+7(___)___-__-__");
  }
  else {
    $(this).closest(inputGroup).find(input).attr("placeholder", "");
  }

  $(this).closest(inputGroup).find(inputLabel).css("display", "block");
});
input.focusout(function (e) {
  e.preventDefault();

  if (!$(this).closest(inputGroup).hasClass("delivery-adress-input")) {
    $(this).closest(inputGroup).css("padding", "11px 0px");
  }


  $(this).closest(inputGroup).removeClass("input-group-focused");
  $(this).closest(inputGroup).find(input).attr("placeholder", placeholder);
  $(this).closest(inputGroup).find(inputLabel).css("display", "none");
});

/////////// Date Focus Start

let date = $(".input-date");
let icon = $(".input-form .input-icon");
let dateString;
let day;
let month;
let year;

date.focus(function () {


  if (!date.val()) {
    dateString = date.val();
    day = dateString.split(".")[0];
    month = dateString.split(".")[1];
    year = dateString.split(".")[2];
    formatedDate = year + "-" + month + "-" + day;
    date.val(formatedDate);
  }

  $(this).attr("type", "date");
  $(this).closest(inputGroup).find(icon).css("display", "none");

});

date.focusout(function () {
  $(this).attr("type", "text");
  $(this).closest(inputGroup).find(icon).css("display", "block");


  dateString = date.val();
  year = dateString.split("-")[0];
  month = dateString.split("-")[1];
  day = dateString.split("-")[2];
  formatedDate = day + "." + month + "." + year;
  date.val(formatedDate);

  if (date.val() == "undefined.undefined.") {
    date.val("");
  }
});
/////////// Date Focus End


/////////////////////////////Phone Mask Start
function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    var range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
  }
}

function mask(e) {
  //console.log('mask',e);
  var matrix = this.placeholder,// .defaultValue
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function () {
  //var input = document.querySelector("#online_phone");
  //input.addEventListener("input", mask, false);


  var input = $("input[name='phone']");

  input.each(function (index, element) {
    element.addEventListener("input", mask, false);
  });


  //input.focus();
  //setCursorPosition(3, input);
});

/////////////////////////////Phone Mask End

///////////////////////////// Adress input Start

let readonly = $(".delivery-adress-input-readonly");

let changeAdress = $(".btn-edit");
let btnEdit = $("#btn-edit-edit");
let btnSave = $("#btn-edit-save");


let adressInput = $(".delivery-adress-input input");
let adressInputParent = $(".delivery-adress-input");

let focusClass = "focused";

let adressValue;


changeAdress.click(function (e) {
  e.preventDefault();

  //console.log(readonly.css("display"));

  if (readonly.css("display") == "block") {
    //console.log("true");

    // change edition
    readonly.css("display", "none");
    adressInput.removeClass("d-none");
    adressInput.focus();
    adressInput.addClass(focusClass);
    adressInputParent.addClass(focusClass);

    // change button
    btnEdit.css("display", "none");

    btnSave.addClass("d-flex");
    btnSave.removeClass("d-none");



  } else {


    //save input value
    console.log(adressInput.val());
    adressValue = adressInput.val();
    readonly.text(adressValue);

    // change edition
    readonly.css("display", "block");
    adressInput.addClass("d-none");
    adressInput.removeClass(focusClass);
    adressInputParent.removeClass(focusClass);

    // change button
    btnEdit.css("display", "flex");

    btnSave.removeClass("d-flex");
    btnSave.addClass("d-none");

  }

});


///////////////////////////// Adress input End






//////////////////////// Contacts Page Map Toggle///////////////////

let mapToggle1 = $("#map-toggle-1");
let mapToggle2 = $("#map-toggle-2");

let map1 = $("#map-1");
let map2 = $("#map-2");



mapToggle1.click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("active")) {

  } else {
    $(this).addClass("active");
    mapToggle2.removeClass("active");
    map2.removeClass("active");
    map1.addClass("active");
  }
});


mapToggle2.click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("active")) {

  } else {
    $(this).addClass("active");
    mapToggle1.removeClass("active");
    map1.removeClass("active");
    map2.addClass("active");
  }
});

//////////////////////// User Page Change info btn///////////////////


let userChangebtn = $(".your-account__btn");
let userMobileForm = $("#your-account__form-mobile");
let userMobileDesktop = $("#your-account__form-desktop");
let info = $(".your-account__info");

userChangebtn.click(function (e) {
  e.preventDefault();
  if (window.innerWidth < 768) {
    userMobileForm.css("display", "block");
    userChangebtn.css("display", "none");
    info.css("display", "none");
  } else {
    userMobileDesktop.css("display", "block");
    userChangebtn.css("display", "none");
  }

});



//////////////////////// User Page Change Accodrion Button///////////////////

let accordionBtn = $(".user-main .accordion-button");
let accordionArrow = $(".last-orders-header-left__icon");
let userPage = "/user-account.html"

if (location.pathname == userPage) {

  $(document).ready(function () {

    accordionBtn.first().find(accordionArrow).css("transform", "rotate(0deg)");


  });
}

accordionBtn.click(function () {

  $(accordionBtn).each(function (index, element) {

    ///// arrow icon to rotate
    let icon = element.children[0].children[0].children[0].children[0];

    //console.log(element.getAttribute("aria-expanded"));
    if (element.getAttribute("aria-expanded") == "true") {
      //console.log(icon.style.transform);
      icon.style.transform = "rotate(0deg)";
    } else {
      icon.style.transform = "rotate(-180deg)";
    }


  });

});








