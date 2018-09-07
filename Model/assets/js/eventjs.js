var adobeReady = false;
var mainNavTabs = function(){
	$('.rtxt').off('click').on('click',rbuttoneve);
}
var globalAudioName;
var lastAudioPlayed;
	 	
function initialfun()
	{
		
		$('.workArea').hide();		
		mainNavTabs();
		$('.help1,.help2').off('click').on('click',toggleHcont).css('cursor','default');	
		$('.rtxt').attr('data-hover','none');
/* 		$('#lab').show()
		$('#lab').hide(); */
	    $(".button").off("click").on("click",buttonClick); 
		$(".moveNextFood").off("click").on("click",MoveToNextStep); 
		$('.screenIcon').off('click').on("click",captureScreen);	
		setBothLabelColor();
		$('.rtxt').hover(
		  function(event){
			var ctTarget = $(event.target);
			var actStatus = ctTarget.attr('data-hover');	
			if(actStatus != 'active')
				{				
					$(this).css({'color':templateHdr.textActive});					
				}
		  },
		  function(event){
			var ctTarget = $(event.target);
			var actStatus = ctTarget.attr('data-hover');	
			if(actStatus != 'active')
				{
					$(this).css({'color':templateHdr.textNormal,'box-shadow':'none','font-family':'Roboto-Bold'});
				}
		  }
		);
		$('.infoIcon').off('click').click(function(){
			lastAudioPlayed = globalAudioName;
			globalAudioPause();
			$('.helpinner .shadowTop').hide();
			$('.helpinner .shadowBottom').css({bottom:'105px'}).show();
			$('.helpwindow').fadeIn(300).css('display','flex');
			if(timeStarted)
			{
				if(cpage == 'explore')
				{game.paused = true; window.clearInterval(timerInterval);}
				// else if(cpage == 'activity'){Main.videoPause = true;}
			
			}
			
			$('.helpBlock1').find('img').addClass('expAudio');
			$('.helpBlock2').find('.pdiv').each(function(){
				$(this).find('img:first').addClass('expAudio');
				$(this).find('img:first').attr('audio-state','pause');	
			})
			$('.expAudio').off('click').on('click', playGlobalAudio);
			$('.helpBlock1').find('.expAudio').attr('audio-state','pause');
            $('.help1').trigger('click');	
			lastplayedAudio	= globalAudioName;
			audioElement  =  document.getElementById("audioId");
			audioElement.pause();
		
		});
		$(document).off('mousedown touchstart').on('mousedown touchstart',function(e){
			var targetClass = $(e.target).attr('class');
			if(targetClass == "helpwindow" ||targetClass == "closeIcon")
			{
				closeHelpWin();
				var test = isPlaying(audioElement);
				if(cpage == 'explore')
				{
				audioElement.play();
				}
				
			}
		});
		$('.chheader2').removeClass('chheader2').addClass('chheader2Act');		
		for(var i=0;i<noOfSteps;i++)
		{
			noStepArr[i]=0;
			totalStepArr[i]=0;
		}
		$('.'+Tabs[MainNavigations]).trigger('click').css('cursor','default');
		//$('.rtxt').off("click").css('cursor','default');
		$('.expDiv').draggable({
			start:function(){},
			containment:'.sliderContain',
			handle:'.headerDrag'
		});
	}
function isPlaying(audelem) { return !audelem.paused; }
var closeHelpWin = function(e){
	$('.helpwindow').fadeOut(300);
	if(game.paused && initTime>0 && timeStarted && cpage == 'explore')
	{
	window.clearInterval(timerInterval);
	game.paused = false;
	startTimerFun();
	}
	globalAudioName = lastAudioPlayed;
	/* if(cpage == 'activity' && initTime>0 && timeStarted){
	window.clearInterval(timerInterval);
	Main.videoPause = false;
	startTimerFun();
	} */
	globalAudioPause();
	
}
function setBothLabelColor()
{
	$("#ch1").css({"background":labelSettings[getIdSplit]});
	$("#rightlabel_1").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
	$.each( TopMenuText, function( index, value ) {
		
		$("#ch"+(index+1)).text(TopMenuText[index]);
	});
	$.each( rightMenuText, function( index, value ) {
		$("#rightlabel_"+(index+1)).text(rightMenuText[index]);
	});
}
function toggleHcont(e)
	{
		selectedIndex = 0;
		defIndex = -1;
		var ctClass = Number($(e.target).attr('class').match(/\d/));
		var togNum = (ctClass == 1)?2:1;		
		
		if(ctClass == 2) $('.helpinner .shadowTop,.helpinner .shadowBottom').hide();
		else $('.helpinner .shadowBottom').show();
		$('.helpBlock1,.helpBlock2').css('display','none');	
		$('.help1').removeClass('lclass');
		$('.help2').removeClass('rclass');	
		$('.help1,.help2').css('background-color','rgba(0,0,0,0.7);').css('color','white').css({'cursor':'pointer'});
		$('.help'+togNum).addClass($('.help'+togNum).attr('data-class'));
		$('.helpBlock'+ctClass).css('display','block');
		$('.help'+ctClass).css('border','0px soild #000').css('color','#000').css('background-color','#fff').css({'cursor':'default'});
		globalAudioPause();	
	}	
	
