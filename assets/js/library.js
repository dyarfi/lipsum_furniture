// JavaScript Document
$(document).ready(function(){	
	// Animate
	
	$('.productlist').toggle(
		function (){
//			$('.productlist').animate({ borderColor: '#959595' }, 'slow');
			//alert('asdf');
			$('.productlist').animate({ backgroundColor: '#959595'});			
		},
		function (){
						//alert('asdf');

//			$('.productlist').animate({ borderColor: '#FFFFFF' }, 'slow');
			$('.productlist').animate({ backgroundColor: '#FFFFFF'});

		}
	);
	
	/*
   $('.productlist').hover(

        function(){
			alert('sdfdsf');
            $(this).animate({ backgroundColor: '#990000' });
        }, 
        function(){
            $(this).animate({ backgroundColor: '#ff0000' });
        }
    ); 
		*/
	// Colorbox
	// 	$(".colorbox_inline").colorbox({rel:'colorbox_inline', inline:true, iframe:false, fixed:false});
	// $(".colorbox_inline").colorbox({rel:'colorbox_inline', inline:true, width:"50%",height:"50%", iframe:false, fixed:false});

	// $(".colorbox_inline").colorbox({rel:'colorbox_inline', inline:true, width:"62%",height:"auto", iframe:false, fixed:false});
	$(".colorbox_inline").colorbox({rel:'colorbox_inline', inline:true, width:"62%",height:"auto",innerWidth:500, innerHeight:409, iframe:false, fixed:false});
	
	$(".colorbox").colorbox({rel:'colorbox', fixed:false});

        $('.logo a').hover(function() {
           $(this).find('img').stop().animate({'opacity':0.55}); 
        },function () {
            $(this).find('img').stop().animate({'opacity':1}); 
        });
	// pngFix
	$(document).pngFix(); 
        $('.productlist a, a.product_new').click(function(){
            var href = $(this).attr('rel');
            $.colorbox({href:href,
            iframe:true,
            width:"62%",height:$(window).height(),innerWidth:500, innerHeight:409,
//		height:$(window).height(),
            fixed:true, 
            title:false, 
            //onClosed:function(){ if ($.getUrlVar('ref') != 'nav'); parent.location.reload(); },
            returnFocus:true});
            return false;
	});
	//********* jQuery Cycle -- start *********//
	// Cycle pager
	$.fn.cycle.updateActivePagerLink = function(pager, currSlideIndex) { 
		$(pager).find('li').removeClass('activelI') 
        .filter('li:eq('+currSlideIndex+')').addClass('activelI'); 
	};
	
	// Cycles
	$('.slideshow').cycle({
		//fx:'scrollHort',
		timeout:0,
		prev:'#prev',
		next:'#next',
		pager:'#nav',
		pagerAnchorBuilder:pagerFactory
	});
	$('.slideshow-portfolio').cycle({
		//fx:'scrollHort',
		timeout:0,
		prev:'#prev',
		next:'#next',
		pager:'#nav',
		height:'474px',
		pagerAnchorBuilder:pagerFactory
	});
	$('.slideshow-product').cycle({
		fx:'scrollVert',
		timeout:0,
		prev:'#prev',
		next:'#next',
		pager:'#nav',
		pagerAnchorBuilder:pagerFactory
	});
        var idx = $('.slideshow .item').length;
	function pagerFactory(idx,slide){
		var s= idx > 8 ? ' style="display:none"':'';
		return'<li'+s+'><a href="#">'+(idx+1)+'</a></li>';
	};
	//********* jQuery Cycle -- end *********//

	
});