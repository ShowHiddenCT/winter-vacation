window.onload = function () {
    var mousedowny = 0;
    var mouseupy = 0;
    var number = 0;
    var i = null;
    var carousal = document.getElementById("carousal");
    var allI = document.getElementById("relevantButton").getElementsByTagName("i");
    var sameHeight = document.getElementById("sameover").offsetHeight;
    carousal.onmousedown = function (event) {
        mousedowny = event.clientY;

        carousal.onmouseup = function (event) {
            mouseupy = event.clientY;

            lunbo(mouseupy, mousedowny, number);

        }
    }
    function lunbo(mouseupy, mousedowny, number) {
        if (mouseupy > mousedowny) {
            if (parseInt(carousal.style.top) == 0) {
                number = 0;
            }
            else {
                number = 1;
            }

        }
        if (mousedowny > mouseupy) {
            if (parseInt(carousal.style.top) == -5 * (document.getElementById("sameover").offsetHeight)) {
                number = 0;
            }
            else {
                number = 2;
            }
        }
        var sameHeight = document.getElementById("sameover").offsetHeight;
        var carouTop = parseInt(carousal.style.top);
        var part = sameHeight / 40;
        var judge = 0;
        if (number == 1) {
            clearInterval(i);
            i = setInterval(function () {
                judge++;
                carousal.style.top = parseInt(carousal.style.top) + part + "px";
                if (judge == 40) {
                    clearInterval(i);
                    carousal.style.top = carouTop + sameHeight + "px";
                    //console.log(parseInt(carousal.style.top));
                    changeButton();
                }
            }
                , 10);
        }
        if (number == 2) {
            clearInterval(i);
            i = setInterval(function () {
                judge++;
                carousal.style.top = parseInt(carousal.style.top) - part + "px";
                if (judge == 40) {
                    clearInterval(i);
                    carousal.style.top = carouTop - sameHeight + "px";
                    //console.log(parseInt(carousal.style.top));
                    changeButton();
                }
            }
                , 10);
        }
        if (number == 0) {
            carousal.style.top = carouTop + "px";
        }
    }


    sameHeight = document.getElementById("sameover").offsetHeight;

    window.onresize = function () {
        scale();
    };
    scale();
    function scale() {
        if (window.devicePixelRatio !== 1) {
            changeTop();
        }
        else {
            var newTop = parseInt(carousal.style.top);
            var numberOne = newTop / sameHeight;
            var newHeight = document.getElementById("sameover").offsetHeight;
            carousal.style.top = numberOne * newHeight + "px";
            sameHeight = document.getElementById("sameover").offsetHeight;
        }
    }
    function changeTop() {
        var newTop = parseInt(carousal.style.top);
        var numberOne = newTop / sameHeight;
        var newHeight = document.getElementById("sameover").offsetHeight;
        carousal.style.top = numberOne * newHeight + "px";
        sameHeight = document.getElementById("sameover").offsetHeight;
    }
    function changeButton() {
        var decidenumber = parseInt(carousal.style.top) / document.getElementById("sameover").offsetHeight;
        if (decidenumber == -5) {
            document.getElementById("father_re").style.display = "none";
        }
        else {
            document.getElementById("father_re").style.display = "block";
        }
        switch (decidenumber) {
            case 0:
                {
                    changeButton(decidenumber);
                    break;
                }
            case -1:
                {
                    changeButton(decidenumber);
                    break;
                }
            case -2:
                {
                    changeButton(decidenumber);
                    break;
                }
            case -3:
                {
                    changeButton(decidenumber);
                    break;
                }
            case -4:
                {
                    changeButton(decidenumber);
                    break;
                }
            case -5:
                {
                    changeButton(decidenumber);

                    break;
                }
            default:
                {
                    break;
                }
        }
        function changeButton(x) {

            for (var i = 0; i < allI.length; i++) {
                allI[i].className = "water_one";
                if (i == -(x)) {
                    allI[i].className = "water_two";
                }
            }
        }

    }

    allI[0].onclick = function () {
        var goalTop = -0 * document.getElementById("sameover").offsetHeight;
        move(goalTop);
        type(allI[0]);
    }
    allI[1].onclick = function () {
        var goalTop = -1 * document.getElementById("sameover").offsetHeight;
        move(goalTop);
        type(allI[1]);
    }
    allI[2].onclick = function () {
        var goalTop = -2 * document.getElementById("sameover").offsetHeight;
        move(goalTop);
        type(allI[2]);
    }
    allI[3].onclick = function () {
        var goalTop = -3 * document.getElementById("sameover").offsetHeight;
        move(goalTop);
        type(allI[3]);
    }
    allI[4].onclick = function () {
        var goalTop = -4 * document.getElementById("sameover").offsetHeight;
        move(goalTop);
        type(allI[4]);
    }
    allI[5].onclick = function () {
        var goalTop = -5 * document.getElementById("sameover").offsetHeight;
        move(goalTop);
        type(allI[5]);
    }

    function move(goalTop) {
        var instantTop = parseInt(carousal.style.top);
        //console.log(instantTop);
        //console.log(goalTop);
        var speed = (goalTop - instantTop) / 40;
        //console.log(speed);
        var cycleNumber = 0;
        var n = setInterval(function () {
            cycleNumber++;
            carousal.style.top = parseInt(carousal.style.top) + speed + "px";
            //console.log(carousal.style.top);
            if (cycleNumber == 40) {
                clearInterval(n);
                carousal.style.top = goalTop + "px";
            }
        }, 10)
    }
    function type(x) {
        for (var i = 0; i < 6; i++) {
            allI[i].className = "water_one";
        }
        x.className = "water_two";
    }


    var twitter = document.getElementById("twitter");
    var wechat = document.getElementById("wechat");
    var changecolorOne = document.getElementById("changecolor_one");
    var changecolorTWo = document.getElementById("changecolor_two");
    var changecolorThree = document.getElementById("changecolor_three");
    var changecolorFour = document.getElementById("changecolor_four");
    function mousein(x) {
        x.style.color = "white";
    }
    function mouseout(x) {
        x.style.color = "#9b8e8e";
    }
    twitter.onmouseover = function () {
        changecolorOne.className = "twitter_child_one";
        mousein(changecolorTWo);
    }
    twitter.onmouseout = function () {
        changecolorOne.className = "twitter_child";
        mouseout(changecolorTWo);
    }
    wechat.onmouseover = function () {
        changecolorThree.className = "wechat_child_one";
        document.getElementById("delta").style.display = "block";
        document.getElementById("two_code").style.display = "block";
        mousein(changecolorFour);
    }
    wechat.onmouseout = function () {
        changecolorThree.className = "wechat_child";
        document.getElementById("delta").style.display = "none";
        document.getElementById("two_code").style.display = "none";
        mouseout(changecolorFour);
    }

    var allA = document.getElementById("grey_childtwo").getElementsByTagName("a");
    //alert(allA.length);
    for (var i = 0; i < allA.length; i++) {
        allA[i].onmouseover = function () {
            this.style.color = "white";
        }
        allA[i].onmouseout = function () {
            this.style.color = "#9b8e8e";
        }
    }

    var liAll = document.getElementById("menu").getElementsByTagName("li");
    var iAll = document.getElementById("menu").getElementsByTagName("i");
    var emAll = document.getElementById("menu").getElementsByTagName("em");
    var appearTwo = document.getElementById("appeartwo");
    var appearThree = document.getElementById("appearthree");
    var appearFour = document.getElementById("appearfour");
    var appearFive = document.getElementById("appearfive");

    var judgenumber = 1;
    var M = null, H = null, W = null, L = null, S = null, J = null, K = null, P = null;


    for (var i = 1; i < liAll.length; i++) {
        liAll[i].id = i;
        liAll[i].onmouseenter = function () {
            if (this.id == 1) {
                if (judgenumber == 1) { }
                else {
                    iAll[this.id - 1].className = "diphotofatherone_two";
                    emAll[0].style.display = "none";
                    this.className = "cat_all_two greenbordertwo";
                    if (judgenumber == 2) {
                        liAll[2].className = "cat_all_two orangebordertwo";
                    }
                    else {
                        liAll[2].className = "";
                    }
                }
                liAll[0].style.background = "rgb(82, 155, 82)  ";
                document.getElementById("chanfontone").className = "menuli_oneb_p menuli_oneb_two";
            }


            if (this.id == 2) {
                if (judgenumber == 2) { }
                else {
                    iAll[1].className = "diphotofathertwo_two";
                    emAll[0].style.display = "none";
                    emAll[1].style.display = "none";
                    this.className = "cat_all_two orangeborder orangebordertwo";
                    if (judgenumber == 1) {
                        liAll[1].className = "cat_all_two";
                    }
                    else if (judgenumber == 3) {
                        liAll[3].className = "cat_all_two pinkbordertwo";
                    }
                    else {
                        liAll[1].className = "";
                        liAll[3].className = "";
                    }
                }
                clearInterval(M);
                M = setInterval(function () {
                    if (parseInt(appearTwo.style.width) >= 60) {
                        clearInterval(M);
                        appearTwo.style.width = "80px";
                        document.getElementById("appeartwoone").style.display = "block";
                    }
                    else {
                        appearTwo.style.width = parseInt(appearTwo.style.width) + 5 + "px";
                    }
                }, 10);
                liAll[0].style.background = " rgb(255, 191, 0)";
                document.getElementById("chanfonttwo").className = "menuli_twob_p menuli_twob_two";
            }


            if (this.id == 3) {

                if (judgenumber == 3) { }
                else {
                    iAll[this.id - 1].className = "diphotofatherthree_two";
                    emAll[1].style.display = "none";
                    emAll[2].style.display = "none";
                    this.className = "cat_all_two pinkborder pinkbordertwo";
                    if (judgenumber == 2) {
                        liAll[2].className = "cat_all_two orangeborder";
                    }
                    else if (judgenumber == 4) {
                        liAll[4].className = "cat_all_two bluebordertwo";
                    }
                    else {
                        liAll[2].className = "";
                        liAll[4].className = "";
                    }
                }
                clearInterval(W);
                W = setInterval(function () {
                    if (parseInt(appearThree.style.width) >= 60) {
                        clearInterval(W);
                        appearThree.style.width = "80px";
                        document.getElementById("appearthreeone").style.display = "block";
                    }
                    else {
                        appearThree.style.width = parseInt(appearThree.style.width) + 5 + "px";
                    }
                }, 10);

                liAll[0].style.background = "rgb(255, 175, 188) ";

                document.getElementById("chanfontthree").className = "menuli_threeb_p menuli_threeb_two";
            }



            if (this.id == 4) {

                if (judgenumber == 4) { }
                else {
                    iAll[this.id - 1].className = "diphotofatherfour_two";
                    emAll[2].style.display = "none";
                    emAll[3].style.display = "none";
                    this.className = "cat_all_two blueborder bluebordertwo";
                    if (judgenumber == 3) {
                        liAll[3].className = "cat_all_two pinkborder";
                    }
                    else if (judgenumber == 5) {
                        liAll[5].className = "cat_all_two greenbordertwo";
                    }
                    else {
                        liAll[3].className = "";
                        liAll[5].className = "";
                    }
                }
                clearInterval(S);
                S = setInterval(function () {
                    if (parseInt(appearFour.style.width) >= 60) {
                        clearInterval(S);
                        appearFour.style.width = "80px";
                        document.getElementById("appearfourone").style.display = "block";
                    }
                    else {
                        appearFour.style.width = parseInt(appearFour.style.width) + 5 + "px";
                    }
                }, 10);

                liAll[0].style.background = "rgb(133, 205, 233) ";
                document.getElementById("chanfontfour").className = "menuli_fourb_p menuli_fourb_two";
            }

            if (this.id == 5) {

                if (judgenumber == 5) { }
                else {
                    iAll[this.id - 1].className = "diphotofatherfive_two";
                    emAll[3].style.display = "none";
                    emAll[4].style.display = "none";
                    this.className = "cat_all_two greenborder greenbordertwo";
                    if (judgenumber == 4) {
                        liAll[4].className = "cat_all_two blueborder";
                    }
                    else if (judgenumber == 6) {
                        liAll[6].className = "cat_all_two orangebordertwo";
                    }
                    else {
                        liAll[4].className = "";
                        liAll[6].className = "";
                    }
                }
                clearInterval(K);
                K = setInterval(function () {
                    if (parseInt(appearFive.style.width) >= 60) {
                        clearInterval(K);
                        appearFive.style.width = "80px";
                        document.getElementById("appearfiveone").style.display = "block";
                    }
                    else {
                        appearFive.style.width = parseInt(appearFive.style.width) + 5 + "px";
                    }
                }, 10);
                liAll[0].style.background = "rgb(82, 155, 82) ";
                document.getElementById("chanfontfive").className = "menuli_fiveb_p menuli_fiveb_two";
            }


            if (this.id == 6) {
                if (judgenumber == 6) { }
                else {
                    iAll[this.id - 1].className = "diphotofathersix_two";
                    emAll[4].style.display = "none";
                    emAll[5].style.display = "none";
                    this.className = "cat_all_two orangeborder orangebordertwo";
                    if (judgenumber == 5) {
                        liAll[5].className = "cat_all_two greenborder";
                    }
                    else {
                        liAll[5].className = "";
                    }
                }
                liAll[0].style.background = "rgb(255, 191, 0) ";

                document.getElementById("chanfontsix").className = "menuli_sixb_p menuli_sixb_two";
            }
        }


        liAll[i].onmouseleave = function () {
            if (this.id == 1) {
                if (judgenumber == 1) { }
                else {
                    iAll[this.id - 1].className = "diphotofatherone";
                    emAll[0].style.display = "block";
                    this.className = " ";
                    if (judgenumber == 2) {
                        liAll[2].className = "cat_all_two orangeborder orangebordertwo";
                    }
                    document.getElementById("chanfontone").className = "menuli_oneb_p menuli_oneb_one";
                    if (judgenumber == 2 || judgenumber == 6) {
                        liAll[0].style.background = " rgb(255, 191, 0)";
                    }
                    if (judgenumber == 3) {
                        liAll[0].style.background = "rgb(255, 175, 188) ";
                    }
                    if (judgenumber == 4) {
                        liAll[0].style.background = "rgb(133, 205, 233) ";
                    }
                    if (judgenumber == 5 || judgenumber == 1) {
                        liAll[0].style.background = "rgb(82, 155, 82) ";
                    }
                }
                if (judgenumber == 2) {
                    emAll[0].style.display = "none";
                }
            }


            if (this.id == 2) {
                if (judgenumber == 2) { }
                else {
                    iAll[1].className = "diphotofathertwo";
                    emAll[0].style.display = "block";
                    emAll[1].style.display = "block";
                    this.className = " ";
                    document.getElementById("chanfonttwo").className = "menuli_twob_p menuli_twob_one";
                    if (judgenumber == 2 || judgenumber == 6) {
                        liAll[0].style.background = " rgb(255, 191, 0)";
                    }
                    if (judgenumber == 3) {
                        liAll[0].style.background = "rgb(255, 175, 188) ";
                    }
                    if (judgenumber == 4) {
                        liAll[0].style.background = "rgb(133, 205, 233) ";
                    }
                    if (judgenumber == 5 || judgenumber == 1) {
                        liAll[0].style.background = "rgb(82, 155, 82) ";
                    }
                }
                if (judgenumber == 1) {
                    emAll[0].style.display = "none";
                    liAll[1].className = "cat_all_two greenbordertwo";
                }
                if (judgenumber == 3) {
                    emAll[1].style.display = "none";
                    liAll[3].className = "cat_all_two pinkborder pinkbordertwo";
                }
                document.getElementById("appeartwoone").style.display = "none";
                clearInterval(M);
                M = setInterval(function () {
                    if (parseInt(appearTwo.style.width) == 0) {
                        clearInterval(M);
                    }
                    else {
                        appearTwo.style.width = parseInt(appearTwo.style.width) - 5 + "px";
                    }
                }, 10)
            }


            if (this.id == 3) {
                if (judgenumber == 3) { }
                else {
                    iAll[this.id - 1].className = "diphotofatherthree";
                    emAll[1].style.display = "block";
                    emAll[2].style.display = "block";
                    this.className = " ";
                    document.getElementById("chanfontthree").className = "menuli_threeb_p menuli_threeb_one";
                    if (judgenumber == 2 || judgenumber == 6) {
                        liAll[0].style.background = " rgb(255, 191, 0)";
                    }
                    if (judgenumber == 3) {
                        liAll[0].style.background = "rgb(255, 175, 188) ";
                    }
                    if (judgenumber == 4) {
                        liAll[0].style.background = "rgb(133, 205, 233) ";
                    }
                    if (judgenumber == 5 || judgenumber == 1) {
                        liAll[0].style.background = "rgb(82, 155, 82) ";
                    }
                }
                if (judgenumber == 2) {
                    emAll[1].style.display = "none";
                    liAll[2].className = "cat_all_two orangeborder orangebordertwo";
                }
                if (judgenumber == 4) {
                    emAll[2].style.display = "none";
                    liAll[4].className = "cat_all_two blueborder bluebordertwo";
                }
                document.getElementById("appearthreeone").style.display = "none";
                clearInterval(W);
                W = setInterval(function () {
                    if (parseInt(appearThree.style.width) == 0) {
                        clearInterval(W);
                    }
                    else {
                        appearThree.style.width = parseInt(appearThree.style.width) - 5 + "px";
                    }
                }, 10)

            }

            if (this.id == 4) {
                if (judgenumber == 4) { }
                else {
                    iAll[this.id - 1].className = "diphotofatherfour";
                    emAll[2].style.display = "block";
                    emAll[3].style.display = "block";
                    this.className = " ";
                    document.getElementById("chanfontfour").className = "menuli_fourb_p menuli_fourb_one";
                    if (judgenumber == 2 || judgenumber == 6) {
                        liAll[0].style.background = " rgb(255, 191, 0)";
                    }
                    if (judgenumber == 3) {
                        liAll[0].style.background = "rgb(255, 175, 188) ";
                    }
                    if (judgenumber == 4) {
                        liAll[0].style.background = "rgb(133, 205, 233) ";
                    }
                    if (judgenumber == 5 || judgenumber == 1) {
                        liAll[0].style.background = "rgb(82, 155, 82) ";
                    }
                }
                if (judgenumber == 3) {
                    emAll[2].style.display = "none";
                    liAll[3].className = "cat_all_two pinkborder pinkbordertwo";
                }
                if (judgenumber == 5) {
                    emAll[3].style.display = "none";
                    liAll[5].className = "cat_all_two greenborder greenbordertwo";
                }
                document.getElementById("appearfourone").style.display = "none";
                clearInterval(S);
                S = setInterval(function () {
                    if (parseInt(appearFour.style.width) == 0) {
                        clearInterval(S);
                    }
                    else {
                        appearFour.style.width = parseInt(appearFour.style.width) - 5 + "px";
                    }
                }, 10)
            }


            if (this.id == 5) {
                if (judgenumber == 5) { }
                else {
                    iAll[this.id - 1].className = "diphotofatherfive";
                    emAll[3].style.display = "block";
                    emAll[4].style.display = "block";
                    this.className = " ";
                    document.getElementById("chanfontfive").className = "menuli_fiveb_p menuli_fiveb_one";
                    if (judgenumber == 2 || judgenumber == 6) {
                        liAll[0].style.background = " rgb(255, 191, 0)";
                    }
                    if (judgenumber == 3) {
                        liAll[0].style.background = "rgb(255, 175, 188) ";
                    }
                    if (judgenumber == 4) {
                        liAll[0].style.background = "rgb(133, 205, 233) ";
                    }
                    if (judgenumber == 5 || judgenumber == 1) {
                        liAll[0].style.background = "rgb(82, 155, 82) ";
                    }
                }
                if (judgenumber == 4) {
                    emAll[3].style.display = "none";
                    liAll[4].className = "cat_all_two blueborder bluebordertwo";
                }
                if (judgenumber == 6) {
                    emAll[4].style.display = "none";
                    liAll[6].className = "cat_all_two orangeborder orangebordertwo";
                }
                document.getElementById("appearfiveone").style.display = "none";
                clearInterval(K);
                K = setInterval(function () {
                    if (parseInt(appearFive.style.width) == 0) {
                        clearInterval(K);
                    }
                    else {
                        appearFive.style.width = parseInt(appearFive.style.width) - 5 + "px";
                    }
                }, 10)


            }


            if (this.id == 6) {
                if (judgenumber == 6) { }
                else {
                    iAll[this.id - 1].className = "diphotofathersix";
                    emAll[4].style.display = "block";
                    emAll[5].style.display = "block";
                    this.className = " ";
                    document.getElementById("chanfontsix").className = "menuli_sixb_p menuli_sixb_one";
                    if (judgenumber == 2 || judgenumber == 6) {
                        liAll[0].style.background = " rgb(255, 191, 0)";
                    }
                    if (judgenumber == 3) {
                        liAll[0].style.background = "rgb(255, 175, 188) ";
                    }
                    if (judgenumber == 4) {
                        liAll[0].style.background = "rgb(133, 205, 233) ";
                    }
                    if (judgenumber == 5 || judgenumber == 1) {
                        liAll[0].style.background = "rgb(82, 155, 82) ";
                    }
                }
                if (judgenumber == 5) {
                    emAll[4].style.display = "none";
                    emAll[5].style.display = "none";
                    liAll[5].className = "cat_all_two greenborder greenbordertwo";
                }
            }
        }
    }

    liAll[1].onclick = function () {
        judgenumber = 1;
        iAll[0].className = "diphotofatherone_three";
        emAll[0].style.display = "none";
        this.className = "cat_all_two greenbordertwo";
        document.getElementById("chanfontone").className = "menuli_oneb_p menuli_oneb_two";
        for (var a = 2; a < liAll.length; a++) {
            liAll[a].className = "";
        }
        document.getElementById("main").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("footall").style.display = "none";
        document.getElementById("brandall").style.display = "none";
        document.getElementById("development").style.display = "none";
        document.getElementById("news_activity").style.display = "none";
        document.getElementById("notice").style.display = "none";
        document.getElementById("chanfonttwo").className = "menuli_twob_p menuli_twob_one";
        document.getElementById("chanfontthree").className = "menuli_threeb_p menuli_threeb_one";
        document.getElementById("chanfontfour").className = "menuli_fourb_p menuli_fourb_one";
        document.getElementById("chanfontfive").className = "menuli_fiveb_p menuli_fiveb_one";
        document.getElementById("chanfontsix").className = "menuli_sixb_p menuli_sixb_one";
        emAll[1].style.display = "block";
        emAll[2].style.display = "block";
        emAll[3].style.display = "block";
        emAll[4].style.display = "block";
        iAll[1].className = "diphotofathertwo";
        iAll[2].className = "diphotofatherthree";
        iAll[3].className = "diphotofatherfour";
        iAll[4].className = "diphotofatherfive";
        iAll[5].className = "diphotofathersix";
        liAll[0].style.background = "rgb(82, 155, 82) ";
    }


    liAll[2].onclick = function () {
        judgenumber = 2;
        iAll[1].className = "diphotofathertwo_three";
        emAll[0].style.display = "none";
        emAll[1].style.display = "none";
        this.className = "cat_all_two orangeborder orangebordertwo";
        document.getElementById("chanfonttwo").className = "menuli_twob_p menuli_twob_two";
        for (var a = 1; a < liAll.length; a++) {
            if (a != 2) {
                liAll[a].className = "";
            }
            if ((a != 0) && (a != 1) && (a != 6)) {
                emAll[a].style.display = "block";
            }
        }
        document.getElementById("main").style.display = "none";
        document.getElementById("about").style.display = "block";
        document.getElementById("footall").style.display = "block";
        document.getElementById("brandall").style.display = "none";
        document.getElementById("development").style.display = "none";
        document.getElementById("news_activity").style.display = "none";
        document.getElementById("notice").style.display = "none";
        document.getElementById("chanfontone").className = "menuli_oneb_p menuli_oneb_one";
        document.getElementById("chanfontthree").className = "menuli_threeb_p menuli_threeb_one";
        document.getElementById("chanfontfour").className = "menuli_fourb_p menuli_fourb_one";
        document.getElementById("chanfontfive").className = "menuli_fiveb_p menuli_fiveb_one";
        document.getElementById("chanfontsix").className = "menuli_sixb_p menuli_sixb_one";
        iAll[0].className = "diphotofatherone";
        iAll[2].className = "diphotofatherthree";
        iAll[3].className = "diphotofatherfour";
        iAll[4].className = "diphotofatherfive";
        iAll[5].className = "diphotofathersix";
        liAll[0].style.background = " rgb(255, 191, 0)";
    }



    liAll[3].onclick = function () {
        judgenumber = 3;
        iAll[2].className = "diphotofatherthree_three";
        emAll[1].style.display = "none";
        emAll[2].style.display = "none";
        this.className = "cat_all_two pinkborder pinkbordertwo";
        document.getElementById("chanfontthree").className = "menuli_threeb_p menuli_threeb_two";
        for (var a = 1; a < liAll.length; a++) {
            if (a != 3) {
                liAll[a].className = "";
            }
            if ((a != 2) && (a != 1) && (a != 6)) {
                emAll[a].style.display = "block";
            }
        }
        document.getElementById("main").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("footall").style.display = "block";
        document.getElementById("brandall").style.display = "block";
        document.getElementById("development").style.display = "none";
        document.getElementById("news_activity").style.display = "none";
        document.getElementById("notice").style.display = "none";
        document.getElementById("chanfonttwo").className = "menuli_twob_p menuli_twob_one";
        document.getElementById("chanfontone").className = "menuli_oneb_p menuli_oneb_one";
        document.getElementById("chanfontfour").className = "menuli_fourb_p menuli_fourb_one";
        document.getElementById("chanfontfive").className = "menuli_fiveb_p menuli_fiveb_one";
        document.getElementById("chanfontsix").className = "menuli_sixb_p menuli_sixb_one";
        iAll[1].className = "diphotofathertwo";
        iAll[0].className = "diphotofatherone";
        iAll[3].className = "diphotofatherfour";
        iAll[4].className = "diphotofatherfive";
        iAll[5].className = "diphotofathersix";
        liAll[0].style.background = "rgb(255, 175, 188) ";
    }



    liAll[4].onclick = function () {
        judgenumber = 4;
        iAll[3].className = "diphotofatherfour_three";
        emAll[2].style.display = "none";
        emAll[3].style.display = "none";
        this.className = "cat_all_two blueborder bluebordertwo";
        document.getElementById("chanfontfour").className = "menuli_fourb_p menuli_fourb_two";
        for (var a = 1; a < liAll.length; a++) {
            if (a != 4) {
                liAll[a].className = "";
            }
            if ((a != 2) && (a != 3) && (a != 6)) {
                emAll[a].style.display = "block";
            }
        }
        document.getElementById("main").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("footall").style.display = "block";
        document.getElementById("brandall").style.display = "none";
        document.getElementById("development").style.display = "block";
        document.getElementById("news_activity").style.display = "none";
        document.getElementById("notice").style.display = "none";
        document.getElementById("chanfonttwo").className = "menuli_twob_p menuli_twob_one";
        document.getElementById("chanfontthree").className = "menuli_threeb_p menuli_threeb_one";
        document.getElementById("chanfontone").className = "menuli_oneb_p menuli_oneb_one";
        document.getElementById("chanfontfive").className = "menuli_fiveb_p menuli_fiveb_one";
        document.getElementById("chanfontsix").className = "menuli_sixb_p menuli_sixb_one";
        emAll[0].className = "block";
        iAll[1].className = "diphotofathertwo";
        iAll[0].className = "diphotofatherone";
        iAll[2].className = "diphotofatherthree";
        iAll[4].className = "diphotofatherfive";
        iAll[5].className = "diphotofathersix";
        liAll[0].style.background = "rgb(133, 205, 233) ";
        
    }



    liAll[5].onclick = function () {
        judgenumber = 5;
        iAll[4].className = "diphotofatherfive_three";
        emAll[3].style.display = "none";
        emAll[4].style.display = "none";
        this.className = "cat_all_two greenborder greenbordertwo";
        document.getElementById("chanfontfive").className = "menuli_fiveb_p menuli_fiveb_two";
        for (var a = 1; a < liAll.length; a++) {
            if (a != 5) {
                liAll[a].className = "";
            }
            if ((a != 4) && (a != 3) && (a != 6)) {
                emAll[a].style.display = "block";
            }
        }
        document.getElementById("main").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("footall").style.display = "block";
        document.getElementById("brandall").style.display = "none";
        document.getElementById("development").style.display = "none";
        document.getElementById("news_activity").style.display = "block";
        document.getElementById("notice").style.display = "none";
        document.getElementById("chanfonttwo").className = "menuli_twob_p menuli_twob_one";
        document.getElementById("chanfontthree").className = "menuli_threeb_p menuli_threeb_one";
        document.getElementById("chanfontfour").className = "menuli_fourb_p menuli_fourb_one";
        document.getElementById("chanfontone").className = "menuli_oneb_p menuli_oneb_one";
        document.getElementById("chanfontsix").className = "menuli_sixb_p menuli_sixb_one";
        emAll[0].style.display = "block";
        iAll[1].className = "diphotofathertwo";
        iAll[0].className = "diphotofatherone";
        iAll[2].className = "diphotofatherthree";
        iAll[3].className = "diphotofatherfour";
        iAll[5].className = "diphotofathersix";
        liAll[0].style.background = "rgb(82, 155, 82) ";
        
    }


    liAll[6].onclick = function () {
        judgenumber = 6;
        iAll[5].className = "diphotofathersix_three";
        emAll[4].style.display = "none";
        emAll[5].style.display = "none";
        this.className = "cat_all_two orangeborder orangebordertwo";
        document.getElementById("chanfontsix").className = "menuli_sixb_p menuli_sixb_two";
        for (var a = 1; a < liAll.length; a++) {
            if (a != 6) {
                liAll[a].className = "";
            }
            if ((a != 4) && (a != 5) && (a != 6)) {
                emAll[a].style.display = "block";
            }
        }
        document.getElementById("main").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("footall").style.display = "block";
        document.getElementById("brandall").style.display = "none";
        document.getElementById("development").style.display = "none";
        document.getElementById("news_activity").style.display = "none";
        document.getElementById("notice").style.display = "block";
        document.getElementById("chanfonttwo").className = "menuli_twob_p menuli_twob_one";
        document.getElementById("chanfontthree").className = "menuli_threeb_p menuli_threeb_one";
        document.getElementById("chanfontfour").className = "menuli_fourb_p menuli_fourb_one";
        document.getElementById("chanfontfive").className = "menuli_fiveb_p menuli_fiveb_one";
        document.getElementById("chanfontone").className = "menuli_oneb_p menuli_oneb_one";
        emAll[0].style.display = "block";
        iAll[1].className = "diphotofathertwo";
        iAll[0].className = "diphotofatherone";
        iAll[2].className = "diphotofatherthree";
        iAll[4].className = "diphotofatherfive";
        iAll[3].className = "diphotofatherfour";
        liAll[0].style.background = "rgb(255, 191, 0) ";
        
    }

    var aboutChildOne = document.getElementById("about_child_one");
    var aboutChildTwo = document.getElementById("about_child_two");
    var aboutChildThree = document.getElementById("about_child_three");
    var aboutChildFour = document.getElementById("about_child_four");
    var chanWidthoneA = document.getElementById("chanwidthonea");
    var chanWidthtwoB = document.getElementById("chanwidthtwob");
    var chanWidthoneC = document.getElementById("chanwidthonec");
    var chanWidthtwoD = document.getElementById("chanwidthtwod");
    var chanWidthoneE = document.getElementById("chanwidthonee");
    var chanWidthtwoF = document.getElementById("chanwidthtwof");
    var chanWidthoneG = document.getElementById("chanwidthoneg");
    var chanWidthtwoH = document.getElementById("chanwidthtwoh");
    var aboutChild = document.getElementById("about_child");
    var chanbackgroundOne = document.getElementById("chanbackgroundone_two");
    var chanbackgroundTwo = document.getElementById("chanbackgroundtwo_two");
    var chanbackgroundThree = document.getElementById("chanbackgroundthree_two");
    var chanbackgroundFour = document.getElementById("chanbackgroundfour_two");
    var chanGrey = document.getElementById("changrey");
    var A = null, B = null, C = null, D = null;
    var enter = 1;
    var enterTwo = "A";


    //下面移入移出都是调用的函数——-expend-Width()  changebackgroundColor();

    chanWidthtwoB.onmouseenter = function () {
        enterTwo = "A";
        enter = 1;
        changebackgroundColor (chanbackgroundOne , 1);
        expend_Width(enter, chanWidthoneA, chanWidthtwoB, aboutChildOne);
        chanGrey.style.display = "block";
    }
    chanWidthtwoB.onmouseleave = function () {
        entertwo = "A";
        enter = 2;
        changebackgroundColor (chanbackgroundOne , 0);
        expend_Width(enter, chanWidthoneA, chanWidthtwoB, aboutChildOne);
        chanGrey.style.display = "none";
    }


    chanWidthtwoD.onmouseenter = function () {
        enterTwo = "C";
        enter = 1;
        changebackgroundColor (chanbackgroundTwo , 1);
        expend_Width(enter, chanWidthoneC, chanWidthtwoD, aboutChildTwo);
        chanGrey.style.display = "block";
    }
    chanWidthtwoD.onmouseleave = function () {
        enterTwo = "C";
        enter = 2;
        changebackgroundColor (chanbackgroundTwo , 0);
        expend_Width(enter, chanWidthoneC, chanWidthtwoD, aboutChildTwo);
        chanGrey.style.display = "none";
    }


    chanWidthtwoF.onmouseenter = function () {
        enterTwo = "E";
        enter = 1;
        changebackgroundColor (chanbackgroundThree , 1);
        expend_Width(enter, chanWidthoneE, chanWidthtwoF, aboutChildThree);
        chanGrey.style.display = "block";
    }
    chanWidthtwoF.onmouseleave = function () {
        enterTwo = "E";
        enter = 2;
        changebackgroundColor (chanbackgroundThree , 0);
        expend_Width(enter, chanWidthoneE, chanWidthtwoF, aboutChildThree);
        chanGrey.style.display = "none";
    }


    chanWidthtwoH.onmouseenter = function () {
        enterTwo = "G";
        enter = 1;
        changebackgroundColor (chanbackgroundFour , 1);
        expend_Width(enter, chanWidthoneG, chanWidthtwoH, aboutChildFour);
        chanGrey.style.display = "block";
    }
    chanWidthtwoH.onmouseleave = function () {
        enterTwo = "G";
        enter = 2;
        changebackgroundColor (chanbackgroundFour , 0);
        expend_Width(enter, chanWidthoneG, chanWidthtwoH, aboutChildFour);
        chanGrey.style.display = "none";
    }

    function changebackgroundColor (e , number) {
        clearInterval(e.timer);
        var changeSpeed = ( number==1 ) ? 10 : -10 ;
       
        e.timer = setInterval ( function () {
            if(e.style.opacity == number) {
                clearInterval(e.timer);
                
            }
            else{ 
                var init =  100*e.style.opacity ;
                e.style.opacity =( init + changeSpeed )/100;
               
            }
        },50)
    }

    function expend_Width(enter, x, y, z) {
        if (enterTwo == "A") {
            clearInterval(A);
            A = setInterval(function () {
                var ispeed = 1;
                if (enter == 1) {
                    if (parseInt(z.style.width) == 30) {
                        clearInterval(A);
                    }
                    else {
                        x.style.height = parseInt(x.style.height) + ispeed + "%";
                        y.style.height = parseInt(y.style.height) + ispeed + "%";
                        z.style.width = parseInt(z.style.width) + ispeed + "%";
                    }
                }
                if (enter == 2) {
                    if (parseInt(z.style.width) == 25) {
                        clearInterval(A);
                    }
                    else {
                        x.style.height = parseInt(x.style.height) - ispeed + "%";
                        y.style.height = parseInt(y.style.height) - ispeed + "%";
                        z.style.width = parseInt(z.style.width) - ispeed + "%";
                    }
                }

            }, 25)
        }
        if (enterTwo == "C") {
            clearInterval(B);
            B = setInterval(function () {
                var ispeed = 1;
                if (enter == 1) {
                    if (parseInt(z.style.width) == 30) {
                        clearInterval(B);
                    }
                    else {
                        x.style.height = parseInt(x.style.height) + ispeed + "%";
                        y.style.height = parseInt(y.style.height) + ispeed + "%";
                        z.style.width = parseInt(z.style.width) + ispeed + "%";
                    }
                }
                if (enter == 2) {
                    if (parseInt(z.style.width) == 25) {
                        clearInterval(B);
                    }
                    else {
                        x.style.height = parseInt(x.style.height) - ispeed + "%";
                        y.style.height = parseInt(y.style.height) - ispeed + "%";
                        z.style.width = parseInt(z.style.width) - ispeed + "%";
                    }
                }

            }, 25)
        }
        if (enterTwo == "E") {
            clearInterval(C);
            C = setInterval(function () {
                var ispeed = 1;
                if (enter == 1) {
                    if (parseInt(z.style.width) == 30) {
                        clearInterval(C);
                    }
                    else {
                        x.style.height = parseInt(x.style.height) + ispeed + "%";
                        y.style.height = parseInt(y.style.height) + ispeed + "%";
                        z.style.width = parseInt(z.style.width) + ispeed + "%";
                    }
                }
                if (enter == 2) {
                    if (parseInt(z.style.width) == 25) {
                        clearInterval(C);
                    }
                    else {
                        x.style.height = parseInt(x.style.height) - ispeed + "%";
                        y.style.height = parseInt(y.style.height) - ispeed + "%";
                        z.style.width = parseInt(z.style.width) - ispeed + "%";
                    }
                }

            }, 25)
        }
        if (enterTwo == "G") {
            clearInterval(D);
            D = setInterval(function () {
                var ispeed = 1;
                if (enter == 1) {
                    if (parseInt(z.style.width) == 30) {
                        clearInterval(D);
                    }
                    else {
                        x.style.height = parseInt(x.style.height) + ispeed + "%";
                        y.style.height = parseInt(y.style.height) + ispeed + "%";
                        z.style.width = parseInt(z.style.width) + ispeed + "%";
                    }
                }
                if (enter == 2) {
                    if (parseInt(z.style.width) == 25) {
                        clearInterval(D);
                    }
                    else {
                        x.style.height = parseInt(x.style.height) - ispeed + "%";
                        y.style.height = parseInt(y.style.height) - ispeed + "%";
                        z.style.width = parseInt(z.style.width) - ispeed + "%";
                    }
                }

            }, 25)
        }

    }

    var twitterTwo = document.getElementById("twittertwo");
    var wechatTwo = document.getElementById("wechattwo");
    var changecolorOneB = document.getElementById("changecolor_oneB");
    var changecolorTWoB = document.getElementById("changecolor_twoB");
    var changecolorThreeB = document.getElementById("changecolor_threeB");
    var changecolorFourB = document.getElementById("changecolor_fourB");
    function mousein(x) {
        x.style.color = "white";
    }
    function mouseout(x) {
        x.style.color = "#9b8e8e";
    }
    twitterTwo.onmouseover = function () {
        changecolorOneB.className = "twitter_child_one";
        mousein(changecolorTWoB);
    }
    twitterTwo.onmouseout = function () {
        changecolorOneB.className = "twitter_child";
        mouseout(changecolorTWoB);
    }
    wechatTwo.onmouseover = function () {
        changecolorThreeB.className = "wechat_child_one";
        document.getElementById("deltatwo").style.display = "block";
        document.getElementById("two_codetwo").style.display = "block";
        mousein(changecolorFourB);
    }
    wechatTwo.onmouseout = function () {
        changecolorThreeB.className = "wechat_child";
        document.getElementById("deltatwo").style.display = "none";
        document.getElementById("two_codetwo").style.display = "none";
        mouseout(changecolorFourB);
    }

    var allAT = document.getElementById("grey_child_two").getElementsByTagName("a");
    //alert(allA.length);
    for (var i = 0; i < allAT.length; i++) {
        allAT[i].onmouseover = function () {
            this.style.color = "white";
        }
        allAT[i].onmouseout = function () {
            this.style.color = "#9b8e8e";
        }
    }

    var chanwheatOne = document.getElementById("chanwheatone");
    var chanwheatTwo = document.getElementById("chanwheattwo");
    var chanwheatThree = document.getElementById("chanwheatthree");
    var chanwheatFour = document.getElementById("chanwheatfour");
    var chanwheatFive = document.getElementById("chanwheatfive");
    var chanwheatSix = document.getElementById("chanwheatsix");
    var chanwheatSeven = document.getElementById("chanwheatseven");
    var chanwheatEight = document.getElementById("chanwheateight");
    var chanwheatNine = document.getElementById("chanwheatnine");
    var chanwheatTen = document.getElementById("chanwheatten");
    var chanwheatEleven = document.getElementById("chanwheateleven");
    var chanwheatTwelve = document.getElementById("chanwheattwelve");

    //渐变色函数_1
    function chanopacity(obj, V) {
        clearInterval(obj.timer);
        var ispeed = obj.style.opacity > V ? -5 : 5;
        obj.timer = setInterval(function () {
            var nowopacity = 100 * (obj.style.opacity);
            if (obj.style.opacity == V) {
                clearInterval(obj.timer);
            }
            else {
                obj.style.opacity = (nowopacity + ispeed) / 100;
            }

        }, 30)
    }
    chanwheatOne.onmouseover = function () {
        chanopacity(chanwheatOne, 0.5);
    }
    chanwheatTwo.onmouseover = function () {
        chanopacity(chanwheatTwo, 0.5);
    }
    chanwheatThree.onmouseover = function () {
        chanopacity(chanwheatThree, 0.5);
    }
    chanwheatFour.onmouseover = function () {
        chanopacity(chanwheatFour, 0.5);
    }
    chanwheatFive.onmouseover = function () {
        chanopacity(chanwheatFive, 0.5);
    }
    chanwheatSix.onmouseover = function () {
        chanopacity(chanwheatSix, 0.5);
    }
    chanwheatSeven.onmouseover = function () {
        chanopacity(chanwheatSeven, 0.5);
    }
    chanwheatEight.onmouseover = function () {
        chanopacity(chanwheatEight, 0.5);
    }
    chanwheatNine.onmouseover = function () {
        chanopacity(chanwheatNine, 0.5);
    }
    chanwheatTen.onmouseover = function () {
        chanopacity(chanwheatTen, 0.5);
    }
    chanwheatEleven.onmouseover = function () {
        chanopacity(chanwheatEleven, 0.5);
    }
    chanwheatTwelve.onmouseover = function () {
        chanopacity(chanwheatTwelve, 0.5);
    }



    chanwheatOne.onmouseout = function () {
        chanopacity(chanwheatOne, 0);
    }
    chanwheatTwo.onmouseout = function () {
        chanopacity(chanwheatTwo, 0);
    }
    chanwheatThree.onmouseout = function () {
        chanopacity(chanwheatThree, 0);
    }
    chanwheatFour.onmouseout = function () {
        chanopacity(chanwheatFour, 0);
    }
    chanwheatFive.onmouseout = function () {
        chanopacity(chanwheatFive, 0);
    }
    chanwheatSix.onmouseout = function () {
        chanopacity(chanwheatSix, 0);
    }
    chanwheatSeven.onmouseout = function () {
        chanopacity(chanwheatSeven, 0);
    }
    chanwheatEight.onmouseout = function () {
        chanopacity(chanwheatEight, 0);
    }
    chanwheatNine.onmouseout = function () {
        chanopacity(chanwheatNine, 0);
    }
    chanwheatTen.onmouseout = function () {
        chanopacity(chanwheatTen, 0);
    }
    chanwheatEleven.onmouseout = function () {
        chanopacity(chanwheatEleven, 0);
    }
    chanwheatTwelve.onmouseout = function () {
        chanopacity(chanwheatTwelve, 0);
    }


    var photoRightImg = document.getElementById("chanbig_one")
    var photoRight = document.getElementById("photoright");
    var waterDropOne = document.getElementById("waterdrop_1");
    //var chanBackOne = document.getElementById("chan_back_1");
    var photoLeftImg = document.getElementById("chanbig_two");
    var photoLeft = document.getElementById("photoleft");
    var waterDropTwo = document.getElementById("waterdrop_2");
    //var chanBackTwo = document.getElementById("chan_back_1");
    var chanBackA = document.getElementById("chan_back_A");
    var chanBackB = document.getElementById("chan_back_B");
    var mo = null, han = null; 
    //渐变色函数_2
    function chanopacityTwo(obj, V) {
        clearInterval(obj.timer);
        var ispeed = obj.style.opacity > V ? -10 : 10;
        obj.timer = setInterval(function () {
            var nowopacity = 100 * (obj.style.opacity);
            if (obj.style.opacity == V) {
                clearInterval(obj.timer);
            }
            else {
                obj.style.opacity = (nowopacity + ispeed) / 100;
            }

        }, 25)
    }
    waterDropOne.onmouseenter = function () {
        chanopacityTwo(chanBackA,1);
    }
    waterDropOne.onmouseleave = function () {
        chanopacityTwo(chanBackA,0);
    }

    waterDropTwo.onmouseenter = function () {
        chanopacityTwo(chanBackB,1);
    }
    waterDropTwo.onmouseleave = function () {
        chanopacityTwo(chanBackB,0);
    }


   //
    photoRight.onmouseenter = function () {
        clearInterval(mo);
        var ispeed = 1;
        mo = setInterval(function () {
                if (parseInt(photoRightImg.style.width) == 110) {
                    clearInterval(mo);
                    ispeed = 0;
                }
                else {
                    waterDropOne.style.height = waterDropOne.offsetHeight - 6 + "px";
                    photoRightImg.style.width = parseInt(photoRightImg.style.width) + (2 * ispeed) + "%";
                    photoRightImg.style.height = parseInt(photoRightImg.style.height) + (2 * ispeed) + "vh";
                    photoRightImg.style.left = parseInt(photoRightImg.style.left) - ispeed + "%";
                    photoRightImg.style.top = parseInt(photoRightImg.style.top) - ispeed + "%";
                }
        }, 60)
    }
    photoRight.onmouseleave = function () {
        clearInterval(mo);
        var ispeed = -1;
        mo = setInterval(function () {
                if (parseInt(photoRightImg.style.width) == 100) {
                    clearInterval(mo);
                    ispeed = 0;
                }
                else {
                    waterDropOne.style.height = waterDropOne.offsetHeight + 6 + "px";
                    photoRightImg.style.width = parseInt(photoRightImg.style.width) + (2 * ispeed) + "%";
                    photoRightImg.style.height = parseInt(photoRightImg.style.height) + (2 * ispeed) + "vh";
                    photoRightImg.style.left = parseInt(photoRightImg.style.left) - ispeed + "%";
                    photoRightImg.style.top = parseInt(photoRightImg.style.top) - ispeed + "%";
                }
        }, 60)
    }
    photoLeft.onmouseenter = function () {
        clearInterval(han);
        var ispeedTwo = 1;
        han = setInterval(function () {
                if (parseInt(photoLeftImg.style.width) == 110) {
                    clearInterval(han);
                    ispeedTwo = 0;
                }
                else {
                    waterDropTwo.style.height = waterDropTwo.offsetHeight - 6 + "px";
                    photoLeftImg.style.width = parseInt(photoLeftImg.style.width) + (2 * ispeedTwo) + "%";
                    photoLeftImg.style.height = parseInt(photoLeftImg.style.height) + (2 * ispeedTwo) + "vh";
                    photoLeftImg.style.left = parseInt(photoLeftImg.style.left) - ispeedTwo + "%";
                    photoLeftImg.style.top = parseInt(photoLeftImg.style.top) - ispeedTwo + "%";
                }
        }, 60)
    }
    photoLeft.onmouseleave = function () {
        clearInterval(han);
        var ispeedTwo = -1;
        han = setInterval(function () {
                if (parseInt(photoLeftImg.style.width) == 100) {
                    clearInterval(han);
                    ispeedTwo = 0;
                }
                else {
                    waterDropTwo.style.height = waterDropTwo.offsetHeight + 6 + "px";
                    photoLeftImg.style.width = parseInt(photoLeftImg.style.width) + (2 * ispeedTwo) + "%";
                    photoLeftImg.style.height = parseInt(photoLeftImg.style.height) + (2 * ispeedTwo) + "vh";
                    photoLeftImg.style.left = parseInt(photoLeftImg.style.left) - ispeedTwo + "%";
                    photoLeftImg.style.top = parseInt(photoLeftImg.style.top) - ispeedTwo + "%";
                }
        }, 60)


    }
    var developmentOne = document.getElementById("development_one");
    var developmentTwo = document.getElementById("development_two");
    var developmentThree = document.getElementById("development_three");
    var developmentFour = document.getElementById("development_four");
    var developmentOneTimer = null;
    var developmentTwoTimer = null;
    var developmentThreeTimer = null;
    var developmentFourTimer = null;

    developmentOne.onmouseenter = function () {
    clearInterval(developmentOneTimer);
    developmentOneTimer = setInterval(function () {

        if ( parseInt(developmentOne.style.width) == 37 ) {
            clearInterval(developmentOneTimer);
        }
        else {
            developmentOne.style.width = parseInt(developmentOne.style.width) + 2 + "%" ;
        }
    },30)
    }
    developmentOne.onmouseleave = function () {
        clearInterval(developmentOneTimer);
        developmentOneTimer = setInterval(function () {
    
            if ( parseInt(developmentOne.style.width) == 25 ) {
                clearInterval(developmentOneTimer);
            }
            else {
                developmentOne.style.width = parseInt(developmentOne.style.width) - 2 + "%" ;
            }
        },30)
        }
    


        developmentTwo.onmouseenter = function () {
            clearInterval(developmentTwoTimer);
            developmentTwoTimer = setInterval(function () {
        
                if ( parseInt(developmentTwo.style.width) == 37 ) {
                    clearInterval(developmentTwoTimer);
                }
                else {
                    developmentTwo.style.width = parseInt(developmentTwo.style.width) + 2 + "%" ;
                }
            },30)
            }
            developmentTwo.onmouseleave = function () {
                clearInterval(developmentTwoTimer);
                developmentTwoTimer = setInterval(function () {
            
                    if ( parseInt(developmentTwo.style.width) == 25 ) {
                        clearInterval(developmentTwoTimer);
                    }
                    else {
                        developmentTwo.style.width = parseInt(developmentTwo.style.width) - 2 + "%" ;
                    }
                },30)
                }
   
            developmentThree.onmouseenter = function () {
                clearInterval(developmentThreeTimer);
                developmentThreeTimer = setInterval(function () {
            
                    if ( parseInt(developmentThree.style.width) ==  37 ) {
                        clearInterval(developmentThreeTimer);
                    }
                    else {
                        developmentThree.style.width = parseInt(developmentThree.style.width) + 2 + "%" ;
                    }
                },30)
                }
                developmentThree.onmouseleave = function () {
                    clearInterval(developmentThreeTimer);
                    developmentThreeTimer = setInterval(function () {
                
                        if ( parseInt(developmentThree.style.width) == 25 ) {
                            clearInterval(developmentThreeTimer);
                        }
                        else {
                            developmentThree.style.width = parseInt(developmentThree.style.width) - 2 + "%" ;
                        }
                    },30)
                    }


            developmentFour.onmouseenter = function () {
                clearInterval(developmentFourTimer);
                developmentFourTimer = setInterval(function () {
            
                    if ( parseInt(developmentFour.style.width) == 37 ) {
                        clearInterval(developmentFourTimer);
                    }
                    else {
                        developmentFour.style.width = parseInt(developmentFour.style.width) + 2 + "%" ;
                    }
                },30)
                }
                developmentFour.onmouseleave = function () {
                    clearInterval(developmentFourTimer);
                    developmentFourTimer = setInterval(function () {
                
                        if ( parseInt(developmentFour.style.width) == 25 ) {
                            clearInterval(developmentFourTimer);
                        }
                        else {
                            developmentFour.style.width = parseInt(developmentFour.style.width) -2 + "%" ;
                        }
                    },30)
                    }



    var newsOneA = document.getElementById("news_one_a");
    var newsOneB = document.getElementById("news_one_b");
    var newsTwoA = document.getElementById("news_two_a");
    var newsTwoB = document.getElementById("news_two_b");
    var pinkWater = document.getElementById("pinkwater");
    var blueWater = document.getElementById("bluewater");
    var pinkPTwo = document.getElementById("pink_p_two");
    var bluePTwo = document.getElementById("blue_p_two");
    var newsOneBTimer = null; 
    var pinkWaterTimer = null;
    var newsTwoBTimer = null;
    var blueWaterTimer = null;
    var pinkPTwoTimer = null;
    var bluePTwoTimer = null;

        newsOneB.onmouseenter = function () {
            clearInterval(newsOneBTimer);
            clearInterval(pinkWaterTimer);
            newsOneBTimer = setInterval (function () {
                if ( parseInt(newsOneA.style.width) >= 108) {
                    clearInterval(newsOneBTimer);
                }
                else {
                    newsOneA.style.width = parseInt(newsOneA.style.width) + 2 + "%";
                    newsOneA.style.height = parseInt(newsOneA.style.height) + 2 + "%";
                    newsOneA.style.top = parseInt(newsOneA.style.top) - 1 + "%";
                    newsOneA.style.left = parseInt(newsOneA.style.left) - 1 + "%";
                }
            },45)
            pinkWaterTimer = setInterval (function () {
                if ( parseInt(pinkWater.style.height) <= 275 ) {
                    clearInterval(pinkWaterTimer);
                }
                else {
                    pinkWater.style.height = parseInt(pinkWater.style.height) - 25 + "px";
                    pinkWater.style.bottom = parseInt(pinkWater.style.bottom) - 2 + "%";
                     
                }
            },30)
        }
        newsOneB.onmouseleave = function () {
            clearInterval(newsOneBTimer);
            clearInterval(pinkWaterTimer);
            newsOneBTimer = setInterval (function () {
                if ( parseInt(newsOneA.style.width) <= 100) {
                    clearInterval(newsOneBTimer);
                }
                else {
                    newsOneA.style.width = parseInt(newsOneA.style.width) - 2 + "%";
                    newsOneA.style.height = parseInt(newsOneA.style.height) - 2 + "%";
                    newsOneA.style.top = parseInt(newsOneA.style.top) + 1 + "%";
                    newsOneA.style.left = parseInt(newsOneA.style.left) + 1 + "%";
                }
            },45)
            pinkWaterTimer = setInterval (function () {
                if ( parseInt(pinkWater.style.height) >= 500 ) {
                    clearInterval(pinkWaterTimer);
                }
                else {
                    pinkWater.style.height = parseInt(pinkWater.style.height) + 25 + "px";
                    pinkWater.style.bottom = parseInt(pinkWater.style.bottom) + 2 + "%";
                     
                }
            },30)
        }


        newsTwoB.onmouseenter = function () {
            clearInterval(newsTwoBTimer);
            clearInterval(blueWaterTimer);
            newsTwoBTimer = setInterval (function () {
                if ( parseInt(newsTwoA.style.width) >= 108) {
                    clearInterval(newsTwoBTimer);
                }
                else {
                    newsTwoA.style.width = parseInt(newsTwoA.style.width) + 2 + "%";
                    newsTwoA.style.height = parseInt(newsTwoA.style.height) + 2 + "%";
                    newsTwoA.style.top = parseInt(newsTwoA.style.top) - 1 + "%";
                    newsTwoA.style.left = parseInt(newsTwoA.style.left) - 1 + "%";
                }
            },45)
            blueWaterTimer = setInterval (function () {
                if ( parseInt(blueWater.style.height) <= 275 ) {
                    clearInterval(blueWaterTimer);
                }
                else {
                    blueWater.style.height = parseInt(blueWater.style.height) - 25 + "px";
                    blueWater.style.bottom = parseInt(blueWater.style.bottom) - 2 + "%";
                     
                }
            },30)
        }
        


        newsTwoB.onmouseleave = function () {
            clearInterval(newsTwoBTimer);
            clearInterval(blueWaterTimer);

            newsTwoBTimer = setInterval (function () {
                if ( parseInt(newsTwoA.style.width) <= 100) {
                    clearInterval(newsTwoBTimer);
                }
                else {
                    newsTwoA.style.width = parseInt(newsTwoA.style.width) - 2 + "%";
                    newsTwoA.style.height = parseInt(newsTwoA.style.height) - 2 + "%";
                    newsTwoA.style.top = parseInt(newsTwoA.style.top) + 1 + "%";
                    newsTwoA.style.left = parseInt(newsTwoA.style.left) + 1 + "%";
                }
            },45)
             
            blueWaterTimer = setInterval (function () {
                if ( parseInt(blueWater.style.height) >= 500 ) {
                    clearInterval(blueWaterTimer);
                }
                else {
                    blueWater.style.height = parseInt(blueWater.style.height) + 25 + "px";
                    blueWater.style.bottom = parseInt(blueWater.style.bottom) + 2 + "%";
                     
                }
            },30)
        }

        pinkWater.onmouseenter = function () {
            clearInterval(pinkPTwoTimer);
            pinkPTwoTimer = setInterval (function () {
                if (pinkPTwo.style.opacity == 1) {
                    clearInterval(pinkPTwoTimer);
                }
                else {
                    var pinkPTwoOpacity = 100*pinkPTwo.style.opacity;
                    pinkPTwo.style.opacity = (pinkPTwoOpacity + 20)/100 ;
                }
            },30)
        }
        pinkWater.onmouseleave = function () {
            clearInterval(pinkPTwoTimer);
            pinkPTwoTimer = setInterval(function () {
                if (pinkPTwo.style.opacity == 0) {
                    clearInterval(pinkPTwoTimer);
                }
                else {
                    var pinkPTwoOpacity = 100*pinkPTwo.style.opacity;
                    pinkPTwo.style.opacity = (pinkPTwoOpacity - 20)/100 ;
                }
            },30)
        }

        blueWater.onmouseenter = function () {
            clearInterval(bluePTwoTimer);
            bluePTwoTimer = setInterval (function () {
                if (bluePTwo.style.opacity == 1) {
                    clearInterval(bluePTwoTimer);
                }
                else {
                    var bluePTwoOpacity = 100*bluePTwo.style.opacity;
                    bluePTwo.style.opacity = (bluePTwoOpacity + 20)/100 ;
                }
            },30)
        }
        blueWater.onmouseleave = function () {
            clearInterval(bluePTwoTimer);
            bluePTwoTimer = setInterval(function () {
                if (bluePTwo.style.opacity == 0) {
                    clearInterval(bluePTwoTimer);
                }
                else {
                    var bluePTwoOpacity = 100*bluePTwo.style.opacity;
                    bluePTwo.style.opacity = (bluePTwoOpacity - 20)/100 ;
                }
            },30)
        }

        var noticeTwoA = document.getElementById("notice_two_a").getElementsByTagName("span");
        for (var i = 0 ; i < 10 ; i++) {
            noticeTwoA[i].id = i;
            noticeTwoA[i].onmouseenter = function () {
                this.className = "same_span hover_span" ;
            }
            noticeTwoA[i].onmouseleave = function () {
                this.className = "same-sapn";
            }
        }

}