function rbuttoneve(event)
	{	
			//if($(this).html().toLowerCase() == 'welcome')			
			 //{

			 //}
			
			 //if($(this).html().toLowerCase() == 'activity')			
			 //{
				
			 //}
		prevMove = -1;
		//ResetShell();
		$('.rightlabel2').css('animation','none');
		mainNavTabs();
		$(this).off('click');
		var ctTarget = $(event.target);
		MainNavigations=$(this).attr("id").split("_")[1]-1;
		cpage = event.target.getAttribute("name");
		Main.currentPage = cpage;
		$('.rtxt').attr('data-hover','none').css({"cursor":"pointer"});
		$('.rtxt').css({'color':templateHdr.textNormal,'box-shadow':'none','font-family':'Roboto-Bold'})		
		ctTarget.attr('data-hover','active').css({"cursor":"default"});	
		ctTarget.css({'color':'#FFCC00','box-shadow':'0 -6px #FFCB05'/*,'font-family':'Roboto-Black'*/});
		$('.workArea').hide();
		$('#'+cpage).show();		
		$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
		parentTab = $(this).html().toLowerCase(); 
		lightString = '';
		activeCount = 0;
		
		activityFunction(cpage);
		if($(this).html().toLowerCase() == 'explore')
			{
				activeIcon="explore";
				$("#rightlabel_1").trigger("click");
				$("#explore_ch1").trigger("click");
				$(".expDiv").css({"display":"none","left":"-280px"});
				$(".screenIcon").css({"display":"block"});	
				if(adobeReady) restartWelcome();				
			}
		if($(this).html().toLowerCase() == 'activity')
			{
				activeIcon="activity";
				 // $("#rightlabel_1").trigger("click");
				$("#activity_ch1").trigger("click");
				$(".expDiv").css({"left":"-280px"});
				$(".expDiv,.screenIcon").css({"display":"block"});
				if(adobeReady) restartWelcome();				
			}
		if($(this).html().toLowerCase() == 'welcome')			
			{
			$(".expDiv").css({"display":"none","left":"-280px"});	
			$(".screenIcon").css({"display":"none"});	
			}

			//$(".expDiv").css("height","90px");
			$(".activeSlider").css("transform","rotate(180deg)");
			$(".expDiv").css("left","-280px");
			TabsStateRightAndTop(topNSideMenu[MainNavigations][0],topNSideMenu[MainNavigations][1],topNSideMenu[MainNavigations][2]);
			audioPlay();
			sliderNavigationFun();
	}

function ResetShell()
	{
		currentStep='welcome';
		wrongResPos=0;
		LengthFind=0;
		audioIndex=0;
		stepIndex=0;
		getIdSplit=0;
		StateCheck=0;
		FeedBack="Step";
		headerlabel = 'monterey';
		exoploreCtBubble = 'anchovy0';
		imageName="monterey";
		for(var i=0;i<noOfSteps;i++)
		{
			noStepArr[i]=0;
			totalStepArr[i]=0;
		}
		audioPlay();

			$(".activeSlider").css("transform","rotate(180deg)");
			$(".expDiv").css("left","-280px");
			TabsStateRightAndTop(topNSideMenu[MainNavigations][0],topNSideMenu[MainNavigations][1],topNSideMenu[MainNavigations][2]);
			if(parseInt($('.expDiv').css("left")) < 0){	var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},1000);}
	}
	
	
