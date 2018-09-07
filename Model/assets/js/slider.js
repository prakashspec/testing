var sliderFunCalled = false;
function audioPlay()
	{	

		if(activeIcon=="explore")
		return;
		globalAudioPause();
		AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex][stepIndex];
		globalAudioName=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["audio"][audioIndex][stepIndex];
/* 		if(typeof AudioText == 'undefined'){
			if(parseInt($('.expDiv').css('left'))>= 0 ) SliderOkClick("close"); 
			$('.activeSlider').off('click').css('cursor','default');
		}
		else {
			$('.activeSlider').off('click').on("click",activitySlideDiv).css('cursor','pointer');
			if(parseInt($('.expDiv').css('left')) < 0 ) SliderOkClick("open"); 
		} */
		LengthFind=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].length-1;
		currentIndex=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].indexOf(AudioText);
		
		slideImg=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["Image"];
		if(currentStep =='digend' && FeedBack=='right'){AudioText=AudioText.replace('[X]',count);}
		$(".expDiv .expPara").html(AudioText);
		if(slideImg!="")$(".expimgcont img").attr("src",imgBaseAct+slideImg);
		
			//var slidetimeout=setTimeout(function(){		
				$('.expChild').css('height','auto');			
				SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
				//clearTimeout(slidetimeout);
			//},1);
		
		$('.activeSlider').off('click').on('click',activitySlideDiv);
		sliderNavigationFun();
	}

function MoveToNextStep()
	{
		
		
		if(FeedBack=="wrong")
			{
				SliderOkClick("close");
				return;
			}
		if(audioIndex==0 && stepIndex == LengthFind)
			{
				audioIndex=0;
				stepIndex=0;
				SliderOkClick("close");
				return;
			}
		if(stepIndex!=LengthFind)
			{
				stepIndex++;			
				audioPlay();
				//if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);}
				return;
			}
		if(audioIndex==1 && stepIndex==LengthFind)
			{	
				audioIndex=0;
				stepIndex=0;
				SliderOkClick("close");
				return;
			}
			FeedBack="step";
			
	}
var tempcurrentStep = 0;
function rightAttemptFun()
	{	
		sliderFunCalled = false;
		tempcurrentStep=0;
		FeedBack="right";
		$(".highlight,.glowEffect").hide();
		audioIndex=1;			
		stepIndex=0;
		audioPlay();
		//if(parseInt($('.expDiv').css("left")) < 0){	SliderOkClick("open");}
		//SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
	}
 
 function wrongAttemptFun(ElemLevel)
	{
		sliderFunCalled = false;
		$('.activeSlider').off('click').on('click',activitySlideDiv);
		noStepArr[currentStep]++;
		FeedBack="wrong";
		if(ElemLevel=="drop")
		{
			audioIndex=3;
			stepIndex=0;
			audioPlay();
		}
		else if(ElemLevel=="stop")
		{
			audioIndex=2;
			// if(tempcurrentStep<2){stepIndex=tempcurrentStep;tempcurrentStep++;}
			stepIndex=0;
			audioPlay();
		}
		//SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
		$('.navSliderBtn').hide();
	}

function toggleExpTabs()
	{
		StateCheck=$(this).attr("id").split("_")[1]-1;
		$(".labelRight").removeClass('labelArrow').css({'cursor':"pointer","background":backgroundNcolor[2][0],"color":backgroundNcolor[2][1]});
		$(this).addClass("labelArrow").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		audioPlay();
		//activityFunction(cpage);
	}

