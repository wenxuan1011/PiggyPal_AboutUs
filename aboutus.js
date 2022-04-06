var namerow=["tu","shen","zhuang","huang","lu"];
var picrow=["Tu","Shen","Zhuang","Huang","Lu"];
var picposition=["-9.03%", "16.18%", "41.39%", "66.6%", "91.81%"];
var buffer=namerow[4];
var delay = function(s){
    return new Promise(function(resolve,reject){
     setTimeout(resolve,s); 
    });
  };

$('#arrow-left').click(function(){
    delay().then(function(){
        $("#tail").css('background',`url(./img/photo/${picrow[0]}.png)no-repeat center / contain`);
    $('.people').animate({
        left:'-=25.28%'
    });
    return(400);
    }).then(function(){
        buffer=namerow[0];
        return delay(10);
    }).then(function(){
        for(var i=0;i<5;i++){namerow[i]=namerow[i+1];console.log(namerow[i]);}
        return delay(1);
    }).then(function(){
        namerow[4]=buffer;
        return delay(1);
    }).then(function(){
        buffer=picrow[0];
        return delay(1);
    }).then(function(){
        for(var i=0;i<5;i++){picrow[i]=picrow[i+1];console.log(picrow[i]);}
        return delay(1);
    }).then(function(){
        picrow[4]=buffer;
        return delay(400);
    }).then(function(){
        for(var i=0; i<5; i++){
        $(`#${namerow[i]}`).css('background',`url(./img/photo/${picrow[i]}.png) no-repeat center / contain`);
        $(`#${namerow[i]}`).css("left",`${picposition[i]}`);
        console.log("change");
        console.log(namerow[i]);
        console.log(picrow[i]);
        console.log(picposition[i]);
        }
        return delay(1500);
    })
    
    $('#head').css("left","-34.31%")
    $('#tail').css("left","117.09%")
    
})
$('#arrow-right').click(function(){
    delay().then(function(){$("#head").css('background',`url(./img/photo/${picrow[4]}.png)no-repeat center / contain`);
    $('.people').animate({
        left:'+=25.28%'
    });
    return(400);
}).then(function(){
        buffer=namerow[4];
        return delay(10);
    }).then(function(){
        for(var i=0;i<5;i++){namerow[4-i]=namerow[3-i];console.log(namerow[4-i]);}
        return delay(1);
    }).then(function(){
        namerow[0]=buffer;
        return delay(1);
    }).then(function(){
        buffer=picrow[4];
        return delay(1);
    }).then(function(){
        for(var i=0;i<5;i++){picrow[4-i]=picrow[3-i];console.log(picrow[4-i]);}
        return delay(1);
    }).then(function(){
        picrow[0]=buffer;
        return delay(400);
    }).then(function(){
        for(var i=0; i<5; i++){
        $(`#${namerow[i]}`).css('background',`url(./img/photo/${picrow[i]}.png) no-repeat center / contain`);
        $(`#${namerow[i]}`).css("left",`${picposition[i]}`);
        console.log("change");
        console.log(namerow[i]);
        console.log(picrow[i]);
        console.log(picposition[i]);
        }
        return delay(1500);
    })
    
    $('#head').css("left","-34.31%")
    $('#tail').css("left","117.09%")    
})
