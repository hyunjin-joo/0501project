
    $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          //console.log(scroll);
          if ( scroll >= 1200 && scroll <= 1798) {
        //console.log('a');
        $(".c_right").addClass(".is_bfixed is_absolute");
            $(".column_fix_wrap ").css({
        "position": "fixed",
               "top": "70px",
              "bottom": "auto",
              "margin-top" : "-1120px",
              "transition": "bottom .3s cubic- bezier(.215, .61, .355, 1)"
            });
          }else if(scroll >= 1799){
        $(".c_right").removeClass(".is_bfixed is_absolute");
            $(".c_right").addClass(".is_stop");
                $(".column_fix_wrap").css({
        "position": "absolute",
                 "top": "auto",
                 "bottom": "27px",

            });
            $(".column_fix_wrap").css({
        "margin-top": "",
              "transition": ""
            });


          }else {
        //console.log('a');
        $(".c_right").removeClass(".is_bfixed is_absolute");
            $(".c_right").removeClass(".is_stop");
            $(".column_fix_wrap").css({
        "position": "",
              "top": "",
              "bottom": "",
               "margin-top": "",

            });
          }
        });

        /* header */

        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          //console.log(scroll);
          if (scroll >= 200) {
        //console.log('a');
        $(".name_logo").hide();
            $(".header_logo").hide();
            $("#firstheader").css({
        "height": "64px",
              "background-color": "#fff",
            "border-bottom": "1px solid #10ce72",
            "width":"100%",
            "position":"fixed",
            "margin-top" : "-58px",
           "background-image": "url('./image/s.jpg')",
            "background-repeat": "no-repeat",
            "background-size":"50px 50px",
            "background-position" :"16% 50%"

          });
          $(".sea input").css({
        "background-image": "url('./image/?????????.jpg')",
            "background-repeat": "no-repeat",
            "background-size": "30px 30px",
            "background-position": "100% 50%",
            "border":"none",
            "margin-top":"-9px",
             "width": "680px",
             "margin-left":"-240px",
             "border-left":"1px solid lightgray",
            "font-size" : "18px",
            "caret-color" :"black",
            "font-weight" :"bold",

          })
           $(".sea input").attr('placeholder','???????????? ???????????????');
            $('.sea input').addClass('your-class');
          $(".sea img").hide();


          } else {
        //console.log('a');
        /*    $("#firstheader").removeClass(".ani_fixed"); */
        $("#firstheader").css({
            "height": "",
            "background-color": "",
            "border-bottom": "",
            "width": "",
            "position": "",
            "margin-top": "",
            "background-image": "",
            "background-repeat": "",
            "background-size": "",
            "background-position": "",
            "border-left": "",

        });
             $(".header_logo").show();
             $(".name_logo").show();
             $(".sea img").show();
              $(".sea input").css({
        "background-image": "",
              "background-repeat": "",
              "background-size": "",
              "background-position": "",
              "border": "",
               "margin-top": "",
               "width":"",
               "margin-left":"",
               "font-size":"",
               "caret-color":"",
               "font-weight": ""

            });
              $('.sea input').removeClass('your-class');
            $(".sea input").attr('placeholder', '');
          }
        });

/* window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth' })   */
    $(document).scroll(function () {
        $("#firstheader").fadeIn(2000);
    });
     




