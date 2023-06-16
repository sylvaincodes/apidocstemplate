$(document).ready(function() {
    "use strict";

    //LEFT MOBILE MENU OPEN
    $(".show-menu").on('click', function() {
        $(".mm-menu").css('right', '-25%');
    });

    //LEFT MOBILE MENU OPEN
    $(".hide-menu").on('click', function() {
        $(".mm-menu").css('right', '-100%');
    });
    //GOOGLE MAP - SCROLL REMOVE
    $('.hp-view')
        .on('click', function() {
            $(this).find('iframe').addClass('clicked')
        })
        .on('mouseleave', function() {
            $(this).find('iframe').removeClass('clicked')
        });

    $('input#input_text, textarea#textarea1').characterCounter();
    Materialize.updateTextFields();
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
    $('.carousel').carousel();
    $('select').material_select();
    $('.slider').slider();
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: true, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
    });
});

//PORTFOLIO FILTER
$(function() {

    var filterList = {

        init: function() {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.logo'
                }
            });

        }

    };

    // Run the show!
    filterList.init();


});



//DATE PICKER	
$(function() {
    var dateFormat = "mm/dd/yy",
        from = $("#from")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: false,
            numberOfMonths: 1
        })
        .on("change", function() {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: false,
            numberOfMonths: 1
        })
        .on("change", function() {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }


/*Vérifier sur tous les champs de type date si la date saisie est valide*/
$('.datemask').blur(function() {
    var dateFormat = "DD/MM/YYYY";
    var res=moment($(this).val(), dateFormat, true).isValid(); // return false: February 29th of 2011 does not ex
   if(!res){

     $.bootstrapGrowl('<h4><strong>Oups!</strong></h4> <p>'+$(this).val()+' n\'est pas une date valide</p>', {
                    type: 'danger',
                    delay: 10000,
                    allow_dismiss: true,
                    offset: {from: 'top', amount: 20}
                    });

      $(this).val('');
    }
});


$('.email').blur(function() {
    vraiemail(this);
});


});

 function validateEmail(email) 
   {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    function vraiemail(elt)
    {
        if(validateEmail(elt.value))
        {
           // $.notify('Email valide','success');
        }
        else
        {
             $.bootstrapGrowl('<h4><strong>Info</strong></h4> <p>Email non valide</p>', {
                    type: 'danger',
                    delay: 8000,
                    allow_dismiss: true,
                    offset: {from: 'top', amount: 20}
                        });


            elt.value='';
        }
    }


function notify(title,msg,status){

    if (status=='error') {
        status='danger';
    }

    if (status=='') {
        status='warning';
    }


     $.bootstrapGrowl('<h4><strong>'+title+'</strong></h4> <p>'+msg+'</p>', {
                    type: status,
                    delay: 8000,
                    allow_dismiss: true,
                    offset: {from: 'bottom', amount: 20}
                        });
}


function number_format(number, decimals, dec_point, thousands_sep) {
   
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'
    var n = !isFinite(+number) ? 0 : +number, 
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        toFixedFix = function (n, prec) {
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            var k = Math.pow(10, prec);
            return Math.round(n * k) / k;
        },
        s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}