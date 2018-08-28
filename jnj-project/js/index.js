$(document).ready(function() {
    $(".ddd" + 1).addClass("dddX");
});
$(".txt-link").hover(function() {
    //var $th=$(this);
    $(this).prev().toggleClass("c_div")
});
$(".txt-link").hover(function() {
    $(this).toggleClass("txt-color")
});

$(".end").click(function(e) {
    e.preventDefault();
    $(".cbcd").removeClass("yccd");
    $(".ccc").removeClass("min");
    $(".ddd").removeClass("dddxx");
});
$(".end").hover(function() {
    $(this).toggleClass("endX")
});

var btn = $("#click");
btn.on("click", (function() {
    $(".ccc").addClass("min");
    $(".cbcd").addClass("yccd");
    $(".ddd").addClass("dddxx");
}));
btn.hover(function() {
    $(this).toggleClass("h-a")
})
var screen = $("#jq_banner li").first().height(),
    total = $("#jq_banner li").length,
    index = 0,
    www = 0;
var init = function() {
    screen = $("#jq_banner li").first().height();
    $("#jq_banner").animate({
        top: -index * screen

    }, 1000);

}
var wheel = function(event, e) {
    if (!$("#jq_banner").is(":animated")) {
        // console.log(e);
        // console.log(index);
        // console.log(-index * screen);
        // console.log(screen);
        if (e > 0) {
            if (index > 0) {
                index--;

            }
        } else {
            if (index < total - 1) {
                index++;

            }
        }
        if (index == 1) {
            // console.log(index)
            $(".d1").addClass("d1w");
            setTimeout(function() {
                $(".dtext").addClass('dtext1');
            }, 1000);
        } else {
            $(".d1").removeClass("d1w");
            $(".dtext").removeClass('dtext1');
        }

        setTimeout(function() {
            // console.log(10086)
            if (index == 0) {
                $(".ddd" + (index + 1)).addClass("dddX");
            } else if (index != 0) {
                $(".ddd" + (index)).removeClass("dddX")
            }
            if (index == 1) {
                $(".ddd" + (index + 1)).addClass("dddX");
            } else if (index != 1) {
                $(".ddd" + (index)).removeClass("dddX")
            }
            if (index == 2) {
                $(".ddd" + (index + 1) + "").addClass("dddX");
            }
            if ( /*index != 2*/ -index * screen != -1768) {
                $(".ddd" + (index + 2)).removeClass("dddX")
            }
            if (index == 3) {
                $(".ddd" + (index + 1)).addClass("dddX");
            }
            if ( /*index != 2*/ -index * screen != -2652) {
                $(".ddd" + (index + 2)).removeClass("dddX")
            }
            if (index == 4) {
                $(".ddd" + (index + 1)).addClass("dddX");
            }
            if ( /*index != 2*/ -index * screen != -3536) {
                $(".ddd" + (index + 2)).removeClass("dddX")
            }
            if (index == 5) {
                $(".ddd" + (index + 1)).addClass("dddX");
            }
            if ( /*index != 2*/ -index * screen != -4420) {
                $(".ddd" + (index + 2)).removeClass("dddX")
            }
            if (index == 6) {
                $(".ddd" + (index + 1)).addClass("dddX");
            }
            if ( /*index != 2*/ -index * screen != -5304) {
                $(".ddd" + (index + 2)).removeClass("dddX")
            }


        }, 600);

        $("#jq_banner").animate({
            top: -index * screen
        }, 1000);

    }
};
// if (index == 0) {
//     $(".ddd1").addClass("dddX");
// } else {
//     $(".ddd1").removeClass("dddX")
// }
// if (index == 1) {
//     $(".ddd2").addClass("dddX");
// } else {
//     $(".ddd2").removeClass("dddX")
// }
// if (index == 2) {
//     $(".ddd3").addClass("dddX");
// } else {
//     $(".ddd3").removeClass("dddX")
// }
// if (index == 3) {
//     $(".ddd4").addClass("dddX");
// } else {
//     $(".ddd4").removeClass("dddX")
// }
// if (index == 4) {
//     $(".ddd5").addClass("dddX");
// } else {
//     $(".ddd5").removeClass("dddX")
// }
// if (index == 5) {
//     $(".ddd6").addClass("dddX");
// } else {
//     $(".ddd6").removeClass("dddX")
// }
// if (index == 6) {
//     $(".ddd7").addClass("dddX");
// } else {
//     $(".ddd7").removeClass("dddX")
// }

$(document).mousewheel(wheel);
$(window).resize(init);
$(".ddd").hover(function() {
    $(this).toggleClass("dddhover")
})




$('.pzz').click(function() {
    console.log(1)

    $('.ljc').toggleClass('ljc1') //.this.toggleClass('pzz1');
})