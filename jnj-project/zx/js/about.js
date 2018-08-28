//轮播
(function(){
    let img = $(".u1");
    let lt = $(".left");
    let rt = $(".right");
    let length = $(".u1 li").length;
    let LIWIDTH = 905,
        moved = 0,
        timer = null;
    function move() {
        moved++;
        img.animate({
            left: -moved * LIWIDTH
        }, 500, function() {
            if (moved == length - 1) {
                moved = 0;
                img.css("left", 0);
            }
        })
    }

    function automove() {
        timer = setInterval(function() {
            move();
        }, 3500);
    }
    automove();

    $(".d1").mouseenter(function() {
        clearInterval(timer);
        timer = null;
    }).mouseleave(function() {
        automove();
    })

    rt.click(function(e) {
        e.preventDefault();
        if (!img.is(":animated")) {
            move();
        }
    })
    lt.click(function(e) {
        e.preventDefault();
        if (!img.is(":animated")) {
            if (moved == 0) {
                moved = length - 1;
                img.css("left", -LIWIDTH * moved);
            }
            moved--;
            img.animate({
                left: -moved * LIWIDTH
            }, 500)
        }
    })
})();
//轮播动画
function lbdh(){
    var d1=document.getElementsByClassName("d1")[0];
    setTimeout(function(){
     $(d1).addClass('ani_load');
    },300)
}
//楼层滚动
(function() {
    let list = $(".list");
    let zx5 = $(".zx5");
    let floors = $("[data-bt]");
    $(window).scroll(function() {
        let scrolltop = $(window).scrollTop();
        if (zx5.offset().top < scrolltop + innerHeight / 2) {
            list.parent().css("left",5);
        } else {
            list.parent().css("left",-40);
        }
        floors.each(function(i, f) {
            var f = $(f);
            if (f.offset().top < scrolltop + innerHeight / 2) {
                list.children(":eq(" + i + ")")
                    .addClass("hov")
                    .siblings()
                    .removeClass("hov");

            }
        })
    })
    list.on("click", "li", function() {
        let li = $(this);
        let i = li.index();
        let fi = $(floors[i]);
        let offsettop = fi.offset().top;
        $("html,body").stop(true).animate({
            scrollTop: offsettop - 20
        }, 500)
    })
    $("li.top").click(function() {
        $("html,body").stop(true).animate({
            scrollTop: 20
        }, 500)
    });
})();
//标题动画
function animat() {
	 var zx=$("[data-bt]");
	 var bt=document.getElementsByClassName("bt");
     $(window).scroll(function() {
         var scr = $(window).scrollTop();
		 for(var i=0;i<zx.length;i++){
			  if (zx[i].offsetTop <= scr + innerHeight / 2+300&&bt[i].className.indexOf("btdh20") == -1)  {
			 $(bt[i]).addClass("btdh20")
                 if(i==0){
                     lbdh();
                 }
				 if(i==1){
					 setTimeout("typing(str,st1)",800);
                     setTimeout(function(){
                         $(".vd1").addClass("ani_load")
                     },500)
				 }
                 if(i==2){
                     dh2();
                 }
                 if(i==3){
                     dh3();
                 }
                 if(i==4){
                     set_animation();
                 }
		 }
        } 
     })
 }
 animat();
