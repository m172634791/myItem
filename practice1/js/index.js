window.onload = function() {

    play();








    function play() {
        var timer = null;
        var oUl = document.getElementById('banner_list');
        var aLi = oUl.getElementsByTagName('li');
        alert(aLi.length);
        var banner = document.getElementById('banner');

        var current = 1;

        var ul = document.createElement('ul');
        ul.className = 'banner-index';
        ul.id = 'banner_index';
        banner.appendChild(ul);
        for(var i = 0; i < aLi.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
        }
        var bannerIndex = document.getElementById('banner_index');
        var aIndexList = bannerIndex.getElementsByTagName('li');
        aIndexList[0].className = 'active';

        var activDiv = document.createElement('div');
        activDiv.className = 'active-div';
        banner.appendChild(activDiv);

        for(var i = 0; i < aIndexList.length; i++) {
            aIndexList[i].index = i;
            aIndexList[i].onclick = function() {
                clearInterval(timer);
                current = this.index;
                aLi[current].className = 'active';
                activDiv.innerHTML = aLi[current].innerHTML;
                this.className = 'active';
                for(var j = 0; j < aLi.length; j++) {
                    if(current != j) {
                        aLi[j].className = '';
                        aIndexList[j].className = '';
                    }
                }
                current++;
                playBegin();
            }
            aLi[i].onmouseover = function() {
                clearInterval(timer);
            };
            aLi[i].onmouseout = function() {
                playBegin();
            }
        }

        playBegin();


        function playBegin() {
            timer = setInterval(function() {
                aLi[current].className = 'active';
                aIndexList[current].className = 'active';
                activDiv.innerHTML = aLi[current].innerHTML;
                for(var i = 0; i < aLi.length; i++) {
                    if( i != current) {
                        aLi[i].className = '';
                        aIndexList[i].className = '';
                    }
                }
                current = current + 1;
                if(current > aLi.length-1) {
                    current = 0;
                }
            }, 3000);
        }
    }


};

