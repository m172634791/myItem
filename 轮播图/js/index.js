window.onload = function() {
    var banner = $('#banner');
    var item = $('#item');
    var aItemList = item.getElementsByTagName('div');
    var aLi = banner.getElementsByTagName('li');
    var allWidth = aLi[0].offsetWidth*aLi.length;
    var oPrev = $('#prevbg');
    var oNext = $('#nextbg');
    var flag = -1;
    var oDireLeft = $('#dire_left');
    var oDireRight = $('#dire_right');
    banner.style.width = allWidth + 'px';

    var iNow = 0;
    var iTimer = setInterval(function() {
        if(flag == 1) {
            iNow--;
        } else {
            iNow++;
        }

        if(iNow<0) {
            iNow = aLi.length-1;
        }
        if(iNow == aLi.length) {
            iNow = 0;
        }

        for(var t = 0, tlen = aItemList.length; t < tlen; t++) {
            removeClass(aItemList[t], 'active');
        }
        addClass(aItemList[iNow], 'active');

        starMove(banner, 'left', -iNow*aLi[0].offsetWidth);

    }, 3000);

    for(var i = 0, len = aItemList.length; i < len; i++) {
        aItemList[i].index = i;
        $.on(aItemList[i], 'click', function() {
            iNow = this.index;

            bannerRoll();
        });
    }

    addEvent(oPrev, 'mouseover', function() {
        starMove(this, 'opacity', 100);
    });
    addEvent(oPrev, 'mouseout', function() {
        starMove(this, 'opacity', 50);
    });
    addEvent(oPrev, 'click', function() {
        iNow--;
        bannerRoll();
    });

    addEvent(oNext, 'mouseover', function() {
        starMove(this, 'opacity', 100);
    });
    addEvent(oNext, 'mouseout', function() {
        starMove(this, 'opacity', 50);
    });
    addEvent(oNext, 'click', function() {
        iNow++;
        bannerRoll();
    });
    addEvent(oDireLeft, 'click', function() {
        flag = 1;
    });

    addEvent(oDireRight, 'click', function() {
        flag = -1;
    });


    function bannerRoll() {
        clearInterval(iTimer);
        if(iNow<0) {
            iNow = aLi.length-1;
        }
        if(iNow == aLi.length) {
            iNow = 0;
        }

        for(var t = 0, tlen = aItemList.length; t < tlen; t++) {
            removeClass(aItemList[t], 'active');
        }
        addClass(aItemList[iNow], 'active');
        starMove(banner, 'left', -iNow*aLi[0].offsetWidth);

        iTimer = setInterval(function() {
            if(flag == 1) {
                iNow--;
            } else {
                iNow++;
            }
            if(iNow<0) {
                iNow = aLi.length-1;
            }
            if(iNow == aLi.length) {
                iNow = 0;
            }
            for(var t = 0, tlen = aItemList.length; t < tlen; t++) {
                removeClass(aItemList[t], 'active');
            }
            addClass(aItemList[iNow], 'active');
            starMove(banner, 'left', -iNow*aLi[0].offsetWidth);

        }, 3000);
    }




};



function starMove(element, attr, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var iCur = 0;
        if(attr == 'opacity') {
            iCur = parseInt(parseFloat(getStyle(element, attr))*100);
            //alert(getStyle(element, attr));
        } else {
            iCur = parseInt(getStyle(element, attr));
        }
        var speed = (target - iCur) / 4;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if(attr == 'opacity') {

            element.style[attr] = (iCur + speed)/100;
            element.style.filter = 'alpha(opacity:' + (iCur + speed) + ')';
        } else {
            element.style[attr] = iCur + speed + 'px';
        }

        if (iCur == target) {
            clearInterval(element.timer);
        }

    }, 30);
}

function getStyle(obj, attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

