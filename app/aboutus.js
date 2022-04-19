/*navbar*/
$("#home").hover(function(){
      $("#box1 .underline").fadeToggle("100");
      $("#box3 .underline").fadeToggle("100");
}, function(){
      $("#box1 .underline").fadeToggle("100");
      $("#box3 .underline").fadeToggle("100");
});

$("#project").hover(function(){
      $("#box2 .underline").fadeToggle("100");
      $("#box3 .underline").fadeToggle("100");
}, function(){
      $("#box2 .underline").fadeToggle("100");
      $("#box3 .underline").fadeToggle("100");
});


/*flip*/
$("#zhuang").click(function(){
      $("#zhuang").css("transition-duration", "1.5s");
      $("#zhuang").css("transform", "rotateY(180deg)");
      $("#zhuang_back").css("transform", "rotateY(0deg)");
      $("#zhuang").css("z-index", "0");
      $("#zhuang_back").css("z-index", "1");
      $("#zhuang_back").fadeToggle("1500");
});

$("#zhuang_back").click(function(){
      $("#zhuang_back").css("transition-duration", "1.5s");
      $("#zhuang").css("transition-duration", "1.5s");
      $("#zhuang_back").css("transform", "rotateY(180deg)");
      $("#zhuang").css("transform", "rotateY(0deg)");
      $("#zhuang").css("z-index", "1");
      $("#zhuang_back").css("z-index", "0");
      $("#zhuang_back").fadeToggle("1500");
});

$("#tu").click(function(){
      $("#tu").css("transition-duration", "1.5s");
      $("#tu").css("transform", "rotateY(180deg)");
      $("#tu_back").css("transform", "rotateY(0deg)");
      $("#tu").css("z-index", "0");
      $("#tu_back").css("z-index", "1");
      $("#tu_back").fadeToggle("1500");
});

$("#tu_back").click(function(){
      $("#tu_back").css("transition-duration", "1.5s");
      $("#tu").css("transition-duration", "1.5s");
      $("#tu_back").css("transform", "rotateY(180deg)");
      $("#tu").css("transform", "rotateY(0deg)");
      $("#tu").css("z-index", "1");
      $("#tu_back").css("z-index", "0");
      $("#tu_back").fadeToggle("1500");
});

$("#shen").click(function(){
      $("#shen").css("transition-duration", "1.5s");
      $("#shen").css("transform", "rotateY(180deg)");
      $("#shen_back").css("transform", "rotateY(0deg)");
      $("#shen").css("z-index", "0");
      $("#shen_back").css("z-index", "1");
      $("#shen_back").fadeToggle("1500");
});

$("#shen_back").click(function(){
      $("#shen_back").css("transition-duration", "1.5s");
      $("#shen").css("transition-duration", "1.5s");
      $("#shen_back").css("transform", "rotateY(180deg)");
      $("#shen").css("transform", "rotateY(0deg)");
      $("#shen").css("z-index", "1");
      $("#shen_back").css("z-index", "0");
      $("#shen_back").fadeToggle("1500");
});

$("#huang").click(function(){
      $("#huang").css("transition-duration", "1.5s");
      $("#huang").css("transform", "rotateY(180deg)");
      $("#huang_back").css("transform", "rotateY(0deg)");
      $("#huang").css("z-index", "0");
      $("#huang_back").css("z-index", "1");
      $("#huang_back").fadeToggle("1500");
});

$("#huang_back").click(function(){
      $("#huang_back").css("transition-duration", "1.5s");
      $("#huang").css("transition-duration", "1.5s");
      $("#huang_back").css("transform", "rotateY(180deg)");
      $("#huang").css("transform", "rotateY(0deg)");
      $("#huang").css("z-index", "1");
      $("#huang_back").css("z-index", "0");
      $("#huang_back").fadeToggle("1500");
});

$("#lu").click(function(){
      $("#lu").css("transition-duration", "1.5s");
      $("#lu").css("transform", "rotateY(180deg)");
      $("#lu_back").css("transform", "rotateY(0deg)");
      $("#lu").css("z-index", "0");
      $("#lu_back").css("z-index", "1");
      $("#lu_back").fadeToggle("1500");
});

$("#lu_back").click(function(){
      $("#lu_back").css("transition-duration", "1.5s");
      $("#lu").css("transition-duration", "1.5s");
      $("#lu_back").css("transform", "rotateY(180deg)");
      $("#lu").css("transform", "rotateY(0deg)");
      $("#lu").css("z-index", "1");
      $("#lu_back").css("z-index", "0");
      $("#lu_back").fadeToggle("1500");
});


/*contact us*/
$(".cu").hover(function(){
    $(".group_pic").css("opacity", "0.5");
    $(".cu").css("z-index", "2");
}, function(){
    $(".group_pic").css("opacity", "1");
    $(".cu").css("z-index", "0");
});


