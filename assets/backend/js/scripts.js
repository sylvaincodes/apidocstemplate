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

var collections_dropdown = document.querySelectorAll('.collections-dropdown');
$(".collections-content").hide();

collections_dropdown.forEach(element => {
  
  element.addEventListener('click', function () {
    
    element.getAttribute('data-id');

    console.log(element.parentElement);

    const parent = element.parentElement;


    collections_dropdown.forEach(element2 => {

      if (element2.getAttribute('data-id') == element.getAttribute('data-id') ) {
       
      }else{
        
        element2.classList.remove("active");
      }
    });

    const data = parent.children;
    const isOpen = element.classList.contains("active");

    $(".collections-content").hide();

    if (isOpen) {
      
      element.classList.remove('active');
      for (let i = 1; i < data.length; i++) {
        data[i].style.display ="none";
      }

    } else {
      element.classList.add('active');
      for (let i = 0; i < data.length; i++) {
        data[i].style.display ="block";
      }
    }
  })

});




var api = document.querySelectorAll('.api');
$(".api-content").hide();

api.forEach(elementApi => {

  elementApi.addEventListener('click', function () {
    
   const id = elementApi.getAttribute('data-api_id');

   const data =  elementApi.children;

    api.forEach(elementApi2 => {

      console.log(elementApi.getAttribute('data-api_id'));
      console.log(elementApi2.getAttribute('data-api_id'));

      if (elementApi.getAttribute('data-api_id') == elementApi2.getAttribute('data-api_id') ) {
       
        for (let i = 1; i < data.length; i++) {
          // data[i].style.display = "block";
          // data[i].toggle('active');
          $("#content_"+elementApi2.getAttribute('data-api_id')).toggle("active");
        }

      }else{
        
        for (let i = 0; i < data.length; i++) {
          
          data[i].classList.toggle('active');
        }

      }
    });


  })

});


