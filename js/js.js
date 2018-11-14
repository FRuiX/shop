var sow = $('.img');
    var index = 0;
        timer = null;
   


$(document).ready(function(event){
	//导航条效果
	var navFirstIndex = $('.first');
	nav(navFirstIndex);
	//用户名，密码验证
	var usename = $('input[name=usename]');
	var psw = $('input[name=psw]');
	var user = $('input[name=user]');
	var verity = $('.verity');
	warning(usename,'imooc',0);
	warning(psw,'imooc.com',1);
	warning(user,'imooc',2);
	warning(verity,'gyyd',3);

	//点击x关闭登录页面
	close();
	open();
	//登录注册的切换
	$('#loginLink').click(login);
	$('#regist').click(reg);
	//登录注册页底部logo变色
	var wechat = $('.icon-wechat'),
	    xinlang = $('.icon-xinlang'),
	    qq = $('.icon-qq');
    iconChange(wechat);
    iconChange(xinlang);
    iconChange(qq);
	//购物车 滑过出现
    cart();
    //banner区，二级菜单
    //classify();
    //轮播图
    starAutoPlay();
    autoPlay();
    //楼层1
    var myF1=$('.my-f1');
    var floorClassify1 = $('.f1-classify').children('span');
    floorOne($('.major'),floorClassify1,myF1);
    floorOne($('.men'),floorClassify1,myF1);
    floorOne($('.women'),floorClassify1,myF1);
    //楼层2
    var myF2=$('.my-f2');
    var floorClassify2 = $('.f2-classify').children('span');
    floorOne($('.hot2'),floorClassify2,myF2);
    floorOne($('.expensive'),floorClassify2,myF2);
    floorOne($('.famous'),floorClassify2,myF2);
    //楼层3
    var myF3=$('.my-f3');
    var floorClassify3 = $('.f3-classify').children('span');
    floorOne($('.hot3'),floorClassify3,myF3);
    floorOne($('.wondeful'),floorClassify3,myF3);
    floorOne($('.new'),floorClassify3,myF3);
    //楼层4
    var myF4=$('.my-f4');
    var floorClassify4 = $('.f4-classify').children('span');
    floorOne($('.hot4'),floorClassify4,myF4);
    floorOne($('.home-appliance'),floorClassify4,myF4);
    floorOne($('.life-appliance'),floorClassify4,myF4);
    //楼层5
    var myF5=$('.my-f5');
    var floorClassify5 = $('.f5-classify').children('span');
    floorOne($('.hot5'),floorClassify5,myF5);
    floorOne($('.computer'),floorClassify5,myF5);
    floorOne($('.video'),floorClassify5,myF5);

    //左侧滚动条
    // navLeftClick($('.nav-left-list'))
    navLeft()

})


//顶部二级导航条
function nav(navFirstIndex){
	navFirstIndex.mouseover(function(event){
		$(this).find('.second').addClass('active');
		$(this).addClass('active02')
	})
	navFirstIndex.mouseout(function(){
		$(this).find('.second').removeClass('active');
		$(this).removeClass('active02');

	})
}
//密码和账号输入错误提示
function warning(element,text,i) {
	element.mouseout(function(event){
		    if(element.val()===text){
		        $('.warning').eq(i).addClass('vis-hid');
		    }else{
		    	$('.warning').eq(i).removeClass('vis-hid');
    		}

	})
	
}

//关闭登录界面
function close(){
	$('.close').click(function(event){
		$('.mask').addClass('dis-none');
		$('.item').addClass('dis-none')
	})
}
//打开登录页面
function open(){
	$('.loginLink').click(function(event){
		$('.mask').removeClass('dis-none');
		$('.item').removeClass('dis-none')
	})
}
//切换到登录页
function reg(){
	$('#regist').addClass('clicked');
	$('.regist').removeClass('dis-none');
	$('#loginLink').removeClass('clicked');
	$('.login').addClass('dis-none');
}
function login(){
	$('#loginLink').addClass('clicked');
	$('.login').removeClass('dis-none');
	$('#regist').removeClass('clicked');
	$('.regist').addClass('dis-none');
}
//登录注册页下方微信等logo变化
function iconChange(element){
	element.mouseover(function(event){
          $(this).css({
          	'backgroundColor' : '#07bbbf'
          })
	})
	element.mouseout(function(event){
		$(this).css({
			'backgroundColor':'#ccc'
		})
	})
}
//购物车 鼠标滑过出现
function cart(){
    var cart = $('.cart');
    cart.mouseover(function(){
    	$('.cart-detail').removeClass('dis-none');
    	$('.cart-text').addClass('cart-active');
    	cart.addClass('cart-active');
    	$('.cart-img').addClass('img-active');
    	$('.arrow').addClass('arrow-active');
    })
    cart.mouseout(function(){
    	$('.cart-detail').addClass('dis-none');
    	$('.cart-text').removeClass('cart-active');
    	$('.cart-img').removeClass('img-active');
    	cart.removeClass('cart-active');
    	$('.arrow').removeClass('arrow-active');
    })  
}
//banner区，二级菜单
function classify(){
	var claList = $('.cla-list').children('li');
	claList.mouseover(function(){
		$('.cla-second').removeClass('dis-none')
	})
	claList.mouseout(function(){
		$('.cla-second').addClass('dis-none');
	})
}
//轮播图
   //鼠标经过停止播放，离开播放
