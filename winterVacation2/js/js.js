window.onload = function () {
    var game = document.getElementById("game");
        
    //js加载砖块

        for (var j=0; j<=4 ; j++) {
            var div = document.createElement("div");
            div.style.top = 10 + "px" ;
            div.style.left = 50 + j * 30 + "px" ;
            game.appendChild(div);

            var div2 = document.createElement("div");
            div2.style.top = 85 + "px" ;
            div2.style.left = 50 + j * 30 + "px" ;
            game.appendChild(div2);

            var div3 = document.createElement("div");
            div3.style.top = 160 + "px" ;
            div3.style.left = 50 + j * 30 + "px" ;
            game.appendChild(div3);

            var div7 = document.createElement("div");
            div7.style.top = 10 + "px" ;
            div7.style.left =300 + 50 + j * 30 + "px" ;
            game.appendChild(div7);

            var div8 = document.createElement("div");
            div8.style.top = 85 + "px" ;
            div8.style.left = 300 + 50 + j * 30 + "px" ;
            game.appendChild(div8);

            var div9 = document.createElement("div");
            div9.style.top = 160 + "px" ;
            div9.style.left =300 + 50 + j * 30 + "px" ;
            game.appendChild(div9);
            if (j != 4) {
                var div4 = document.createElement("div");
                div4.style.top = 10 + (j+1) * 15 +"px";
                div4.style.left = 50 + "px";
                game.appendChild(div4);

                var div5 = document.createElement("div");
                div5.style.top = 85 + (j+1) * 15 +"px";
                div5.style.left = 170 + "px";
                game.appendChild(div5);

                var div10 = document.createElement("div");
                div10.style.top = 10 + (j+1) * 15 +"px";
                div10.style.left = 300 + 50 + "px";
                game.appendChild(div10);

                var div11 = document.createElement("div");
                div11.style.top = 85 + (j+1) * 15 +"px";
                div11.style.left =300 + 170 + "px";
                game.appendChild(div11);
            }
        }
        for (var h=1;h<=3;h++) {
            for (var d=1 ;d<=h;d++) {
                var div11 = document.createElement("div");
                div11.style.left = 270 - (h-1)*15 + (d-1)*30 +"px";
                div11.style.top = 180 + h*15 + "px";
                game.appendChild(div11);

                var div12 = document.createElement("div");
                div12.style.left = 100 - (h-1)*15 + (d-1)*30 + "px" ;
                div12.style.top = 220 + h*15 + "px" ;
                game.appendChild(div12);

                var div13 = document.createElement("div");
                div13.style.left = 440 - (h-1)*15 + (d-1)*30 + "px" ;
                div13.style.top = 220 + h*15 + "px" ;
                game.appendChild(div13);
            }
        }

        for (var i=0 ; i<=10 ;i++) {
            var div6 = document.createElement("div");
            div6.style.top = 10 + i*15 + "px" ;
            div6.style.left = 270 + "px" ;
            game.appendChild(div6);

        }
        //加载结束

        //鼠标移动挡板。//这里我删去了y轴的变化
        var bandiv = document.getElementById("bandiv");
        var flag = false;
        var _x ,_y ;
        bandiv.onmousedown = function (event) {
            _x = event.clientX ;
            //  _y= event.clientY ;
            flag = true ;
        }
        document.onmousemove = function () {
            if (flag) {
                var addX = event.clientX - _x ;
            //  var addY = event.clientY - _y ;
            
                var bandivX = bandiv.offsetLeft + addX ;//鼠标移动多少，挡板就移动多少。
            //  var bandivY = bandiv.offsetTop + addY 
            
                _x = event.clientX;
            //   _y = event.clientY;
                
                //左右边界 //x轴
                if (bandivX  >= (600-bandiv.offsetWidth) ) {
                    bandivX = 600-bandiv.offsetWidth ;
                }
                else if (bandivX <= 0) {
                    bandivX = 0 ;
                }
                
                //上下边界 //y轴
                // if (bandivY >= 587) {
                //     bandivY = 587 ; 
                // }
                // else if (bandivY <= 0) {
                //     bandivY = 0 ;
                // }
                
                bandiv.style.left = bandivX + "px" ;
                //bandiv.style.top = bandivY + "px" ;
            }
                   
        }
        document.onmouseup = function () {
            flag = false;
        }
    //鼠标移动挡板结束

    var money = document.getElementById("money");
    money.onclick = function () {
        alert("想什么呢，充值是不可能的");
    }
    var explain = document.getElementById("explain");
    var canle = document.getElementById("canle");
    explain.onclick = function () {
        document.getElementById("explain_two").style.display = "block" ;
        document.getElementById("game").style.display = "none"; 
    }
    canle.onclick = function () {
        document.getElementById("explain_two").style.display = "none" ;
        document.getElementById("game").style.display = "block"; 
    }

    //小球移动
    var numberOne ,numberTwo ,numberThree , judgeOne ,judgeTwo ,judgeThree ;
    var enterTimer = null;
    var distance = 0 ;
    var allDiv = document.getElementById("game").getElementsByTagName("div");
    document.onkeydown = function (event) {
        var e = event || window.event ;
        if (e && e.keyCode == 32) {
            judge = true ;
            judgeOne = 0;
            judgeTwo = 0;
            judgeThree = 0 ;
            numberOne = Math.ceil(76*Math.random());

            do {
                numberTwo =Math.ceil(76*Math.random());
            }while(numberTwo==numberOne);

            do {
                numberThree =Math.ceil(76*Math.random());
            }while( (numberThree == numberOne) || (numberThree == numberTwo) );

            allDiv[numberOne].style.backgroundColor = " black " ;
            allDiv[numberThree].style.backgroundColor = " black " ;
            allDiv[numberTwo].style.backgroundColor = " black " ;
             
            var round = document.getElementById("round");
            document.getElementById("game").style.display = "block"; 
            document.getElementById("explain_two").style.display = "none" ;
            var leftMax = document.getElementById("game").clientWidth - round.clientWidth;
            var topMax = document.getElementById("game").clientHeight - round.clientHeight;
            var randomNumber = Math.ceil(2*Math.random());
            if (randomNumber == 1) {
                randomNumber = -1 ;
            }
            else {
                randomNumber = 1 ;
            }
            
            var leftSpeed =  randomNumber*(2 + Math.ceil( 2*Math.random() ) );
                topSpeed =  -2 - Math.ceil( 2*Math.random() );
            //debugger;
            var over = 0;
            enterTimer = setInterval( function() {

            var roundLeft = round.offsetLeft + leftSpeed ;
            var roundTop = round.offsetTop + topSpeed ;

            //左右边界
            if (roundLeft >= leftMax) {
                roundLeft = leftMax;
                leftSpeed = -leftSpeed;
            }
            else if (roundLeft <= 0) {
                roundLeft = 0;
                leftSpeed = -leftSpeed;
            }

            //上下边界
            if (roundTop >= topMax) {
                roundTop = topMax ;
                topSpeed = -topSpeed;
               
            }
            else if (roundTop <= 0) {
                roundTop = 0;
                topSpeed = -topSpeed;
            }

            //碰撞检测

            
            var circleX = roundLeft + 10 ;//圆心坐标.
            var circleY = roundTop + 10 ;
            //debugger;
            for (var i=0; i<allDiv.length; i++) {

                var closestPointX = 0 ;
                var closestPointY = 0 ;

                var rectangleX = allDiv[i].offsetLeft ;
                var rectangleY = allDiv[i].offsetTop ;
                var rectangleW = allDiv[i].offsetWidth ;
                var rectangleH = allDiv[i].offsetHeight ;

                //确定最近点.
                //x轴检测
                if (circleX <= rectangleX) {

                    closestPointX = rectangleX ;
                }
                else if (circleX >= (rectangleX + rectangleW) ) {
                    
                    closestPointX = rectangleX + rectangleW ;
                }
                else {
                    closestPointX = circleX ;
                }
                //y轴检测
                if (circleY >= rectangleY ) {
                    
                    closestPointY = rectangleY ;
                }
                else if (circleY <= (rectangleY +rectangleH)) {
                    
                    closestPointY = rectangleH + rectangleY ; 
                }
                else {
                    closestPointY = circleY ;
                }
                //距离
                distance = Math.pow((circleX - closestPointX),2) + Math.pow((circleY - closestPointY),2);
                if( distance <= 100 ) {
                       //debugger;
                    if ( closestPointY == rectangleY || closestPointY == (rectangleY + rectangleH) ){
                         topSpeed = -topSpeed;
                    }
                    if (closestPointX == rectangleX || closestPointX == (rectangleX + rectangleW) ) {
                        leftSpeed = -leftSpeed;
                       
                }
                //debugger;
                 if (i!=0){

                    if (i==numberOne) {
                        judgeOne++ ;
                        if (judgeOne == 1) {
                            allDiv[i].style.backgroundColor = "rgb(107, 107, 107)";
                        }
                        else if (judgeOne ==2) {
                            allDiv[i].style.backgroundColor = "rgb(214, 219, 214)";
                        }
                        else if (judgeOne == 3) {
                            allDiv[i].style.display = "none" ;
                            over++ ;
                            bandiv.style.width = 70 + "px" ;
                            
                            setTimeout(function () {
                                bandiv.style.width = 48 + "px" ;
                            },10000);

                        }
                    }
                    else if ( i == numberTwo ) {
                        judgeTwo++ ;
                        if (judgeTwo == 1) {
                            allDiv[i].style.backgroundColor = "rgb(107, 107, 107)";
                        }
                        else if (judgeTwo ==2) {
                            allDiv[i].style.backgroundColor = "rgb(214, 219, 214)";
                        }
                        else if (judgeTwo == 3) {
                            allDiv[i].style.display = "none" ;
                            over++ ;
                            bandiv.style.width = 30 + "px" ;
                            setTimeout(function () {
                                bandiv.style.width = 48 + "px" ;
                            },8000)
                        }
                    }
                    else if (i == numberThree) {
                        judgeThree++ ;
                        if (judgeThree == 1) {
                            allDiv[i].style.backgroundColor = "rgb(107, 107, 107)";
                        }
                        else if (judgeThree ==2) {
                            allDiv[i].style.backgroundColor = "rgb(214, 219, 214)";
                        }
                        else if (judgeThree == 3) {
                            allDiv[i].style.display = "none" ;
                            over++ ;
                            bandiv.style.width = 100 + "px" ;
                            setTimeout(function () {
                                bandiv.style.width = 48 + "px" ;
                            },8000)
                        }
                    }
                    else {
                        allDiv[i].style.display = "none" ;
                        over++ ;

                    }

                 }
                   
                    
                if (over == (allDiv.length-1)) {
                    clearInterval(enterTimer);
                    for (var z=1;z<allDiv.length;z++) {
                        allDiv[z].style.display = "block" ; 
                        allDiv[z].style.backgroundColor = "rgb(214, 219, 214)";
                    }
                    document.getElementById("game_win").style.display = "block" ;
                    document.getElementById("game").style.display = "none" ;
                    bandiv.style.left = 266 +"px" ;
                    bandiv.style.top = 500 + "px" ;
                    round.style.left = 280 + "px";
                    round.style.top = 400 + "px";
                } 
                
                }

            }

            round.style.left = roundLeft + "px";
            round.style.top = roundTop + "px";
            if ( roundTop >=560) {
                    clearInterval(enterTimer);
                    for (var z=1;z<allDiv.length;z++) {
                        allDiv[z].style.display = "block" ; 
                        allDiv[z].style.backgroundColor = "rgb(214, 219, 214)";
                    }
                    document.getElementById("game_fail").style.display = "block" ;
                    document.getElementById("game").style.display = "none" ;
                    bandiv.style.left = 266 +"px" ;
                    bandiv.style.top = 500 + "px" ;
                    round.style.left = 280 + "px";
                    round.style.top = 400 + "px";
                    bandiv.style.width = 48 + "px" ;
            }

            },15)
        }
       
        if (e && e.keyCode == 37) {
            var number = 0 ;
            bandiv.style.left =  bandiv.offsetLeft - 15 + "px" ;
               if (parseInt(bandiv.style.left)<=0) {
                   bandiv.style.left = 0 +"px" ;
               }

            
        }

        if(e && e.keyCode ==39) {
            var judge = 0 ;
            bandiv.style.left = bandiv.offsetLeft + 15 + "px" ; 
                if (bandiv.offsetLeft >= (600 - bandiv.offsetWidth)) {
                    bandiv.style.left = 600 -bandiv.offsetWidth;
                }
          
        }


    }
    var againEnter = document.getElementById("again_enter") ;
    var Return = document.getElementById("return");
    Return.onclick = function () {
        var allDiv = document.getElementById("game").getElementsByTagName("div");
        clearInterval(enterTimer);
        for (var z=1;z<allDiv.length;z++) {
            allDiv[z].style.display = "block" ; 
            allDiv[z].style.backgroundColor = "rgb(214, 219, 214)";
        }
        document.getElementById("game_win").style.display = "none" ;
        document.getElementById("game").style.display = "block" ;
        bandiv.style.left = 266 +"px" ;
        bandiv.style.top = 500 + "px" ;
        round.style.left = 280 + "px";
        round.style.top = 400 + "px";
    }
    againEnter.onclick = function () {
        var allDiv = document.getElementById("game").getElementsByTagName("div");
        clearInterval(enterTimer);
        for (var z=1;z<allDiv.length;z++) {
            allDiv[z].style.display = "block" ; 
            allDiv[z].style.backgroundColor = "rgb(214, 219, 214)";
        }
        document.getElementById("game_fail").style.display = "none" ;
        document.getElementById("game").style.display = "block" ;
        bandiv.style.left = 266 +"px" ;
        bandiv.style.top = 500 + "px" ;
        round.style.left = 280 + "px";
        round.style.top = 400 + "px";
    }
}