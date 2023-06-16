/* -------------------------
    - All scripts -

    1-Modal script
    2-Sidebar script
    3-Header
    4-CSS Root FInder 
--------------------------*/

$(document).ready(function () {

  // $( document ).tooltip();
  
  //-------- Modal------------//
  $(".modal-btn").click(function () {
    $(".modal").css("transform", "scale(1)");
    $(".modal").css("transition", "0.2s");
  });


  $(".close-btn").click(function () {
    $(".modal").css("transform", "translateY(-200%)");
    $(".modal").css("transition", "0.8s");
  });

  //-------- Sidebar------------//
  $(".btn-sidebar").click(function () {
    $(".btn-sidebar").css("animation", "shadow 1.5s ease");
    if ($(".collapsible").hasClass("active")) {
      $(".collapsible").removeClass("active");
    } else {
      $(".collapsible").addClass("active");
    }
  });
  $(".btn-sidebar").mouseover(function () {
    if ($(".collapsible").hasClass("active")) {
      $(".btn-sidebar").attr("title", "Cliquer pour fermer le menu");
    } else {
      $(".btn-sidebar").attr("title", "Cliquer pour fixer le menu");
    }
    $(".collapsible").css("transform", "translateX(0%)");
  });

  $(".btn-sidebar").mouseleave(function () {
    $(".collapsible").css("transform", "translateX(-100%)");
  });

  //-------- Header------------//
  $(".header").mouseleave(function () {
    $(".collapsible").css("top", "31px");
    $(".collapsible").css("transition", "0.2s");
  });
  $(".header").mouseover(function () {
    $(".collapsible").css("top", "97px");
    $(".collapsible").css("transition", "0.2s");
  });

  $(".delete-row").click(function () {
    if (!confirm("Etes vous sûre de vouloir le supprimer ?")) {
      return false;
    }
  });
});

//-------- Functions get css root variable ------------//
var r = document.querySelector(":root");

function get_root_variable(variable) {
  var rs = getComputedStyle(r);
  return rs.getPropertyValue(variable);
}

/*------------- Footer fade ---------------*/

// Get the offset position of the footer
var footer = document.getElementById("footer");
var position = footer.offsetTop;
// var position_nav_bottom = nav_bottom.offsetTop;

$(window).scroll(function () {
    if (window.pageYOffset>0) {
      $("#footer").css("transform", "translateY(100%)");
    }else{
      $("#footer").css("transform", "translateY(0%)");
    }
});

var dropbtn_ul = document.querySelectorAll('.dropbtn-ul');
$(".dropbtn-ul-content").hide();

dropbtn_ul.forEach(element => {

  console.log(element);
  element.addEventListener('click', function () {
    
    $(".dropbtn-ul-content").toggle("active");

  })

});