/*button*/
var namerow=["tu","shen","zhuang","huang","lu"];
var namebackrow=["tu_back","shen_back","zhuang_back","huang_back","lu_back"]
var picrow=["Tu","Shen","Zhuang","Huang","Lu"];
var picposition=["-9.03%", "16.18%", "41.39%", "66.6%", "91.81%"];

var buffer=namerow[4];
var delay = function(s){
    return new Promise(function(resolve,reject){
     setTimeout(resolve,s); 
    });
  };

$('#arrow-right').click(function(){
    delay().then(function(){
        $("#tail").css('background',`url(./img/photo/${picrow[0]}.png)no-repeat center / contain`);
        $("#tail_back").css('background',`url(./img/nameCard/${picrow[0]}.png)no-repeat center / contain`);
        for(var i=0;i<5;i++){$(`#${namerow[i]}`).css("transition-duration", "0s");$(`#${namerow[i]}_back`).css("transition-duration", "0s");}
        $('.people').animate({left:'-=25.21%'});
        for(var i=0;i<5;i++){$(`#${namerow[i]}`).css("transition-duration", "0s");$(`#${namerow[i]}_back`).css("transition-duration", "0s");}
        console.log("left-move");
        return delay(400);
    }).then(function(){
        buffer=namerow[0];
        return delay(1);
    }).then(function(){
        for(var i=0;i<5;i++){namerow[i]=namerow[i+1];}
        return delay(1);
    }).then(function(){
        namerow[4]=buffer;
        return delay(1);
    }).then(function(){
        buffer=picrow[0];
        return delay(1);
    }).then(function(){
        for(var i=0;i<5;i++){picrow[i]=picrow[i+1];}
        return delay(1);
    }).then(function(){
        picrow[4]=buffer;
        return delay(1);
    }).then(function(){
        for(var i=0; i<5; i++){
        $(`#${namerow[i]}`).css('background',`url(./img/photo/${picrow[i]}.png) no-repeat center / contain`);
        $(`#${namerow[i]}_back`).css('background',`url(./img/nameCard/${picrow[i]}.png) no-repeat center / contain`);
        $(`#${namerow[i]}`).css("left",`${picposition[i]}`);
        $(`#${namerow[i]}_back`).css("left",`${picposition[i]}`);
        console.log("change");
        console.log(namerow[i]);
        console.log(namebackrow[i]);
        console.log(picrow[i]);
        console.log(picposition[i]);
        }
        return delay(1500);
    })

    $('#head').css("left","-34.31%")
    $('#head_back').css("left","-34.31%")
    $('#tail').css("left","117.09%")
    $('#tail_back').css("left","-34.31%")

})
$('#arrow-left').click(function(){
    delay().then(function(){
        $("#head").css('background',`url(./img/photo/${picrow[4]}.png)no-repeat center / contain`);
        $("#head_back").css('background',`url(./img/nameCard/${picrow[4]}.png)no-repeat center / contain`);
        for(var i=0;i<5;i++){$(`#${namerow[i]}`).css("transition-duration", "0s");$(`#${namerow[i]}_back`).css("transition-duration", "0s");}
        $('.people').animate({left:'+=25.21%'});
        console.log("right-move");
        return delay(400);
    }).then(function(){
        buffer=namerow[4];
        return delay(1);
    }).then(function(){
        for(var i=0;i<5;i++){namerow[4-i]=namerow[3-i];}
        return delay(1);
    }).then(function(){
        namerow[0]=buffer;
        return delay(1);
    }).then(function(){
        buffer=picrow[4];
        return delay(1);
    }).then(function(){
        for(var i=0;i<5;i++){picrow[4-i]=picrow[3-i];}
        return delay(1);
    }).then(function(){
        picrow[0]=buffer;
        return delay(1);
    }).then(function(){
        for(var i=0; i<5; i++){
        $(`#${namerow[i]}`).css('background',`url(./img/photo/${picrow[i]}.png) no-repeat center / contain`);
        $(`#${namerow[i]}_back`).css('background',`url(./img/nameCard/${picrow[i]}.png) no-repeat center / contain`);
        $(`#${namerow[i]}`).css("left",`${picposition[i]}`);
        $(`#${namerow[i]}_back`).css("left",`${picposition[i]}`);
        console.log("change");
        console.log(namerow[i]);
        console.log(picrow[i]);
        console.log(picposition[i]);
        }
        return delay(1500);
    })

    $('#head').css("left","-34.31%")
    $('#head_back').css("left","-34.31%")
    $('#tail').css("left","117.09%")
    $('#tail_back').css("left","-34.31%")   
})
