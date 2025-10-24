/*$(".menu-phone i.menu-icon").click(function(){
    $("nav.menu").slideToggle(1000)
});*/

$(".menu-phone i.menu-icon").click(function () {
  $("nav.menu").addClass("open-m");
});

$("i.close-i").click(function () {
  $("nav.menu").removeClass("open-m");
});

$("i.close-i").click(function () {
  $(".over-body-bg").fadeOut("slow");
});
$(".menu-phone i.menu-icon").click(function () {
  $(".over-body-bg").fadeIn("slow");
});

$(".search-overlay").click(function () {
  $(".search-overlay").fadeOut("slow");
  $(".search-pop-up").fadeOut("slow");
});
$("i.search-popup").click(function () {
  $(".search-overlay").fadeIn("slow");
  $(".search-pop-up").fadeIn("slow");
});

$(".overflow-body").click(function () {
  $(".overflow-body").fadeOut("slow");
  $(".zoom-pop").fadeOut("slow");
});
$(".arrows-full").click(function () {
  $(".overflow-body").fadeIn("slow");
  $(".zoom-pop").fadeIn("slow");
});
$("i.close-icon").click(function () {
  $(".overflow-body").fadeOut("slow");
  $(".zoom-pop").fadeOut("slow");
});

$("button.btn-filter").click(function () {
  $(".Filter-overlay").fadeIn("slow");
});
$("i.filter-close").click(function () {
  $(".Filter-overlay").fadeOut("slow");
});

$("button.btn-filter").click(function () {
  $(".Filter-slide").addClass("intro");
});
$("i.filter-close").click(function () {
  $(".Filter-slide").removeClass("intro");
});

/*$("button.shopp-cart").click(function(){
    $(".Filter-overlay").fadeIn('slow');
});
$("i.cart-close").click(function(){
    $(".Filter-overlay").fadeOut('slow');
});

$("button.shopp-cart").click(function(){
    $(".Shopping-cart").addClass("intro");
});
$("i.cart-close").click(function(){
    $(".Shopping-cart").removeClass("intro");
});*/

$("#view_cart").click(function () {
  $(".Filter-overlay").fadeIn("slow");
});
$("i.cart-close").click(function () {
  $(".Filter-overlay").fadeOut("slow");
});

$("#view_cart").click(function () {
  $(".Shopping-cart").addClass("intro");
});
$("i.cart-close").click(function () {
  $(".Shopping-cart").removeClass("intro");
});

$("i.wishlist-view").click(function () {
  $(".Wishlist-box").fadeIn("slow");
  $(".Filter-overlay").fadeIn("slow");
});
$("i.close-Wishlist").click(function () {
  $(".Wishlist-box").fadeOut("slow");
  $(".Filter-overlay").fadeOut("slow");
});

$("i.close-quick-popup").click(function () {
  $(".search-overlay").fadeOut("slow");
  $(".quick-popup").fadeOut("slow");
});

$("i.cart-close").click(function () {
  $(".search-overlay").fadeOut("slow");
  $(".Filter-overlay").fadeOut("slow");
});

$(".telephone").click(function () {
  $(".wrapper_tele").slideToggle("slow");
});

$(".review-btn").click(function () {
  var $this = $(this);
  $this.toggleClass("review-btn");
  if ($this.hasClass("review-btn")) {
    $this.text("Написать отзыв");
  } else {
    $this.text("Отменить просмотр");
  }
});

$(".review-btn").click(function () {
  $(".Write-review-box").slideToggle("slow");
});

/* window scroll */

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 650) {
    $(".sticky-addtocart-buttom").addClass("sticky-fixed-buttom");
  } else {
    $(".sticky-addtocart-buttom").removeClass("sticky-fixed-buttom");
  }
});

/* End window scroll */

/* rating star */

function ratingStar(star) {
  star.click(function () {
    var stars = $(".ratingW").find("li");
    stars.removeClass("on");
    var thisIndex = $(this).parents("li").index();
    for (var i = 0; i <= thisIndex; i++) {
      stars.eq(i).addClass("on");
    }
    putScoreNow(thisIndex + 1);
  });
}

function putScoreNow(i) {
  $(".scoreNow").html(i);
}

$(function () {
  if ($(".ratingW").length > 0) {
    ratingStar($(".ratingW li a"));
  }
});