function SliderFunc(ImgStatus,okStatus,sliderStatus)
{
	sliderFunCalled = true;
	if(sliderStatus=="slidershow")
	{
		
		$(".expDiv").css("display","block");
		if((ImgStatus=="imgshow" && slideImg!="") || slideImg!=""){$(".expimgcont").css("display","block");$('.audioTextDiv').css('margin-top','-11px');}
		else if((ImgStatus=="imgshow" && slideImg!="")  || slideImg==""){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');}
		if(FeedBack=='wrong'){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','0px');}
		if(okStatus=="okshow"){$(".moveNextFood").css("display","block");}
		else if(okStatus=="okhide"){$(".moveNextFood").css("display","none");}	
		
		scrollApplying();
		//------------Slider Bottom set when text changes-------//
		if(parseInt($('.expDiv').height()+parseInt($('.expDiv').css('top'))) >= 530){
			$('.expDiv').animate({top:parseInt(530-$('.expDiv').height())+'px'});
		}
		
	}
	else
	{
		 $(".expDiv,.EventNotAllowed").css("display","none");
	}
}

var scrollApplying = function(){			
	$('.expDiv').find('.shadowTop,.shadowBottom').remove();
	$('.expChild').mCustomScrollbar('destroy');
	$(".expChild").css({'overflow-y':'hidden'});
	if($(".expDiv").height() > 360){
		$('.expChild').css('height',350);		
		$('.expDiv').css('padding-bottom','0px');
		if($('.expFoodBar').css('display') == 'flex'){
			$('.expChild').css('height',306);
			$('.expDiv').css('padding-bottom','44px');
		}
		scrollApplyChoose('expDiv','expChild');
		sliderFunCalled = false;
		
		if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);}
	}
	else
	{		
		$('.expDiv').css('padding-bottom','0px');	
		$('.expChild').mCustomScrollbar('destroy');
		if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);}
	}
}

function scrollApplyChoose(parent,child)
{	
	$('.'+parent).append('<div class="shadowTop"></div><div class="shadowBottom"></div>');
	$('.shadowTop,.shadowBottom').css('display','none');
	$('.shadowBottom').css('display','block');	
	
	if($('.expFoodBar').css('display') == 'flex'){		
		$('.shadowBottom').css({bottom:'44px'});
	}else  {		
		$('.shadowBottom').css({bottom:'0px'});
	}	
	if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'105px'});
	
	$("."+child).css({'overflow-y':'auto'});
	$("."+child).mCustomScrollbar({theme:"3d-thick",scrollInertia: 800,
	live: true,
	callbacks:{
		onScrollStart:function(){
		  if(parent == 'helpinner') $('.helpinner .shadowTop,.helpinner .shadowBottom').css('display','block');
		  else $('.shadowTop,.shadowBottom').css('display','block');
		},
		onTotalScroll:function(){
			if(parent == 'helpinner') {
				$('.helpinner .shadowBottom').css('display','none'); 
				$('.helpinner .shadowTop').css('display','block');
				}
			else {
				$('.shadowBottom').css('display','none'); 
				$('.shadowTop').css('display','block');
			}
		},
		onScroll:function(){
		  if(this.mcs.top == 0)
			{
				if(parent == 'helpinner') {
					$('.helpinner .shadowBottom').css('display','block'); 
					$('.helpinner .shadowTop').css('display','none');
					}
				else {
					$('.shadowBottom').css('display','block'); 
					$('.shadowTop').css('display','none');
				}
 				if($('.expFoodBar').css('display') == 'flex'){		
					$('.shadowBottom').css({bottom:'44px'});
				}
				else{
					$('.shadowBottom').css({bottom:'0px'});					
				}
				if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'105px'});
			}
		}
	}});
	
	
	$("."+child).mCustomScrollbar("scrollTo",[0,0]);
	//$('.expFoodBar').css('bottom','-44px');
	scrollApply(parent)
}
	
var scrollApply = function(frParent)
	{	
		$('.mCSB_draggerContainer').css({boxShadow:'none'}).css('background','#fff').css('border','1px solid #898a8c').css('border-radius','0px');
		$('.mCSB_dragger_bar').css('margin','0px').css('background','rgba(0, 0, 0, 0.5)').css({boxShadow:'none'}).css('border-radius','0px');		
		$('.mCSB_draggerContainer').css({border:'1px solid rgba(0,0,0,0.7)'});
		$('.mCSB_dragger_bar').css({'left':'0px',"width":"100%"});
		//$('.mCSB_container').css({height:'100%'});
		$('.mCSB_dragger').css({minHeight:'94px'});
		$('.mCSB_scrollTools').css('z-index',10);
	}	
