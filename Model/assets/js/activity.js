var tempLoaded = false;
var audioElement = document.getElementById("audioId");
var activityFunction = function (currentPage)
 {
 
	$('.commonWorkArea').css({'display':'none'});
	if(currentPage == 'welcome'){
	$(".screenArea").off("click");
				$('#labhilightst').css({'display':'none'});
				audioElement  =  document.getElementById("audioId");
				audioElement.pause();
				audioElement.currentTime=0;
				$("#huntBlocker").css({'display':'none'});
				if(tempLoaded && Main.currentPage == "welcome"){
				
					$('.videoTag_Middle').attr('src','');
	$('.videoTag_Middle').get(0).currentTime = 0;
	$('.videoTag_Middle').get(0).pause();
	$('.videoTag_Middle').css({"display":"none"});
					resetFullAct(false);
					game.state.start('title');
					Main.currentPage = "";				
					
				}
	}
	if(currentPage == 'explore')
	{
				$(".screenArea").off("click");
				$('.screenIcon').off('click').on("click",captureScreen).css({'cursor':'pointer','background':'url("assets/images/template/camera_icon.png")'});
				$('.commonWorkArea').appendTo('#explore');
				$('#explore .commonWorkArea').show();
				$('#labhilightst').css({'display':'none'});
				//exploreFun();
				sliderFunCalled = false;
				if(tempLoaded && Main.currentPage == "explore"){
				$("#huntBlocker").css({'display':'none'});
				
					$('.videoTag_Middle').attr('src','');
	$('.videoTag_Middle').get(0).currentTime = 0;
	$('.videoTag_Middle').get(0).pause();
	$('.videoTag_Middle').css({"display":"none"});
					resetFullAct(false);
					game.state.start('title');
					Main.currentPage = "activity";
					bgAudioFun('forestAudio');
					$('#w_holder,#b_holder').css({'display':'block'});
					
					
				}
				
			
			if(getIdSplit == 0)
			{
				Main.bg = 'forestbg';
				Main.top = 'forestleaf';
				$("#huntBlocker").css({'display':'none'});
					if(tempLoaded && Main.visited == 1){
						bgAudioFun('forestAudio');
						resetFullAct(false);
						game.state.start('title');
						Main.visited = getIdSplit;
					}
			}
			else if(getIdSplit == 1)
			{
				Main.bg = 'desertbg';
				Main.top = 'desertleaf';
				$("#huntBlocker").css({'display':'none'});
					if(tempLoaded && Main.visited == 0){
						bgAudioFun('desertAudio');
						resetFullAct(false);
						game.state.start('title');
						Main.visited = getIdSplit;
					}
			}
	}
	if(currentPage == 'activity')
	{
	sliderFunCalled = false;
	audioElement  =  document.getElementById("audioId");
				audioElement.pause();
				audioElement.currentTime=0;
	$(".screenArea").off("click").on("click",screenFun1);
		$('.commonWorkArea').appendTo('#activity');
		$('#activity .commonWorkArea').show();
		$('#labhilightst').css({'display':'none'});
		$('.screenIcon').off('click').css({'cursor':'default','background':'url("assets/images/template/camera_icon.png")'});
		//activityFun();
		if(tempLoaded && Main.currentPage == "activity"){
			$('.videoTag_Middle').attr('src','');
	$('.videoTag_Middle').get(0).currentTime = 0;
	$('.videoTag_Middle').get(0).pause();
	$('.videoTag_Middle').css({"display":"none"});
			$("#huntBlocker").css({'display':'block'});
			resetFullAct(false);
			game.state.start('title');
			Main.currentPage = "explore";
			// bgAudioFun('forestAudio');
			$('#hunt').off('click').html('Hunt').css({"cursor":"default","background":"#929496","color":"#ffffff"});
			Main.audioTempStep = -1;
			Main.activityStep = 0;
			Main.videoPause = false;
			currentStep = 'welcome';
			currentIndex = 0;
			audioIndex = 0;
			stepIndex = 0;
			tempcurrentStep = 0;
			
			
		}
		if(getIdSplit == 0)
		{
			Main.bg = 'forestbg';
			Main.top = 'forestleaf';
			$('.activeSlider').off('click').on("click",activitySlideDiv).css('cursor','pointer');
				if(tempLoaded && Main.visited == 1){
					// bgAudioFun('forestAudio');
					resetFullAct(false);
					game.state.start('title');
					Main.visited = getIdSplit;
				}
		}
		else if(getIdSplit == 1)
		{return;
			
		}
	
	}
	
 }
var bgAudioFun = function(audioName){
	audioElement  =  document.getElementById("audioId");
	audioElement.setAttribute('src', './assets/audio/'+audioName+'.mp3');
	if(audioName == 'desertAudio')
	{
	audioElement.volume = 0.5; 
	}
	else
	{
	audioElement.volume = 0.2; 
	}
	
	audioElement.play(); 
	audioElement.loop = true;
}
