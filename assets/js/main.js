$(document).ready(function() {
		
	$(function () {
		
		
		$(window).scroll(function(){
			if ($(window).scrollTop()>150){
				$("#backtotop").addClass("showme");
			}
			else
			{
				$("#backtotop").removeClass("showme");
			}
		});
		
		$("#backtotop").click(function(){
			$('body,html').animate({scrollTop:0},400);
				return false;
		});
		
		$("pre").addClass("prettyprint linenums");
    		prettyPrint();
			pjax_loadChart();
    		
		$('.navbar-wrapper').stickUp();
		$("a#single_image").fancybox();		
		$("a.group").fancybox({
	        'transitionIn'  :   'elastic',
	        'transitionOut' :   'elastic',
	        'speedIn'       :   600, 
	        'speedOut'      :   200, 
	        'overlayShow'   :   false
	    });
	});

	

	
	$(document).pjax('.pjaxlink', '#pjax', {
	    fragment: "#pjax",
	    timeout: 10000
	  });
	    
	
	$(document).on('pjax:send', function() { //pjax链接点击后显示加载动画；
	    $(".pjax_loading").css("display", "block");
	});
	
	 $(document).on('pjax:complete', function() {
	 	 		$("pre").addClass("prettyprint linenums");
				prettyPrint();
				skillbar();
	 	 		pajx_loadDuoshuo();//pjax加载完成之后调用重载多说函数
				
	 	 		$(".pjax_loading").css("display", "none");
 	 		    pjax_loadChart();
		        $('.bookpiclist .bookpic').hover(
			                    function() {
			                        $(this).find('.booklabel').stop().animate({bottom: 0}, 200);
			                        $(this).find('img').stop().animate({top: -30}, 500);
			                    },
			                    function() {
			                        $(this).find('.booklabel').stop().animate({bottom: -40}, 200);
			                        $(this).find('img').stop().animate({top: 0}, 300);
			                    }
			    );
				
							  
								  
	  });


       $("li.phoneselect").click(function(){
				$("div.navbar-collapse").removeClass("in");
				$("button.navbar-toggle").addClass("collapsed");
	});
       
     $(".circle").load(function(){
	    $(".circle").addClass("show");
	 });   	

 	$('.bookpiclist .bookpic').hover(
                    function() {
                        $(this).find('.booklabel').stop().animate({bottom: 0}, 200);
                        $(this).find('img').stop().animate({top: -30}, 500);
                    },
                    function() {
                        $(this).find('.booklabel').stop().animate({bottom: -40}, 200);
                        $(this).find('img').stop().animate({top: 0}, 300);
                    }
      );
	  

	skillbar();
});
		
function pajx_loadDuoshuo(){   
    var dus=$('.ds-thread');
    if($(dus).length==1){
        var el = document.createElement('div');
        el.setAttribute('data-thread-key',$(dus).attr("data-thread-key"));//必选参数
        el.setAttribute('data-url',$(dus).attr("data-url"));
        DUOSHUO.EmbedThread(el);
        $(dus).html(el);
    }
	
}


function pjax_loadChart(){
		require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [ 
				'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                var option = {
				    title : {
				        text: 'IT技能属性表',
				        subtext: '',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient : 'vertical',
				        x : 'left',
				        data:['java','android','html','css','php','c']
				    },
				    toolbox: {
				        show : false,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {
				                show: true, 
				                type: ['pie', 'funnel'],
				                option: {
				                    funnel: {
				                        x: '25%',
				                        width: '50%',
				                        funnelAlign: 'left',
				                        max: 80
				                    }
				                }
				            },
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    series : [
				        {
				            name:'IT技能',
				            type:'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:70, name:'java'},
				                {value:100, name:'android'},
				                {value:20, name:'html'},
				                {value:20, name:'css'},
				                {value:20, name:'php'},
				                {value:20, name:'c'}
				            ]
				        }
				    ]
				};
                    
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
}


function skillbar(){
    $('div.skillbar').each(function() {
        $(this).find('div.skillbar-bar').width(0);
    });

    $('div.skillbar').each(function() {
        $(this).find('div.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });    

}