var buttonClick = function(e)
{ 

if($(this).attr('id') == 'activity_ch2' && $(this).attr('id').split("ch")[1]-1 == '1')
	{
	return;
	}
	buttonId = $(this).attr('id');
	getIdSplit=buttonId.split("ch")[1]-1;
	
	
	activityFunction(cpage);
	
	headerTabs($(this));
	// audioPlay();
}

function SliderOkClick(OkClickState)
{
	if(OkClickState=="open")
	{
		rotateValue=0;
		angleRot=0;
		if(MainNavigations==2){$(".EventNotAllowed").show();}
		else{$(".EventNotAllowed").hide();}
	}
	else if(OkClickState=="close")
	{
		rotateValue=-280;
		angleRot=180;
		$(".EventNotAllowed").hide();
		globalAudioPause();
	}
	slideAnimate();
}
	
function activitySlideDiv()
	{
		rotateValue = (rotateValue == 0)?-280:0;			
		angleRot = (angleRot == 0)?180:0;
		if(parseInt($('.expDiv').css('left'))>=0) globalAudioPause();
		slideAnimate();	
				
	}

function slideAnimate()
{
	$('.expDiv').stop().animate({left:rotateValue},800,function(){			
		$('.activeSlider').rotate({
			angle:0,
			center:["50%", "50%"],
			animateTo:angleRot,
			duration:0			
		});			
	});
}

function TabsStateRightAndTop(topMenu,rightMenu,baseImg)
{
	if(topMenu=="topmenushow"){
		$(".highlightTab").show();
		$(".workArea, .EventNotAllowed").css({"top":"0px","height":"554px"});
		$(".commonWorkArea").css({"height":"554px"});
	}
	else if(topMenu=="topmenuhide"){
		$(".highlightTab").show();
		$(".workArea, .EventNotAllowed").css({"top":"0px","height":"554px"});
		$(".commonWorkArea").css({"height":"554px"});
	}
	if(rightMenu=="rightmenushow"){$(".Modes").show();}
	else if(rightMenu=="rightmenuhide"){$(".Modes").hide();}
	if(baseImg=="baseimgshow"){$(".baseImg").show();}
	else if(baseImg=="baseimghide"){$(".baseImg").hide();}
}
var currentIndex=0;