function count(type) {
    // ????????? ????????? element
    const resultElement = document.getElementById('result');
    const resultElement2 = document.getElementById('result2');
    const resultElement3 = document.getElementById('result3');
    const resultElement4 = document.getElementById('result4');
    const resultElement5 = document.getElementById('result5');
    const resultElement6 = document.getElementById('result6');
    const resultElement7 = document.getElementById('result7');

    // ?????? ????????? ????????? ???
    let number = resultElement.innerText;
    let number2 = resultElement2.innerText;
    let number3 = resultElement3.innerText;
    let number4 = resultElement4.innerText;
    let number5 = resultElement5.innerText;
    let number6 = resultElement6.innerText;
    let number7 = resultElement7.innerText;

    // ?????????/??????
    if (type === 'plus') {
        number = parseInt(number) + 1;
        if (number > 9) {
            number = 1;
        }
    } else if (type === 'minus') {
        number = parseInt(number) - 1;
        if (number < 1) {
            number = 9;
        }
    }

    // ?????? ??????
    resultElement.innerText = number;


    if (type === 'plus') {
        number2 = parseInt(number2) + 1;
        if (number2 > 9) {
            number2 = 1;
        }
    } else if (type === 'minus') {
        number2 = parseInt(number2) - 1;
        if (number2 < 1) {
            number2 = 9;
        }
    }

    // ?????? ??????
    resultElement2.innerText = number2;


    if (type === 'plus') {
        number3 = parseInt(number3) + 1;
        if (number3 > 9) {
            number3 = 1;
        }
    } else if (type === 'minus') {
        number3 = parseInt(number3) - 1;
        if (number3 < 1) {
            number3 = 9;
        }
    }

    // ?????? ??????
    resultElement3.innerText = number3;


    if (type === 'plus') {
        number4 = parseInt(number4) + 1;
        if (number4 > 9) {
            number4 = 1;
        }
    } else if (type === 'minus') {
        number4 = parseInt(number4) - 1;
        if (number4 < 1) {
            number4 = 9;
        }
    }

    // ?????? ??????
    resultElement4.innerText = number4;



    if (type === 'plus') {
        number5 = parseInt(number5) + 1;
        if (number5 > 9) {
            number5 = 1;
        }
    } else if (type === 'minus') {
        number5 = parseInt(number5) - 1;
        if (number5 < 1) {
            number5 = 9;
        }
    }

    // ?????? ??????
    resultElement5.innerText = number5;


    if (type === 'plus') {
        number6 = parseInt(number6) + 1;
        if (number6 > 9) {
            number6 = 1;
        }
    } else if (type === 'minus') {
        number6 = parseInt(number6) - 1;
        if (number6 < 1) {
            number6 = 9;
        }
    }

    // ?????? ??????
    resultElement6.innerText = number6;



    if (type === 'plus') {
        number7 = parseInt(number7) + 1;
        if (number7 > 9) {
            number7 = 1;
        }
    } else if (type === 'minus') {
        number7 = parseInt(number7) - 1;
        if (number7 < 1) {
            number7 = 9;
        }
    }

    // ?????? ??????
    resultElement7.innerText = number7;
};


$(function () {
    $(".option").click(function () {
        $(".option1").css({
            "background-color": "#f7f9fa", "padding": "0 14px 0 18px",
            "list-style": "none",
            "margin": "12px 0",
            "color": "black",
            "position": "relative",
            "border": "none",
            "box-shadow": "none",
            "font-weight": "normal",
            "height": "25px"
        });
        $('#result').hide();
        $('.result_right').hide();
        $('.result_right3').hide();
        $('.result_right4').hide();
        $('.result_right5').hide();
        $('.result_right6').hide();
        $('.result_right7').hide();
        $('#result2').show();
        $('#result3').hide();
        $('#result4').hide();
        $('#result5').hide();
        $('#result6').hide();
        $('#result7').hide();
        $('.result_right2').show();
    });
});

$(function () {
    $(".option2").click(function () {
        $(".option1").css({
            "background-color": "#f7f9fa", "padding": "0 14px 0 18px",
            "list-style": "none",
            "margin": "12px 0",
            "color": "black",
            "position": "relative",
            "border": "none",
            "box-shadow": "none",
            "font-weight": "normal",
            "height": "25px"
        });
        $('#result').hide();
        $('.result_right').hide();
        $('.result_right3').show();
        $('.result_right4').hide();
        $('.result_right5').hide();
        $('.result_right6').hide();
        $('.result_right7').hide();
        $('#result3').show()
        $('#result2').hide();
        $('#result4').hide();
        $('#result5').hide();
        $('#result6').hide();
        $('#result7').hide();
        $('.result_right2').hide();
    });
});

$(function () {
    $(".option3").click(function () {
        $(".option1").css({
            "background-color": "#f7f9fa", "padding": "0 14px 0 18px",
            "list-style": "none",
            "margin": "12px 0",
            "color": "black",
            "position": "relative",
            "border": "none",
            "box-shadow": "none",
            "font-weight": "normal",
            "height": "25px"
        });
        $('.result_right').hide();
        $('.result_right3').hide();
        $('.result_right4').show();
        $('.result_right5').hide();
        $('.result_right6').hide();
        $('.result_right7').hide();
        $('#result4').show()
        $('#result').hide();
        $('#result2').hide();
        $('#result3').hide();
        $('#result5').hide();
        $('#result6').hide();
        $('#result7').hide();
        $('.result_right2').hide();
    });
});