/* end rating star */

$(document).ready(function () {
  //toggle the component with class accordion_body
  $(".accordion_head").click(function () {
    if ($(".accordion_body").is(":visible")) {
      $(".accordion_body").slideUp(300);
      $(".plusminus").text("+");
    }
    if ($(this).next(".accordion_body").is(":visible")) {
      $(this).next(".accordion_body").slideUp(300);
      $(this).children(".plusminus").text("+");
    } else {
      $(this).next(".accordion_body").slideDown(300);
      $(this).children(".plusminus").text("-");
    }
  });
});

$(".profile-tabs-menu li a").click(function (e) {
  e.preventDefault();

  $(".profile-tabs-menu li").removeClass("action");
  $(this).parent().addClass("action");

  var current = $(this).attr("href");
  $(".content-tabs").removeClass("active");
  $(current).addClass("active");

  $(".action").removeClass("active");
  $(current).addClass("active");
});

/*$('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '.slider-main',
    dots: false,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 580,
            settings: {
                vertical: false,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 380,
            settings: {
                vertical: false,
                slidesToShow: 2,
            }
        }
    ]
});*/

$(document).ready(function () {
  $("i.close-icon").click(function () {
    $(".popup-new-add").fadeOut("slow");
  });
  $("#add_address").click(function () {
    $(".popup-new-add").fadeIn("slow");
  });
});

$(document).ready(function () {
  $("i.close-icon").click(function () {
    $(".popup-new-add-2").fadeOut("slow");
  });
  $("a.update-add").click(function () {
    $(".popup-new-add-2").fadeIn("slow");
  });
});

$(document).ready(function () {
  $("i.close-icon-2").click(function () {
    $(".popup-new-add-3").fadeOut("slow");
  });
  $("#add_card").click(function () {
    $(".popup-new-add-3").fadeIn("slow");
  });
});

$(document).ready(function () {
  $("i.close-icon-2").click(function () {
    $(".popup-new-add-2").fadeOut("slow");
  });
  $("#edit_card").click(function () {
    $(".popup-new-add-2").fadeIn("slow");
  });
});

/*** over-body ***/

$(document).ready(function () {
  $("i.close-icon-2").click(function () {
    $(".over-body").fadeOut("slow");
  });
  $("#add_card").click(function () {
    $(".over-body").fadeIn("slow");
  });
});

$(document).ready(function () {
  $("i.close-icon").click(function () {
    $(".over-body").fadeOut("slow");
  });
  $("#add_address").click(function () {
    $(".over-body").fadeIn("slow");
  });
});

$(document).ready(function () {
  $("i.close-icon").click(function () {
    $(".over-body").fadeOut("slow");
  });
  $("a.update-add").click(function () {
    $(".over-body").fadeIn("slow");
  });
});

$(document).ready(function () {
  $("i.close-icon-2").click(function () {
    $(".over-body").fadeOut("slow");
  });
  $("#edit_card").click(function () {
    $(".over-body").fadeIn("slow");
  });
});

$(document)
  .off("keydown", ".validate_number")
  .on("keydown", ".validate_number", function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if (
      $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      // Allow: Ctrl+A, Command+A
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });

// checkbox //

$(function () {
  $('.checkbox-Field.parent input[type="checkbox"]').change(function () {
    if ($(this).is(":checked") == true) {
      $(".check_box").prop("checked", true);
    } else {
      $(".check_box").prop("checked", false);
    }
  });

  $(".check_box").change(function () {
    CheckAllCheckBox("Bike");
  });
  var lenCheck = $(".check_box").length;
  var CheckAllCheckBox = function (groupname) {
    var result = $('input[name="' + groupname + '"]:checked');
    if (result.length >= lenCheck) {
      result.each(function () {
        result.length += $(this).val(); //append value to exsiting var
      });
      $('.parent input[type="checkbox"]').prop("checked", true);
    } else {
      $('.parent input[type="checkbox"]').prop("checked", false);
    }
  };
});

$(".tabs li a").click(function (e) {
  e.preventDefault();

  $(".tabs li").removeClass("action");
  $(this).parent().addClass("action");

  var current = $(this).attr("href");
  $(".text").removeClass("active");
  $(current).addClass("active");

  $(".action").removeClass("active");
  $(current).addClass("active");
});