function nxtNavigationFun()
{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(LengthFind > currentIndex){stepIndex++; $('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);}
	else{ $('.nxtBtnSlider').off('click');}
	if(cpage == 'activity' && currentIndex == 1 && currentStep == 'play4'){
	sliderFunCalled = false;
	}
	
	audioPlay();
	sliderNavigationFun();
	
	
	
	
	if(cpage == 'activity' && currentIndex == 1 && currentStep == 'welcome'){
	sliderFunCalled = false;
	$('#hunt').off('click').on('click',beginHunt).css({'background':'#ffcc00','color':'#000000','cursor':'pointer'});
	$("#huntBlocker").css({'display':'none'});
	}
	
	
	if(cpage == 'activity' && currentIndex == 1 && currentStep == 'play0'){
	$('#hunt').off('click').on('click',repopulateFun).css({'background':'#ffcc00','color':'#000000','cursor':'pointer'});
	$("#huntBlocker").css({'display':'none'});
	}
	
	if(cpage == 'activity' && currentIndex == 1 && currentStep == 'play1'){
	$('#hunt').off('click').on('click',reHuntFun).css({'background':'#ffcc00','color':'#000000','cursor':'pointer'});
	$("#huntBlocker").css({'display':'none'});
	}
	
	if(cpage == 'activity' && currentIndex == 2 && currentStep == 'play2'){
	$('#hunt').off('click').on('click',repopulateFun).css({'background':'#ffcc00','color':'#000000','cursor':'pointer'});
	$("#huntBlocker").css({'display':'none'});
	}
	
	
}

function preNavigationFun()
{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(stepIndex > 0){stepIndex--;$('.PreBtnSlider').off('click').on("click",preNavigationFun);}
	else {$('.PreBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
	if(cpage == 'activity' && (currentIndex == 0 && currentStep == 'welcome' || (currentIndex == 0 && currentStep == 'play0')||(currentIndex == 0 && currentStep == 'play1')||(currentIndex == 0 && currentStep == 'play2')||(currentIndex == 1 && currentStep == 'play2'))){
	$("#huntBlocker").css({'display':'block'});
	$('#hunt').off('click').css({'background':'#929496','color':'#ffffff','cursor':'default'});
	}
}
function sliderNavigationFun()
{
	$('.PreBtnSlider,.nxtBtnSlider').css({'width':'28px','height':'28px'});
	if(cpage == 'activity')
	{
	
	}
	if(LengthFind == 0 || LengthFind == -1)
	{
		$('.expFoodBar,.navSliderBtn').hide();
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default',pointerEvents:'none'});
		$('.audioTextDiv').css({'margin-bottom':'-33px'});
		return;
	}
	if(LengthFind == currentIndex)
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.expFoodBar,.navSliderBtn').show();
		$('.audioTextDiv').css({'margin-bottom':'0px'});
		if(currentIndex == 2 && currentStep == "play4")
		{
		$('.audioTextDiv').css({'margin-bottom':'-33px'});
		}
		return;
	}
	if(currentIndex == 0 && LengthFind !=0)
	{	
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.expFoodBar,.navSliderBtn').show();
		$('.audioTextDiv').css({'margin-bottom':'0px'});
		return;
	}
	if( currentIndex > 0 && LengthFind !=0 )
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.expFoodBar,.navSliderBtn').show();
		$('.audioTextDiv').css({'margin-bottom':'0px'});
		return;
	}	
}

var screenFun1 = function(event){
			if(event.target.id == "activity_ch1")
			{
			return;
			}

			if((event.target.id == "huntBlocker"))
			{
				SliderOkClick("close");
				globalAudioPause();
				return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 1 && currentStep == 'welcome')
			{
			wrongAttemptFun('stop');
			$('#labhilightst').css({'display':'block'});
			return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 0 && currentStep == 'welcome' && audioIndex == 2)
			{
			SliderOkClick("open");
			return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 1 && currentStep == 'play0')
			{
			wrongAttemptFun('drop');
			$('#labhilightst').css({'display':'block'});
			return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 0 && currentStep == 'play0' && audioIndex == 3)
			{
			SliderOkClick("open");
			return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 1 && currentStep == 'play1'){
			wrongAttemptFun('drop');
			$('#labhilightst').css({'display':'block'});
			return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 0 && currentStep == 'play1' && audioIndex == 3)
			{
			SliderOkClick("open");
			return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 2 && currentStep == 'play2'){
			wrongAttemptFun('drop');
			$('#labhilightst').css({'display':'block'});
			return;
			}
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 0 && currentStep == 'play2' && audioIndex == 3)
			{
			SliderOkClick("open");
			return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 0 && currentStep == 'play3' && audioIndex == 3)
			{
			SliderOkClick("open");
			return;
			}
			
			if((event.target.id == "resetGameCanvas"||event.target.id == "dummyCloseDiv") && currentIndex == 0 && currentStep == 'play3'){
			wrongAttemptFun('drop');
			$('#labhilightst').css({'display':'block'});
			return;
			}
			
			
			
			if(($(event.target).parent().attr('class') == 'gameContainer' || $(event.target).parent().attr('id') == 'canvasContainer' ||event.target.id == "sunamiVideo" ||event.target.id == "mouseLabelBlocker" || event.target.id == "resetGameCanvas" && parseInt($('.expDiv').css("left")) >= 0))
			{
					SliderOkClick("close");
				globalAudioPause();
			}
}