$(function () {
    $(".option4").click(function () {
        $(".option1").css({
            "background-color": "#f7f9fa", "padding": "0 14px 0 18px",
            "list-style": "none",
            "margin": "12px 0",
            "color": "black",
            "position": "relative",
            "border": "none",
            "box-shadow": "none",
            "font-weight": "normal",
            "height": "25px"
        });
        $('.result_right').hide();
        $('.result_right3').hide();
        $('.result_right4').hide();
        $('.result_right5').show();
        $('.result_right6').hide();
        $('.result_right7').hide();
        $('#result5').show()
        $('#result').hide();
        $('#result2').hide();
        $('#result3').hide();
        $('#result4').hide();
        $('#result6').hide();
        $('#result7').hide();
        $('.result_right2').hide();
    });
});

$(function () {
    $(".option5").click(function () {
        $(".option1").css({
            "background-color": "#f7f9fa", "padding": "0 14px 0 18px",
            "list-style": "none",
            "margin": "12px 0",
            "color": "black",
            "position": "relative",
            "border": "none",
            "box-shadow": "none",
            "font-weight": "normal",
            "height": "25px"
        });
        $('.result_right').hide();
        $('.result_right3').hide();
        $('.result_right4').hide();
        $('.result_right5').hide();
        $('.result_right6').show();
        $('.result_right7').hide();
        $('#result6').show()
        $('#result').hide();
        $('#result2').hide();
        $('#result3').hide();
        $('#result4').hide();
        $('#result5').hide();
        $('#result7').hide();
        $('.result_right2').hide();
    });
});

$(function () {
    $(".option6").click(function () {
        $(".option1").css({
            "background-color": "#f7f9fa", "padding": "0 14px 0 18px",
            "list-style": "none",
            "margin": "12px 0",
            "color": "black",
            "position": "relative",
            "border": "none",
            "box-shadow": "none",
            "font-weight": "normal",
            "height": "25px"
        });
        $('.result_right').hide();
        $('.result_right3').hide();
        $('.result_right4').hide();
        $('.result_right5').hide();
        $('.result_right6').hide();
        $('.result_right7').show();
        $('#result7').show()
        $('#result').hide();
        $('#result2').hide();
        $('#result3').hide();
        $('#result4').hide();
        $('#result5').hide();
        $('#result6').hide();
        $('.result_right2').hide();
    });
});




$(function () {
    $(".option1").click(function () {
        $(".option1").css({
            "background-color": "#4063bd", "padding": "0 14px 0 18px",
            "list-style": "none",
            "margin": "8px 0 10px",
            "color": "#fff",
            "position": "relative",
            "box-shadow": "0 2px 4px 0 rgb(0 0 0 / 16%)",
            "font-weight": "700",
            "height": "34px",
            "width": "104px",
            "display": "block",
            "right": "18px",
            "line-height": "34px",
            "border-radius": "17px"
        });
        $('#result').show();
        $('#result2').hide();
        $('#result3').hide();
        $('#result4').hide();
        $('#result5').hide();
        $('#result6').hide();
        $('#result7').hide();
        $('.result_right').show();
        $('.result_right2').hide();
        $('.result_right3').hide();
        $('.result_right4').hide();
        $('.result_right5').hide();
        $('.result_right6').hide();
        $('.result_right7').hide();

    });
});


$(function () {
    $(html).click({
        function(e) {
            if (!$(e.target).hasClass('.option')) {
                $('.option_item').css({
                    "background-color": "#4063bd", "padding": "0 14px 0 18px",
                    "list-style": "none",
                    "margin": "8px 0 10px",
                    "color": "#fff",
                    "position": "relative",
                    "box-shadow": "0 2px 4px 0 rgb(0 0 0 / 16%)",
                    "font-weight": "700",
                    "height": "34px",
                    "width": "104px",
                    "display": "block",
                    "right": "18px",
                    "line-height": "34px",
                    "border-radius": "17px"
                });
                $('#result2').hide();
                $('#result').hide();
                $('#result4').hide();
                $('#result3').hide();
                $('.result_right').hide();
                $('.result_right2').hide();
                $('.result_right3').hide();
                $('.result_right4').hide();
                $('.result_right5').hide();
                $('.result_right6').hide();
                $('.result_right7').hide();

            };


        }
    });
});



$(function () {
    $('.btn_more').click(function () {
        $('.btn_more').hide();
        $('.kservice').show();
        $('.btn_nomore').show().text("?????????").css({ "color": "rgba(32, 178, 98, 0.849)", "font-size": "13px" });
    });
});
$(function () {
    $('.btn_nomore').click(function () {
        $('.kservice').hide();
        $('.btn_nomore').hide();
        $('.btn_more').show().text("????????????").css({ "color": "gray", "font-size": "13px" });

    });

});