//第二版动画
var tp=document.getElementsByClassName("tp");
function dh2(){
    var im=tp[0].getElementsByTagName("img");
    let i=0;
    let timer=setInterval(()=>{
        $(im[i]).addClass('ani_load1');
        i++;
        if(i==im.length){
            clearInterval(timer);
            timer=0;
            setTimeout(function(){
                $(".nrrr").addClass("ani_load")
            },800)
            setTimeout(function(){
                dydh();
                $(".xt").addClass("xtdh");
            },500)
        }
    },300);

}
function dh3(){
//第三版动画
    im=tp[1].getElementsByTagName("img");
    let i=0;
    let timer=setInterval(()=>{
        $(im[i]).addClass('ani_load1');
        i++;
        if(i>2){
            clearInterval(timer);
            timer=null;
            i=im.length;
        }
        if(i==im.length){
            timer=setInterval(()=>{
                $(im[i]).addClass('ani_load2');
                i--;
                if(i<3){
                    clearInterval(timer);
                    timer=null;
                    $(".zx3 .nr").addClass("ani_load")
                }
            },400)
        }
    },400)
}
//手风琴
$(".zx3").on("click", ".title", function() {
    let title = $(this);
    title.next()
        .toggleClass("in")
        .siblings(".fade")
        .removeClass("in")
});
//打字机   动画
var str = "伟祺企业创建于1992年，与中国艺术马赛克市场同步而行，JNJ是伟祺企业旗下的面向国际高端市场的马赛克品牌，诞生于2001年。 伟祺企业创始人——李伟达先生与文祺小姐，把异域风情、绅士、品味、时尚和贵族文化深深地烙在了'JNJ'的灵魂深处，在他们看来，无论是概念艺术还是实用设计，所有的一切都不应该仅是装饰而要真正融入生活，要“让全人类去感受艺术，追求艺术！”JNJ以独具特色的创意设计、精湛的工艺、匹配的空间解决方案、卓越的品质倍受推崇，它所代表的，不仅仅是一种生活方式，更是方向。</br>经过二十多年稳健发展，已茁壮成为占地面积約50000平方米、员工人数达1000多人，在全国各大城市已经建立了数百家服务商，并远销美国、欧洲、中东等近100多个国家和地区的中国马赛克行业首屈一指的品牌；更是国内乃至全世界为数不多的集马赛克生产、研发、设计、销售于一体的大型现代化企业之一。";
var st1="领略极致工艺，感受艺术生活";
var i = 0;
var i1=0;
var Typing = document.getElementById('Typing');
var typin = document.getElementById('typin');
function typing(str,st1) {
	if (i <= st1.length) {
        typin.innerHTML = st1.slice(0, i++) + '_';
       setTimeout('typing(str,st1)',60); 
    } else {
        typin.innerHTML = st1; 
		if (i1 <= str.length) {
        Typing.innerHTML = str.slice(0, i1++) + '_';
       setTimeout('typing(str,st1)',20); 
    } else {
        Typing.innerHTML = str; 
    }
    }
}

function dzdh(){
    setTimeout(function(){
        $(Typing).addClass('ani_load')
    },300)
}