$(".search-overlay").click(function () {
  $(".search-overlay").fadeOut("slow");
  $(".quick-popup").fadeOut("slow");
});

/*toast*/

$(document).ready(function () {
  // Hide the toast on page load
  $("#toast").addClass("hidden").hide();

  // Function to show the toast message with a specific message
  function showToast(message) {
    let $toast = $("#toast");

    // Set the message text
    $toast.text(message);

    // Show the toast
    $toast.fadeIn("fast", "swing").removeClass("hidden");

    // Hide the toast after 1.5 seconds
    setTimeout(() => {
      hideToast();
    }, 700); // Show for 1.5 seconds
  }

  // Function to hide the toast message
  function hideToast() {
    let $toast = $("#toast");
    $toast.fadeOut(() => {
      $toast.addClass("hidden");
    });
  }

  // Show different messages for each button
  $("#add_to_cart").on("click", function () {
    showToast("Добавлено в корзину.");
  });

  $("#remove_cart").on("click", function () {
    showToast("Удалить все.");
  });
});

// color //

// menu js

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  // menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  //  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};

$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $(".header").addClass("scrolled");
  } else {
    $(".header").removeClass("scrolled");
  }
});

//   accrdion js

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionContent = header.nextElementSibling;
    const icon = header.querySelector(".toggle-icon");

    // Close all other accordion items
    document.querySelectorAll(".accordion-content").forEach((content) => {
      if (
        content !== accordionContent &&
        content.classList.contains("active")
      ) {
        content.style.maxHeight = "0"; // Collapse the content
        content.classList.remove("active");
        const siblingIcon =
          content.previousElementSibling.querySelector(".toggle-icon");
        siblingIcon.textContent = "+";
        siblingIcon.classList.remove("active");
      }
    });

    // Toggle the current accordion
    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = "0"; // Collapse current content
    } else {
      // Calculate the height dynamically
      const contentHeight = accordionContent.scrollHeight;
      accordionContent.style.maxHeight = `${contentHeight}px`; // Expand content
    }

    accordionContent.classList.toggle("active");
    icon.textContent = accordionContent.classList.contains("active")
      ? "×"
      : "+";
    icon.classList.toggle("active");
  });
});

// calculator js

document.addEventListener("DOMContentLoaded", () => {
  const loanAmountInput = document.getElementById("loan-amount");
  const loanTenureInput = document.getElementById("loan-tenure");
  const interestRateInput = document.getElementById("interest-rate");

  const loanAmountDisplay = document.getElementById("loan-amount-display");
  const tenureDisplay = document.getElementById("tenure-display");
  const interestRateDisplay = document.getElementById("interest-rate-display");

  const emiValue = document.getElementById("emi-value");
  const principalValue = document.getElementById("principal-value");
  const totalInterest = document.getElementById("total-interest");
  const totalPayment = document.getElementById("total-payment");

  const ctx = document.getElementById("emi-chart").getContext("2d");
  let chart;

  const tabsWrapper = document.querySelector(".tabs-wrapper");
  const tabs = document.querySelectorAll(".tab");

  // Tab functionality
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      resetCalculator();
    });
  });

  // Scroll detection
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      tabsWrapper.classList.add("scrolled");
    } else {
      tabsWrapper.classList.remove("scrolled");
    }
  });

  function resetCalculator() {
    loanAmountInput.value = 100000;
    loanTenureInput.value = 1;
    interestRateInput.value = 1;
    updateDisplays();
    calculateEMI();
    updateRangeBackgrounds();
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN").format(amount);
  }

  function updateDisplays() {
    loanAmountDisplay.textContent = formatCurrency(loanAmountInput.value);
    tenureDisplay.textContent = loanTenureInput.value;
    interestRateDisplay.textContent = interestRateInput.value;
  }

  function calculateEMI() {
    const principal = parseFloat(loanAmountInput.value);
    const rate = parseFloat(interestRateInput.value) / (12 * 100);
    const time = parseFloat(loanTenureInput.value) * 12;

    const emi =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);
    const totalAmount = emi * time;
    const interestAmount = totalAmount - principal;

    emiValue.textContent = formatCurrency(Math.round(emi));
    principalValue.textContent = formatCurrency(principal);
    totalInterest.textContent = formatCurrency(Math.round(interestAmount));
    totalPayment.textContent = formatCurrency(Math.round(totalAmount));

    updateChart(principal, interestAmount);
  }

  function updateChart(principal, interest) {
    if (chart) {
      chart.destroy();
    }

    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Principal Amount", "Interest Amount"],
        datasets: [
          {
            data: [principal, interest],
            backgroundColor: ["#5BACF2", "#79F1A4"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          duration: 1000, // Slow down the animation
          easing: "easeInOutQuart", // Use smooth easing
        },
        cutout: "55%",
      },
    });
  }

  function updateRangeBackgrounds() {
    [loanAmountInput, loanTenureInput, interestRateInput].forEach((input) => {
      const min = input.min;
      const max = input.max;
      const value = input.value;
      const percentage = ((value - min) / (max - min)) * 100;
      input.style.background = `linear-gradient(to right, #499BE9 ${percentage}%, #e0e0e0 ${percentage}%)`;
    });
  }

  [loanAmountInput, loanTenureInput, interestRateInput].forEach((input) => {
    input.addEventListener("input", () => {
      updateDisplays();
      calculateEMI();
      updateRangeBackgrounds();
    });
  });

  // Initial calculation and background update
  updateDisplays();
  calculateEMI();
  updateRangeBackgrounds();
});