$(function () {
    $(".btn_set1").click(function () {
        $(this).css({ "color": "#3565c9" });
        $(".btn_set2").css({ "color": "darkgray" });
        $(".btn_set3").css({ "color": "darkgray" });

    });
});

$(function () {
    $(".btn_set1").click(function () {
        $(".list_view").show();
        $(".thumb_area").hide();
        $(".pm_btn_prev").hide();
        $(".pm_btn_next").hide();
        $(".pm_btn_prev1").show();
        $(".pm_btn_next1").show();
        $(".group_news").css({
            "border": "1px solid #dae1e6", "position": "relative",
            "height": "260px",
            "border-width": "1px 0px"
        });
    });
});

$(function () {
    $(".btn_set2").click(function () {
        $(".list_view").hide();
        $(".thumb_area").css({ "position": "absolute", "top": "-280px" });
        $(".thumb_area").show();
        $(".group_news").css({ "border": "none" });
        $(".pm_btn_prev1").hide();
        $(".pm_btn_next1").hide();
        $(".pm_btn_prev").show();
        $(".pm_btn_next").show();
        $(".pm_btn_prev").css({ "position": "absolute", "top": "-180px" });
        $(".pm_btn_next").css({ "position": "absolute", "top": "-180px" });
    });
});


$(function () {
    $(".btn_set2").click(function () {
        $(this).css({ "color": "#3565c9" });
        $(".btn_set1").css({ "color": "darkgray" });
        $(".btn_set3").css({ "color": "darkgray" });
    });
});



$(function () {
    $(".btn_sort2").click(function () {
        $(".btn_sort2").css({ "font-weight": "600" });
        $(".btn_sort").css({ "font-weight": "100" });
        $(".set_area").show();
        $(".btn_set2").css({ "color": "darkgray" });
        $(".btn_set").css({ "color": "#3565c9" });
        $(".btn_set3").css({ "color": "darkgray" });
        $(".list_view").show();
        $(".group_news").css({
            "border": "1px solid #dae1e6", "position": "relative",
            "height": "260px",
            "border-width": "1px 0px"
        });
        $(".thumb_area").hide();

    });
});

$(function () {
    $(".btn_sort").click(function () {
        $(".btn_sort").css({ "font-weight": "600" });
        $(".btn_sort2").css({ "font-weight": "100" });
        $("group_news_error").show();
        $(".list_view").hide();
        $(".set_area").hide();
        $(".thumb_area").hide();

    });
});





$(function () {
    var ticker = function () {
        timer = setTimeout(function () {
            $('#ticker li:first').animate({ marginTop: '-20px' }, 400, function () {
                $(this).detach().appendTo('ul#ticker').removeAttr('style');
            });
            ticker();
        }, 2000);
    };
    // 0??? ?????? ??????
    $(document).on('click', '.prev', function () {
        $('#ticker li:last').hide().prependTo($('#ticker')).slideDown();
        clearTimeout(timer);
        ticker();
        if ($('#pause').text() == 'Unpause') {
            $('#pause').text('Pause');
        };
    }); // 0??? ?????? ???

    // 1. ???????????? ?????? ?????? ????????????... ????????? ?????? setTimeout ??? clearTimeout ????????? ????????? ????????? ??????..
    $(document).on('click', '.next', function () {
        $('#ticker li:first').animate({ marginTop: '-20px' }, 400, function () {
            $(this).detach().appendTo('ul#ticker').removeAttr('style');
        });
        clearTimeout(timer);
        ticker();
        //3 ????????? ?????? ??????
        if ($('#pause').text() == 'Unpause') {
            $('#pause').text('Pause');
        }; //3 ????????? ??????
    }); // next ???. timer ??? ?????????????????? ???????????? ??????????????? ?????? ??? ????????? ????????? ???????????????.

    //2. ?????????????????? ??????, ?????? ?????? ????????? ????????? ??????...????????? 3??? ??????
    var autoplay = true;
    $(document).on('click', '.pause', function () {
        if (autoplay == true) {
            clearTimeout(timer);
            $(this).text('??????');
            autoplay = false;
        } else {
            autoplay = true;
            $(this).text('??????');
            ticker();
        }
    }); // ?????????????????? ???
    // 3. ???????????? ?????? ??????. 2??? ?????? ?????????.
    var tickerpause = function () {
        $('#pause').click(function () {
            $this = $(this);
            if ($this.text() == 'Pause') {
                $this.text('Unpause');
                clearTimeout(timer);
            }
            else {
                ticker();
                $this.text('Pause');
            }
        });

    };
    tickerpause();
    //3 ???????????? ?????? ???
    //4 ???????????? ????????? ??? ?????? ??????
    var tickerover = function () {
        $('#ticker').mouseover(function () {
            clearTimeout(timer);
        });
        $('#ticker').mouseout(function () {
            ticker();
        });
    };
    tickerover();
    // 4 ???
    ticker();

});