//遮罩
(function(b) {
    b.fn.extend({
        "mouseMove": function(c) {
            $this = b(this);
            $this.hover(function(k) {
                var u = b(this).find(c);
                var p = k.clientX;
                var n = k.clientY;
                var s = parseInt(b(this).offset().top);
                var o = parseInt(s + b(this).height());
                var g = parseInt(b(this).offset().left);
                var d = parseInt(g + b(this).width());
                var m = Math.abs(n - s);
                var j = Math.abs(n - o);
                var i = Math.abs(p - g);
                var f = Math.abs(p - d);
                var h = Math.min(m, j, i, f);
                var q = k.type;
                switch (h) {
                    case m:
                        a("top", q, u);
                        break;
                    case j:
                        a("bottom", q, u);
                        break;
                    case i:
                        a("left", q, u);
                        break;
                    case f:
                        a("right", q, u)
                }
            })
        }
    });

    function a(c, d, f) {
        var e = 300;
        if (c == "top") {
            if (d == "mouseenter") {
                b(b(f)[0]).stop(true, true);
                b(b(f)[0])
                    .css({ display: "block", top: "-100%", left: "0" })
                    .animate({ top: 0, left: 0 }, e)
            } else {
                b(b(f)[0])
                    .animate({ display: "block", top: "-100%", left: "0" }, e)
            }
        }
        if (c == "left") {
            if (d == "mouseenter") {
                b(b(f)[0]).stop(true, true);
                b(b(f)[0])
                    .css({ display: "block", top: "0", left: "-100%" })
                    .animate({ left: 0, top: 0 }, e)
            } else {
                b(b(f)[0])
                    .animate({ display: "block", left: "-100%" }, e)
            }
        }
        if (c == "bottom") {
            if (d == "mouseenter") {
                b(b(f)[0]).stop(true, true);
                b(b(f)[0])
                    .css({ display: "block", top: "100%", left: "0" })
                    .animate({ top: 0, left: 0 }, e)
            } else {
                b(b(f)[0])
                    .animate({ display: "block", top: "100%", left: "0" }, e)
            }
        }
        if (c == "right") {
            if (d == "mouseenter") {
                b(b(f)[0])
                    .stop(true, true);
                b(b(f)[0])
                    .css({ display: "block", top: 0, left: "100%" })
                    .animate({ left: "0%", top: 0 }, e)
            } else {
                b(b(f)[0])
                    .animate({ display: "block", left: "100%" }, e)
            }
        }
    }
})(window.jQuery);
//第四版动画
var list=$("[data-list]");
function set_animation(){
    let count=0;
    let timer=setInterval(()=>{
        $(list[count]).addClass('ani_load');
        count++;
        if(count==list.length-1){
            clearInterval(timer);
            timer=null;
        }
    },200)
}
//时间轴
var dy=document.getElementsByClassName("dy");var g=0;
function dydh(){
    var timer=setInterval(function(){
        if(g%2==0){
            $(dy[g]).addClass("dyd1");
        }else{
           $(dy[g]).addClass("dyd");
        }
        g++;
        if(g==dy.length){
            clearInterval(timer);
            timer=null;
        }
    },300);
}
var c3=document.getElementsByClassName("c3");
for(var i=0;i<c3.length;i++){
    var ctx=c3[i].getContext("2d");
    ctx.lineWidth="1";
    ctx.fillStyle="white";
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(15,15);
    ctx.lineTo(0,30);
    ctx.fill();
    ctx.stroke();
};
var c2=document.getElementsByClassName("c2");
for(var i=0;i<c2.length;i++){
    var ctx1 = c2[i].getContext("2d");
    ctx1.strokeStyle = "black";
    ctx1.lineWidth = "1";
    ctx1.fillStyle = "white";
    ctx1.beginPath();
    ctx1.moveTo(30, 0);
    ctx1.lineTo(15, 15);
    ctx1.lineTo(30, 30);
    ctx1.fill();
    ctx1.stroke();
};
//轮播点击
(function(){
    window.addEventListener('load', function () {
        var carousels = document.querySelectorAll('.carousel');

        for (var i = 0; i < carousels.length; i++) {
            carousel(carousels[i]);
        }
    });

    function carousel(root) {
        var figure = root.querySelector('figure'),
            nav = root.querySelector('nav'),
            images = figure.children,
            n = images.length,
            gap = root.dataset.gap || 0,
            bfc = 'bfc' in root.dataset,
            theta = 2 * Math.PI / n,
            currImage = 0;

        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        window.addEventListener('resize', function () {
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        });

        setupNavigation();

        function setupCarousel(n, s) {
            var apothem = s / (2 * Math.tan(Math.PI / n));

            figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';

            for (var i = 0; i < n; i++) {
                images[i].style.padding = gap + 'px';
            }for (i = 1; i < n; i++) {
                images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
                images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
            }
            if (bfc) for (i = 0; i < n; i++) {
                images[i].style.backfaceVisibility = 'hidden';
            }rotateCarousel(currImage);
        }

        function setupNavigation() {
            nav.addEventListener('click', onClick, true);

            function onClick(e) {
                e.stopPropagation();

                var t = e.target;
                if (t.tagName.toUpperCase() != 'BUTTON') return;

                if (t.classList.contains('next')) {
                    currImage++;
                } else {
                    currImage--;
                }

                rotateCarousel(currImage);
            }
        }

        function rotateCarousel(imageIndex) {
            figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
        }
    }

    
})();
var lbdj=document.getElementsByClassName("lbdj")[0];
$(".cgwz").click(function(){
       //lbdj.style.display="none";
    $(".lbdj").css({zIndex:-5000,visibility:"hidden"});
 });
	  console.log($(".ul"));
  $(".u1").on("click","img",function(){
	  console.log($(this));
        //lbdj.style.display="block";
      $(".lbdj").css({zIndex:9999,visibility:"visible"})
    })