// accrdion js
function accordion() {
  if ($(this).attr("id") !== "displayed") {
    $(".container_acc").removeAttr("id");
    $(".container_acc").find("#closed").css("display", "none");
    $(".container_acc").find("#open").css("display", "block");
    $(".desc_acc").slideUp(500);

    $(this).attr("id", "displayed");
    $(this).children().last().slideDown(500);

    var closed = $(this).find("#closed");
    closed.css("display", "block");

    var open = $(this).find("#open");
    open.css("display", "none");
    var closed = $(this).find("#closed");
    closed.css("display", "block");

    $(this).children().first().children().last().attr("class", "clicked");
  } else {
    $(this).removeAttr("id");
    $(this).children().last().slideUp(500);
    var closed = $(this).find("#closed");
    closed.css("display", "none");
    var open = $(this).find("#open");
    open.css("display", "block");
  }
}

$(document).ready(function () {
  $(".container_acc").on("click", accordion);
});

//   animation js
AOS.init({ disable: "mobile" });

//   auto date update

function newDate() {
  return new Date().getFullYear();
}
document.onload = document.getElementById("autodate").innerHTML =
  "" + newDate();

// buuble js tst

function getRandomPosition(max) {
  return Math.random() * max;
}

function updateCirclePositions() {
  const circles = document.querySelectorAll(".decorative-circle");
  const container = document.querySelector(".mb_dv");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  circles.forEach((circle) => {
    const x = getRandomPosition(containerWidth - circle.offsetWidth);
    const y = getRandomPosition(containerHeight - circle.offsetHeight);
    circle.style.transform = `translate(${x}px, ${y}px)`; // Position change
  });
}

// Slow down movement by updating every 4 seconds (or adjust as needed)
setInterval(updateCirclePositions, 5000); // Update every 4 seconds for slower movement

document.querySelectorAll(".decorative-circle").forEach((circle) => {
  circle.addEventListener("mouseover", () => {
    circle.style.transform += " scale(1.2)";
  });
  circle.addEventListener("mouseout", () => {
    circle.style.transform = circle.style.transform.replace(" scale(1.2)", "");
  });
});

window.addEventListener("load", updateCirclePositions);
window.addEventListener("resize", updateCirclePositions);

// hide show password eye js

$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// input name js show

$(document).ready(function () {
  $(".file-input").on("change", function () {
    const fileName = $(this).val().split("\\").pop();
    const fileDisplay = $(this).next(".file-name");

    if (fileName) {
      fileDisplay.text("File name: " + fileName);
    } else {
      fileDisplay.text("No file chosen");
    }
  });
});

// main banner slider js

$("#carousel").owlCarousel({
  autoplay: true,
  rewind: false,
  margin: 20,
  loop: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 2000,
  smartSpeed: 800,

  nav: false,
  // navText: [
  //     '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
  //     '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],

  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1024: {
      items: 3,
    },

    1366: {
      items: 4,
    },
  },
});

