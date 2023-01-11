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

    if ($(window).width() < 1200) {
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

  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {




    let minVal, maxVal;

    if ($(window).width() < 1200) {
      minVal = parseInt(rangeInput[0].value);
      maxVal = parseInt(rangeInput[1].value);
    }
    else {
      minVal = parseInt(rangeInput[2].value);
      maxVal = parseInt(rangeInput[3].value);
    }
console.log(minVal);




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
  });
});

//////////////////////////// Price Range End