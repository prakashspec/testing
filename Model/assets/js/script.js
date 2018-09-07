var lineCanvas, ctxLine;

$(document).ready(function()
	{
		initialfun();
		loadStart();
		$('.rightlabel1,.rightlabel2').off('click').on('click', toggleExpTabs);
		$('.help2').addClass('rclass');
		$('.activity_title').html(baseConfig.activityTitle);
		$('.expAudio').off('click').on('click', playGlobalAudio);
		$('<audio id="globalAudio"><source src="" type="audio/mp3"/></audio>').appendTo('.container');
		$('.expAudio').attr('audio-state','pause');	
		$('.okbtn').off('click').on('click', MoveToNextStep);
		$('.arrowbtn').off('click').on('click', MoveToNextStep);
		$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
		$('.PreBtnSlider').off('click').on("click",preNavigationFun);
		$(".exploreLabel_2").hide();
		
		lineCanvas = document.getElementById("lineCanvas");
		ctxLine = lineCanvas.getContext("2d");
		$('.videoTag_Middle').on('contextmenu',function() { return false; });
		
		
	});

function loadStart()
	{
		var helpLen1 = Object.keys(info_background).length;
		for(var i=0;i<helpLen1;i++)
			{
				$('<div class="pdivHelp"><img src="'+(templateStateImg.audiopause)+'" /><p class="m20">'+info_background['block'+i].text+'</p></div>').appendTo('.helpBlock1');
			}
		var helpLen2 = Object.keys(info_help).length;
		for(var j=0;j<helpLen2;j++)
			{
				var imgFound = info_help['block'+j].imgText.lastIndexOf('.png');
				if(imgFound != -1)
					{
						$('<div class="pdiv"><img style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><div class="imgContain" style= "width:70px;margin-top:-25px;"><img style="display:block;margin:auto;" src="'+helpimgPath+info_help['block'+j].imgText+'" /></div><p class="m20" style="width:400px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
				else
					{
						$('<div class="pdiv"><img style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><span class="helpDiv1">'+info_help['block'+j].imgText+'</span><p class="m20" style="width:370px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
			}			
				

		$('.helpinner .shadowTop,.helpinner .shadowBottom').remove();			
		scrollApplyChoose('helpinner','helpBlock1');
		//$('#explore').css("top","33px")
		$(".imgContain").css({"margin-top":"-18px","margin-left":"10px"})
	 }


function speechToText(txt)
	{
		var audioMode = $('.screenArea').attr('audio-mode');
		var ctState = (audioMode == "on")?'pause':'play';	
		$('.expAudio').attr('audio-state','play');		
		$('#globalAudio').off('ended').on('ended', callEndFun);	
			
		playGlobalAudio(txt);
	}
var welcomeMove = 0;

function headerTabs(label)
	{	
		prevMove = -1;
		var thisTab = label;
		headerlabel = getIdSplit;
		var ctIndex = Number(thisTab.attr('data-show'));
		var ano = (ctIndex == 1)?2:1;
		imageName = (ctIndex == 1)?"monterey":"amazon";
		$('#'+cpage).find('#'+cpage+'_ch'+ano).removeClass('chheader'+ano).addClass('chheader'+ano+'Act').css('background','#6d6e71').css('color','#fff');
		$('#'+cpage).find('#'+cpage+'_ch'+ctIndex).removeClass('chheader'+ctIndex+'Act').addClass('chheader'+ctIndex).css('background',labelSettings[headerlabel]).css('color','#FFCC00');
		$('.baseImg').remove();		
		/* $('.workArea').prepend('<img class="baseImg" src="'+(imgBase+'welcomebg/'+imageName)+'.png"/>'); */
		var actClass = $('.rightlabel1').hasClass('labelArrow');
		var applyCol = (actClass == true)?1:2;
		$('.rightlabel'+applyCol).css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		globalAudioPause();	
		StateCheck=applyCol-1;
		
		//activityFunction(cpage);
	}
	
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;
var globalAudioName1;
function playGlobalAudio(passText)
	{		
		
		var textPara = typeof passText;		
		var ctElem = (textPara != 'string')?$(this):$('.expAudio');			
		var childWindow = $('iframe').contents();
		var toggleState = ((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))?childWindow.find('.expAudio').attr('audio-state'):ctElem.attr('audio-state');
		
		//alert($(this).parent().attr("class"))
	    // if(animate){
		
    	if($(this).parent().hasClass("act_popup"))
		{
			globalAudioName=expeirmentAudio[acta]
			 //alert("3")
		}
        else
		{
			
			var globalAudioName1=globalAudioName
			
			globalAudioName=globalAudioName1;
		}
		// }		
		if(toggleState == "pause")
			{
				
				if($('.helpwindow').css('display') != 'none')
					{
						var ctString = ($('.helpBlock1').css('display') == 'block')?'info_background':'info_help';
						var getIndex = $(this).parent().index();
						globalAudioName = String(window[ctString]['block'+getIndex]['audio'])
					}
				selectedIndex = $(this).parent().index();						
				if(selectedIndex != defIndex)
					{
						$("#globalAudio").prop('currentTime',0);						
					}
				if($("#globalAudio").prop('currentTime')<=0)
					{	
						var url = "assets/audio/"+ globalAudioName +".mp3";
					}
				$("#globalAudio").attr("src",url).get(0).play();
				$('.expAudio').attr('audio-state','pause').attr('src',templateStateImg.audiopause);
				ctElem.attr('src',templateStateImg.audioplay);
				ctElem.attr('audio-state','play');	
				if(cpage == 'welcome' && ($('.helpwindow').css('display') == 'none'))
					{
						
						childWindow.find('.expAudio').attr('audio-state','play').attr('src',"../../"+templateStateImg.audioplay);		
					
					}
				else
					{
						$('.expAudio').attr('audio-state','pause').attr('src',templateStateImg.audiopause);
						ctElem.attr('src',templateStateImg.audioplay);
						ctElem.attr('audio-state','play');	
					}
				
				defIndex = selectedIndex;
			}
		else
			{
				
				$("#globalAudio").attr("src",url).get(0).pause();
				if((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))
					{						
						childWindow.find('.expAudio').attr('audio-state','pause').attr('src',"../../"+templateStateImg.audiopause);	
						
					}
				else
					{	
						$('.screenArea').attr('audio-mode','off');								
						$("#globalAudio").attr("src",url).get(0).pause();
						$('.expAudio').attr('audio-state','pause');
						ctElem.attr('src',templateStateImg.audiopause);
						ctElem.attr('audio-state','pause');	
						
					}
			}

		$('#globalAudio').off('ended').on('ended', callEndFun);		
	}
	
function globalAudioPause()
	{		
		if((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))
			{
				var childWindow = $('iframe').contents();
				childWindow.find('.expAudio').attr('audio-state','pause').attr('src',"../../"+templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
				prevMove = -1;
				
			}
		else
			{				
				$('.expAudio').attr('audio-state','pause');
				$('.expAudio').attr('src',templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
				prevMove = -1;
			}				
	}

var lastIndex;

	