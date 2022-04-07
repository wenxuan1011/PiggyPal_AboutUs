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
      $("#lu_back").css("transform", "rotateY(180deg)");
      $("#lu").css("transform", "rotateY(0deg)");
      $("#lu").css("z-index", "1");
      $("#lu_back").css("z-index", "0");
      $("#lu_back").fadeToggle("1500");
});




$(".cu").hover(function(){
    $(".group_pic").css("opacity", "0.5");
    $(".cu").css("z-index", "1");
}, function(){
    $(".group_pic").css("opacity", "1");
});