$(function () {
    $('.thumb_area').mouseenter(function () {
        $('.popup_wrap').show();
    });
    $('.thumb_area').mouseleave(function () {
        $('.popup_wrap').hide();
    });
});


$(function () {
    $(".id_gameap").click(function () {
        $('.id_gameap').css({
            "background-color": "#5bb9e1b2",
            "color": "white"
        });
    });
});

$(function () {
    $(".id_movie").click(function () {
        $('.id_gameap').css({
            "background-color": "white",
            "color": "black"
        });
    });
});

$(function () {
    $(".id_cargame").click(function () {
        $('.id_gameap').css({
            "background-color": "white",
            "color": "black"
        });
    });
});

$(function () {
    $(".id_living").click(function () {
        $('.id_gameap').css({
            "background-color": "white",
            "color": "black"
        });
    });
});
    


$(function () {
    $(".id_finance").click(function () {
        $('.id_gameap').css({
            "background-color": "white",
            "color": "black"
        });
    });
});

$(function () {
    $(".id_bboom").click(function () {
        $('.id_gameap').css({
            "background-color": "white",
            "color": "black"
        });
    });
});

$(function () {
    $(".id_sports").click(function () {
        $('.id_gameap').css({
            "background-color": "white",
            "color": "black"
        });
    });
});

$(function () {
    $(".id_enter").click(function () {
        $('.id_gameap').css({
            "background-color": "white",
            "color": "black"
        });
    });
});



/* $(function () {
    $(".id_gameap").click(function () {
        $('.id_gameap').css({
            "background-color": "#5bb9e1b2",
            "color": "white"
   
    });

}); */

 $(function () {
    $(html).click({
        function(e) {
            if (!($(e.target).hasClass('.category_item'))) {
                $('.id_gameap').css({
                    "background-color": "#5bb9e1b2",
                    "color": "white"                
                });
            };
        }
    });
}); 

$(function () {
    $('.btn_more1').click(function(){
        $('.group_theme').show()

    });
});




//??????
/* let rollingData = [
    '??????gggggg',
    '??????gggggg',
    '???ggggg???',
    '???sssss???',
    '???ddddd???',
    'qqqqq??????',
    '???eeeee???',
    'yyyy??????',
    '???kkkkk???',
    '???llllll???',
    '???bbbbbb???',
    '???vvvlvlv???'
]    // ????????? ???????????? ????????? ????????? ?????? ?????? ?????????

let timer = 2000 // ???????????? ?????? ????????? (1000 => 1???)

let first = document.getElementById('first'),
    second = document.getElementById('second'),
    third = document.getElementById('third')
let move = 2
let dataCnt = 1
let listCnt = 1

//??? ????????? ?????? ????????? ???????????? ?????? ??? ????????? ????????? ????????????.

first.children[0].innerHTML = rollingData[0]

setInterval(() => {
    if (move == 2) {
        first.classList.remove('card_sliding')
        first.classList.add('card_sliding_after')

        second.classList.remove('card_sliding_after')
        second.classList.add('card_sliding')

        third.classList.remove('card_sliding_after')
        third.classList.remove('card_sliding')

        move = 0
    } else if (move == 1) {
        first.classList.remove('card_sliding_after')
        first.classList.add('card_sliding')

        second.classList.remove('card_sliding_after')
        second.classList.remove('card_sliding')

        third.classList.remove('card_sliding')
        third.classList.add('card_sliding_after')

        move = 2
    } else if (move == 0) {
        first.classList.remove('card_sliding_after')
        first.classList.remove('card_sliding')

        second.classList.remove('card_sliding')
        second.classList.add('card_sliding_after')

        third.classList.remove('card_sliding_after')
        third.classList.add('card_sliding')

        move = 1
    }

    if (dataCnt < (rollingData.length - 1)) {
        document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
        dataCnt++
    } else if (dataCnt == rollingData.length - 1) {
        document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
        dataCnt = 0
    }

    if (listCnt < 2) {
        listCnt++
    } else if (listCnt == 2) {
        listCnt = 0
    }

    console.log(listCnt)
}, timer); */