$("#carousel2").owlCarousel({
  autoplay: false,
  rewind: false,
  margin: 20,
  loop: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 2000,
  smartSpeed: 800,
  dots: true,
  nav: false,
  navText: [
    '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
    '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',
  ],

  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1024: {
      items: 3,
    },

    1366: {
      items: 4,
    },
  },
});

$(document).ready(function () {
  $(".dropdown-cstm .selected").click(function (event) {
    event.stopPropagation();
    var $dropdown = $(this).closest(".dropdown-cstm");
    $(".dropdown-cstm").not($dropdown).removeClass("open");
    $dropdown.toggleClass("open");
  });

  $(".dropdown-cstm .dropdown-list li").click(function () {
    var selectedText = $(this).text();
    var selectedValue = $(this).data("value");

    $(this)
      .closest(".dropdown-cstm")
      .find(".selected")
      .text(selectedText)
      .data("value", selectedValue);

    $(this).closest(".dropdown-cstm").removeClass("open");
  });
  $(document).click(function (event) {
    if (!$(event.target).closest(".dropdown-cstm").length) {
      $(".dropdown-cstm").removeClass("open");
    }
  });
  $("form").submit(function (event) {
    var isValid = true;
    $(".dropdown-cstm").each(function () {
      var selectedValue = $(this).find(".selected").data("value");

      if (!selectedValue) {
        isValid = false;
        $(this).addClass("error");
      } else {
        $(this).removeClass("error");
      }
    });
    if (!isValid) {
      event.preventDefault();
      alert("Please select a valid option from all dropdowns.");
    }
  });
});

$(document).ready(function () {
  $(".dropdown-cstm .selected").on("click", function () {
    $(this).siblings(".dropdown-list").toggleClass("show");
  });
  $(".dropdown-cstm .dropdown-list li").on("click", function () {
    const value = $(this).data("value");
    const text = $(this).text();
    const dropdown = $(this).closest(".dropdown-cstm");
    dropdown
      .find(".selected")
      .html(`${text} <i class="fa-solid fa-chevron-down arrow"></i>`);
    dropdown.find('input[type="hidden"]').val(value);
    dropdown.find(".dropdown-list").removeClass("show");
  });
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".dropdown-cstm").length) {
      $(".dropdown-list").removeClass("show");
    }
  });
});

// hide js
$(document).ready(function () {
  $(".crs_hd").click(function () {
    $(".contact-success-message").hide(); // Hides the specified element
  });
});