function autoPlay(){
	$('.sowing').mouseout(starAutoPlay);
	$('.sowing').mouseover(stopAutoPlay);
	preClick();
	dotsClick();
	
	
}
  //图片切换
function imgChange(){	    
    for(var i=0 ;i<=sow.length;i++){
        sow.eq(i).css({
          	'display' : 'none'
        })
        $('.dots').children().eq(i).removeClass('dots-active')
    }
    sow.eq(index).css({
        	'display' : 'block'
        })
    $('.dots').children().eq(index).addClass('dots-active')
}
//定时器
function starAutoPlay(){
	timer=setInterval(function(){
        index++;
        if(index>4){
        	index=0
        }
        imgChange();
    },2000)
}
//清除定时器
function stopAutoPlay(){
	clearInterval(timer)
}
//上下键切换图片
function preClick(){
	$('.pre').click(function(){
		index+=1;
		if(index > 4) index=0;
		imgChange();	
	})
	$('.pre2').click(function(){
		index--;
		if(index<0)	index=4;
	    imgChange()
	})
}
//点点切换图片
function dotsClick(){
	var dots = $('.dots').children('span');
	dots.click(function(){
		index=$(this).index();
		imgChange();
	})
}
//楼层区
function floorOne(button,btnBox,myF){
	
	$(button).click(function(){
		for(var i=0 ;i<3;i++){
            btnBox.children('img').eq(i).addClass('dis-none');
            btnBox.css({
            	'color':'#777'
            })
		}
		for(var i=0 ;i<3;i++){
            myF.children().eq(i).addClass('dis-none');
		}
		$(this).css({
			'color':'red'
		})
		$(this).children('img').removeClass('dis-none');

        if($(this).index()===0){
			myF.children().eq(0).removeClass('dis-none');
		}else if($(this).index()===2){
			myF.children().eq(1).removeClass('dis-none');
		}else if($(this).index()===4){
			myF.children().eq(2).removeClass('dis-none');
		}
	})
}
//左侧导航效果
function navLeft(){
    	$(window).scroll(function(){
    		var jutop = $(document).scrollTop();
    		var F1 = $('.F1').offset().top-300,
    		    F2 = $('.F2').offset().top-300,
    		    F3 = $('.F3').offset().top-300,
    		    F4 = $('.F4').offset().top-300,
    		    F5 = $('.F5').offset().top-300;   
    		for(var i=0 ;i < $('.nav-left-list').length; i++){
    			var t=i+1
    			$('.nav-left-list').find('a').eq(i).text(t+'F').css({
    				'color':"#000"
    			})
    		}
    		if(jutop <= F1){
                $('.nav-left').addClass('dis-none');
    		}else{
    			$('.nav-left').removeClass('dis-none')
    			if(jutop >= F1 && jutop <= F2){
    		        $('.nav-left-list').find('a').eq(0).text("服装").css({
    		    	    'color':'red'
    		        })
    		    }else if(jutop >= F2 && jutop <= F3){
    			    $('.nav-left-list').find('a').eq(1).text("美妆").css({
    		    	    'color':'red'
    		        })
    		    }else if(jutop >= F3 && jutop <= F4){
    			    $('.nav-left-list').find('a').eq(2).text("手机").css({
    		    	    'color':'red'
    		        })
    		    }else if(jutop >= F4 && jutop <= F5){
    			    $('.nav-left-list').find('a').eq(3).text("家电").css({
    		    	    'color':'red'
    		        })
    		    }else if(jutop >= F5){
    			    $('.nav-left-list').find('a').eq(4).text("数码").css({
    		    	    'color':'red'
    		        })
    		    }
    		}
    		 
    		
	        	
			 
    	})
    }




