function extractBorder(element) 
	{
		// Extracts element border.
		var border = {
			rect: element.getBoundingClientRect(),
			width: parseFloat(element.style.borderWidth),
			style: element.style.borderStyle,
			color: element.style.borderColor,
			original: element.style.border,
			element: element
		};	
		// Clears original border.
		element.style.borderColor = "transparent";
		return border;
	}
  function extractBorders(element)
	{
		var borders = [];
		// Extracts the rect from the element itself.
		if (element.style.border) {
			borders.push(extractBorder(element));
		}
		// Extracts rect from children.
		
		$(element).find("*").each(function(index, child) {
			if (child.style.border) {
				borders.push(extractBorder(child));
			}
		});
		return borders;
	}
		
function drawBorder(canvas, border, parentRect)
	{
		// Retrieves context.
		var ctx = canvas.getContext("2d");
		// Checks border style.
		if (border.style === "dashed") {
			ctx.setLineDash([3]);
		} else if (border.style === "dotted") {
			ctx.setLineDash([border.width]);
		}
		
		// Calculates border edges.
		var left = border.rect.left + 0.5 - parentRect.left;
		var right = border.rect.right - 0.5 - parentRect.left;
		var top = border.rect.top + 0.5 - parentRect.top;
		var bottom = border.rect.bottom - 0.5 - parentRect.top;
		
		// Draws border.
		ctx.beginPath();
		ctx.moveTo(left, top);
		ctx.lineTo(right, top);
		ctx.lineTo(right, bottom);
		ctx.lineTo(left, bottom);
		ctx.lineTo(left, top);
		ctx.strokeStyle = border.color;
		ctx.lineWidth = border.width;
		ctx.stroke();
		
		// Restores element original border.
		border.element.style.border = border.original;
	}
	
function tocanvas(element, options) 
	{
		// Extracts parent relative position.
		var parentRect = element[0].getBoundingClientRect();

		// Extracts elements borders.
		var borders = extractBorders(element[0]);

		// Keeps original onrendered option.
		var onrendered = options.onrendered;

		// Intercepts onrendered callback.
		options.onrendered = function(canvas) {
		// Draws borders.
		for (var i = 0; i < borders.length; i++) drawBorder(canvas, borders[i], parentRect);

		// Calls original callback.
		if (onrendered) onrendered(canvas);
		}

		// Calls html2canvas.
		html2canvas($(".screenArea"), options);
	}
	
	
function captureScreen()
	{ 
		tocanvas($(".screenArea"), {
			onrendered: function (canvas) {
				saveAs(canvas.toDataURL(), 'Variation And Survival.png');
				
			}
		});
		
	}
	
	
	// html2canvas(document.querySelector("gameContainer"), { onrendered: function(canvas){ window.open(canvas.toDataURL()); } });
	
	
	

// html2canvas(document.querySelector("#gameContainer")).then(canvas => {
    // document.body.appendChild(canvas)
// });
	
	
function saveAs(uri, filename)
	{
		var link = document.createElement('a');
		if (typeof link.download === 'string')
			{
			  link.href = uri;
			  link.download = filename;

			  //Firefox requires the link to be in the body
			  document.body.appendChild(link);

			  //simulate click
			  link.click();

			  //remove the link when done
			  document.body.removeChild(link);
			}
		else
			{
			  window.open(uri);
			}
	}

function callEndFun()
	{			
		globalAudioPause();			
	}
function restartWelcome()
    {
        document.getElementById("myFrame").contentWindow.welcomeMove = 0;	
        var childWindow = $('iframe').contents();
        childWindow.find('#Stage_welText').html(document.getElementById("myFrame").contentWindow.welcomeMode['step_0']['text']);	
        childWindow.find('#Stage_welcomeGroup').css('background','#fff').css('box-shadow','1px 1px 2px 1px rgba(0,0,0,0.25)');
        childWindow.find('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
        childWindow.find('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
        childWindow.find('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
        var lpos = 274;	
        var tpos = 226;	
        childWindow.find('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',174);
        childWindow.find('#Stage_left_slider_act').css('cursor','default');
        childWindow.find('#Stage_audio_icon_normal').attr('audio-state','pause');
        childWindow.find('#Stage_audio_icon_normal').addClass('expAudio');				
        childWindow.find('#Stage_welcomeGroup').removeClass(document.getElementById("myFrame").contentWindow.speechBubblePos);
        document.getElementById("myFrame").contentWindow.AdobeEdge.getComposition("EDGE-1817669").getStage().play(0);
    }