// footer js
function setupAccordion() {
  const isMobile = window.innerWidth <= 768;

  document.querySelectorAll(".hd_ft").forEach((header) => {
    header.replaceWith(header.cloneNode(true)); // Remove previous event listeners
  });

  document.querySelectorAll(".hd_ft").forEach((header) => {
    header.addEventListener("click", function () {
      if (!isMobile) return; // Prevent clicks on larger screens

      let content = this.nextElementSibling;
      let isActive =
        content.style.maxHeight && content.style.maxHeight !== "0px"; // Check if already open

      // Close all sections first
      document.querySelectorAll(".hd_mb_ft").forEach((content) => {
        content.style.maxHeight = "0";
        content.style.padding = "0 15px";
      });

      document.querySelectorAll(".hd_ft").forEach((header) => {
        header.classList.remove("active");
      });

      // Toggle only if it was not already open
      if (!isActive) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "0";
        this.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".hd_mb_ft").forEach((content) => {
    if (isMobile) {
      content.style.maxHeight = "0"; // Hide by default on mobile
      content.style.padding = "0 15px";
    } else {
      content.style.maxHeight = "none"; // Show all content on larger screens
      content.style.padding = "0";
    }
  });
}

// Run function on page load
setupAccordion();

// Run function when window is resized
window.addEventListener("resize", setupAccordion);

// mb calculateEMI

/******************************************************
 *                  CALCULATOR JS
 ******************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const loanAmountInput = document.getElementById("loan-amount");
  const loanTenureInput = document.getElementById("loan-tenure");
  const interestRateInput = document.getElementById("interest-rate");

  const emiValue = document.getElementById("emi-value");
  const principalValue = document.getElementById("principal-value");
  const totalInterest = document.getElementById("total-interest");
  const totalPayment = document.getElementById("total-payment");

  const checkEmiBtn = document.getElementById("checkEmiBtn");
  const resultModal = document.getElementById("resultModal");
  const closeBtn = document.querySelector(".close");

  const ctx = document.getElementById("emi-chart").getContext("2d");
  let chart;

  // Format number with commas
  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN").format(amount);
  }

  function calculateEMI() {
    const principal = parseFloat(loanAmountInput.value) || 0;
    const rate = (parseFloat(interestRateInput.value) || 0) / (12 * 100);
    const time = (parseFloat(loanTenureInput.value) || 0) * 12;

    if (principal <= 0 || rate <= 0 || time <= 0) {
      // Clear fields if invalid
      emiValue.textContent = "0";
      document.getElementById("emi-value-large").textContent = "0"; // Updated here
      principalValue.textContent = "0";
      totalInterest.textContent = "0";
      totalPayment.textContent = "0";
      if (chart) chart.destroy();
      return;
    }

    // EMI Formula
    const emi =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);
    const totalAmount = emi * time;
    const interestAmount = totalAmount - principal;

    emiValue.textContent = formatCurrency(Math.round(emi));
    document.getElementById("emi-value-large").textContent = formatCurrency(
      Math.round(emi)
    ); // Updated here
    principalValue.textContent = formatCurrency(principal);
    totalInterest.textContent = formatCurrency(Math.round(interestAmount));
    totalPayment.textContent = formatCurrency(Math.round(totalAmount));

    updateChart(principal, interestAmount);
  }

  function updateChart(principal, interest) {
    if (chart) chart.destroy();

    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Principal Amount", "Interest Amount"],
        datasets: [
          {
            data: [principal, interest],
            backgroundColor: ["#5BACF2", "#79F1A4"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          duration: 1000,
          easing: "easeInOutQuart",
        },
        cutout: "55%",
      },
    });
  }

  // Listen to input changes
  [loanAmountInput, loanTenureInput, interestRateInput].forEach((input) => {
    input.addEventListener("input", () => {
      calculateEMI();
    });
  });

  // Modal Trigger
  checkEmiBtn.addEventListener("click", () => {
    // Show the modal
    resultModal.style.display = "block";
  });

  // Modal Close
  closeBtn.addEventListener("click", () => {
    resultModal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === resultModal) {
      resultModal.style.display = "none";
    }
  });

  // Initial Calculation
  calculateEMI();

  /******************************************************
   *        Loan Type Box Selection
   ******************************************************/
  const loanTypeBoxes = document.querySelectorAll(".loan-type");
  loanTypeBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      loanTypeBoxes.forEach((b) => b.classList.remove("active"));
      box.classList.add("active");
    });
  });
});

// mb js

const button = document.getElementById("toggleButton");
const content = document.getElementById("toggleContent");

button.addEventListener("click", function () {
  // Toggle the "show" class on the content div
  if (content.classList.contains("show")) {
    content.classList.remove("show");
    button.textContent = "View More";
  } else {
    content.classList.add("show");
    button.textContent = "View Less";
  }
});

//   password eye hide show signup

$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// busssines loan js
function toggleContents() {
  var content = document.getElementById("contentintblock");
  var btn = document.getElementById("toggleButtonmb");

  // Use computed style to get the current height
  var computedHeight = window.getComputedStyle(content).height;

  if (parseInt(computedHeight) === 0) {
    // Expand: Set height to the full scrollHeight and animate border width to 1px
    content.style.height = content.scrollHeight + "px";
    content.style.borderWidth = "1px";
    btn.innerText = "View Less";

    // Once the height transition ends, set height to auto for flexibility
    content.addEventListener("transitionend", function handler(e) {
      if (e.propertyName === "height") {
        content.style.height = "auto";
        content.removeEventListener("transitionend", handler);
      }
    });
  } else {
    // Collapse: If height is auto, fix it to the current pixel value first
    if (content.style.height === "auto") {
      content.style.height = content.scrollHeight + "px";
      // Force reflow to apply the fixed height before collapsing
      content.offsetHeight;
    }
    // Animate the collapse: set height to 0 and border width to 0
    content.style.height = "0";
    content.style.borderWidth = "0";
    btn.innerText = "View More";
  }
}

//   toggle login

$("#toggle-slow12").click(function () {
  $("#boxs").toggle("slow");
});


// hero banner 

