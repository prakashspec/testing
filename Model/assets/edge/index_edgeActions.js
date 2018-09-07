var intTime=30,timeInterval;
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){


Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){
	parent.adobeReady = true;
	
	$('#Stage_welText').html(welcomeMode['step_0']['text']);
	$('#Stage_welcomeGroup').css('min-height','102px').css('background','#fff').css('box-shadow','1px 1px 2px 1px rgba(0,0,0,0.25)');
	$('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
	$('#Stage_dot_nav').css('top','auto').css('bottom','6px');
	$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
	var lpos=welcomeMode['step_'+welcomeMove].position[0];
	var tpos=welcomeMode['step_'+welcomeMove].position[1];
	$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
	$('#Stage_left_slider_act').css('cursor','default');
	$('#Stage_audio_icon_normal').attr('audio-state','pause');
	$('#Stage_audio_icon_normal').addClass('expAudio');
$('#Stage_videoDiv').append('<video source src="./../video/rat.mp4" poster="images/bg_1.png" width="924px" height="554px" type="video/mp4"></video>');
this.play(0);
});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37250, function(sym,e){this.stop()});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46250, function(sym,e){this.stop()});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39115, function(sym,e){this.stop()});
//Edge binding end




Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym,e){this.stop()});
//Edge binding end






      

      
Symbol.bindElementAction(compId, symbolName, "${_left_slider_act}", "click", function(sym,e){
	if(welcomeMove>0)
	{
		selectedIndex=0;
		welcomeMove--;
		$('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
		if(welcomeMove==7)
			{
				$('#Stage_rabbit_update_1').css('background-image','url(images/rabbit_update_1.png)');
			}
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);
		$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArrRev[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
if(welcomeMove==0)
	{
		$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png').css('cursor','default');
	}
		
});
      //Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_right_slider_act}", "click", function(sym,e){
	if(welcomeMove<(weltextlen-1))
	{
		selectedIndex=0;
		welcomeMove++;
		$('#Stage_left_slider_act').attr('src','images/left_slider_act.png').css('cursor','pointer');		
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArr[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
	if(welcomeMove==(weltextlen-1))
	{
		$('#Stage_right_slider_act').attr('src','images/right_slider_deact.png').css('cursor','default');
	}
	});
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_audio_icon_normal}", "click", function(sym,e){
		  passText=$('#Stage_welText').text();
		  parent.globalAudioName = welcomeMode['step_'+welcomeMove]['AudioNamecon'].toString();	
		  parent.playGlobalAudio(passText);
		});
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
//var video = document.getElementsByTagName("video")[0];
//console.log(video.currentTime);
var vid = document.getElementsByTagName("video")[0];
ct=vid.currentTime;
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55425, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         $('.bubbleDivMulti::after').css('display','none');
         $('#Stage_Symbol_blkrat').css('display','block');
         $('#Stage_Symbol_whiterat').css('display','block');
         $('#Stage_Symbol_1').css('display','block');
         $('#Stage_videoDiv').css('display','block')
         sym.getSymbol("Symbol_blkrat").stop(5473);
         sym.getSymbol("Symbol_whiterat").stop(5473);
         sym.getSymbol("Symbol_1").stop(0);
         $('video').prop('currentTime',ct);
         $('video').trigger('pause');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 94250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 106250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 116250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 118322, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         $('video').trigger('play');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         $('video').prop('currentTime',0);
         $('video').trigger('pause');
         $('#Stage_videoDiv').css('display','block')
         $('#Stage_Symbol_whiterat_white_high').css('display','none');
         $('#Stage_Symbol_blkrat_black_high').css('display','none');
         $('#Stage_Symbol_whiterat').css('transform','scale(0.8)');
         $('#Stage_Symbol_blkrat').css('transform','scale(0.8)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         $('video').trigger('pause');
         $('#Stage_videoDiv').css('display','none')
			$('#hunt').html('Hunt');
	$('#resetGameCanvas').css({"background":"rgb(146, 148, 150)","color":"rgb(255, 255, 255)"})
			window.clearInterval(timeInterval);
			window.clearInterval(timeInt);
			window.clearInterval(tiInt);
			$('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');
         $('#w_holder #wtotal').text('50');
         $('#b_holder #btotal').text('50');
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.getSymbol("Symbol_1").stop(0);
         $('video').trigger('pause');
         sym.getSymbol("Symbol_blkrat").stop();
         sym.getSymbol("Symbol_whiterat").stop();
         var video = document.getElementsByTagName("video")[0];
         //console.log(video.currentTime);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         $('#Stage_Symbol_blkrat').css('display','block');
         $('#Stage_Symbol_whiterat').css('display','block');
         $('#Stage_Symbol_1').css('display','block');
         sym.getSymbol("Symbol_blkrat").stop(5473);
         sym.getSymbol("Symbol_whiterat").stop(5473);
         sym.getSymbol("Symbol_1").stop(0);
         $('#Stage_videoDiv').css('display','block')
         $('video').prop('currentTime',ct);
         $('video').trigger('pause');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.getSymbol("Symbol_blkrat").play(5473);
         
         sym.getSymbol("Symbol_whiterat").play(5473);
         sym.getSymbol("Symbol_1").play(0);
         $('video').prop('currentTime',ct);
         $('video').trigger('play');
         $('#Stage_Symbol_whiterat_white_high').css('display','block');
         $('#Stage_Symbol_blkrat_black_high').css('display','block');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26500, function(sym, e) {
         sym.getSymbol("Symbol_whiterat").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27750, function(sym, e) {
         $('#Stage_Symbol_whiterat').css('display','none');
         $('#w_holder #wkilled').text('1');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27500, function(sym, e) {
         sym.getSymbol("Symbol_1").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         sym.getSymbol("Symbol_blkrat").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35250, function(sym, e) {
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#b_holder #bkilled').text('1');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym, e) {
         sym.getSymbol("Symbol_1").stop(0);
         
         $('video').trigger('pause');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         $('#Stage_videoDiv').css('display','none');
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#Stage_Symbol_whiterat').css('display','none');
         $('#Stage_Symbol_1').css('display','none');
         $("#wel_ch1").removeClass("chheader1Act").addClass("chheader1").css("background","rgb(49, 49, 49)")
         $("#wel_ch2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")
         $('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         $('#Stage_videoDiv').css('display','none');
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#Stage_Symbol_whiterat').css('display','none');
         $('#Stage_Symbol_1').css('display','none');
         $("#wel_ch1").removeClass("chheader1Act").addClass("chheader1").css("background","rgb(49, 49, 49)")
         $("#wel_ch2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")
         $('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         $('#Stage_videoDiv').css('display','none');
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#Stage_Symbol_whiterat').css('display','none');
         $('#Stage_Symbol_1').css('display','none');
         $("#wel_ch1").removeClass("chheader1Act").addClass("chheader1").css("background","rgb(49, 49, 49)")
         $("#wel_ch2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40500, function(sym, e) {
         $('#Stage_videoDiv').css('display','none');
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#Stage_Symbol_whiterat').css('display','none');
         $('#Stage_Symbol_1').css('display','none');
         $("#wel_ch1").removeClass("chheader1Act").addClass("chheader1").css("background","rgb(49, 49, 49)")
         $("#wel_ch2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43000, function(sym, e) {
         $("#wel_ch1").removeClass("chheader1").addClass("chheader1Act").css("background","#6D6E70")
         $("#wel_ch2").removeClass("chheader2Act").addClass("chheader2").css("background","rgb(49, 49, 49)")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47000, function(sym, e) {
         $('video').prop('currentTime',0);
         sym.getSymbol("Symbol_blkrat").stop(0);
         sym.getSymbol("Symbol_whiterat").stop(0);
         
         
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#Stage_Symbol_whiterat').css('display','none');
         $('#Stage_Symbol_1').css('display','none');
         $("#wel_ch1").removeClass("chheader1").addClass("chheader1Act").css("background","#6D6E70")
         $("#wel_ch2").removeClass("chheader2Act").addClass("chheader2").css("background","rgb(49, 49, 49)")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47500, function(sym, e) {
         $('video').prop('currentTime',0);
         sym.getSymbol("Symbol_blkrat").stop(0);
         sym.getSymbol("Symbol_whiterat").stop(0);
         $('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');
         var intTime=30;
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#Stage_Symbol_whiterat').css('display','none');
         $('#Stage_Symbol_1').css('display','none');
         $("#wel_ch1").removeClass("chheader1").addClass("chheader1Act").css("background","#6D6E70")
         $("#wel_ch2").removeClass("chheader2Act").addClass("chheader2").css("background","rgb(49, 49, 49)")
         $('#hunt').html('Hunt');
         window.clearInterval(timeInterval);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51750, function(sym, e) {
         $("#wel_ch1").removeClass("chheader1Act").addClass("chheader1").css("background","rgb(49, 49, 49)")
         $("#wel_ch2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60500, function(sym, e) {
         var intTime=30;
         $('#hunt').html('Time: 00:<span id="tier">30</span>').css({"cursor":"default"});
         timeInterval = window.setInterval(function(){
         intTime--;
         $('#hunt span').text(intTime);
         },1000);
         
         $('video').trigger('play');
         $('#Stage_videoDiv').css('display','block')
         $('#Stage_Symbol_whiterat_white_high').css('display','none');
         $('#Stage_Symbol_blkrat_black_high').css('display','none');
         $('#Stage_Symbol_1').css('display','block');
         sym.getSymbol("Symbol_1").play(0);
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Text").html("NewText");
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 62000, function(sym, e) {
         sym.getSymbol("Symbol_blkrat").play(0);
         sym.getSymbol("Symbol_whiterat").play(0);
         $('#Stage_Symbol_blkrat').css('display','block');
         $('#Stage_Symbol_whiterat').css('display','block');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57000, function(sym, e) {
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#Stage_Symbol_whiterat').css('display','none');
         $('video').prop('currentTime',0);
         $("#wel_ch1").removeClass("chheader1Act").addClass("chheader1").css("background","rgb(49, 49, 49)")
         $("#wel_ch2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")
         $('#Stage_Symbol_1').css('display','none');
         $('video').prop('currentTime',0);
         $('video').trigger('pause');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 64000, function(sym, e) {
         sym.getSymbol("Symbol_whiterat").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 67500, function(sym, e) {
         sym.getSymbol("Symbol_blkrat").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71000, function(sym, e) {
         $('video').trigger('pause');
         sym.getSymbol("Symbol_1").stop(0);
         window.clearInterval(timeInterval);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72500, function(sym, e) {
         window.clearInterval(timeInterval);
         var intTi=2;
         $('#hunt').html('Time: 00:<span id="tier">02</span>').css({"cursor":"default"});
         timeInt = window.setInterval(function(){
         intTi--;
         $('#hunt span').text('0'+intTi);
         },1000);
         $('video').prop('currentTime',10);
         $('video').trigger('play');
         sym.getSymbol("Symbol_1").play(0);
         $('#w_holder #wkilled').text('8');
         $('#b_holder #bkilled').text('12');
         $('#w_holder #wtotal').text('50');
         $('#b_holder #btotal').text('50');
         $('#hunt').css({"background":"#ffcc00","color":"#000000"})
         $('#resetGameCanvas').css({"background":"rgb(146, 148, 150)","color":"rgb(255, 255, 255)"})
         $('#hunt').css({"background":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"})
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","block");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88750, function(sym, e) {
         $('#hunt,#resetGameCanvas').css({"background":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"})
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 85500, function(sym, e) {
         $('#hunt,#resetGameCanvas').css({"background":"rgb(146, 148, 150)","color":"rgb(255, 255, 255)"})
         window.clearInterval(timeInt);
         $('#hunt').html("Repopulate");
         $('video').trigger('pause');
         $("#Stage_videoDiv").css("display","block");
         $('#w_holder #wkilled').text('8');
         $('#b_holder #bkilled').text('12');
         $('#w_holder #wtotal').text('50');
         $('#b_holder #btotal').text('40');
         sym.getSymbol("Symbol_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 85000, function(sym, e) {
         $('#hunt,#resetGameCanvas').css({"background":"rgb(146, 148, 150)","color":"rgb(255, 255, 255)"})
         sym.getSymbol("Symbol_1").stop(0);
         window.clearInterval(timeInt);
         $('#hunt').html("Repopulate");
         $('video').trigger('pause');
         $("#Stage_videoDiv").css("display","block");
         $('#w_holder #wkilled').text('8');
         $('#b_holder #bkilled').text('12');
         $('#w_holder #wtotal').text('50');
         $('#b_holder #btotal').text('40');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         $('#hunt').css({"background":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"})
         $('#w_holder #wkilled').text('8');
         $('#b_holder #bkilled').text('12');
         $('#w_holder #wtotal').text('50');
         $('#b_holder #btotal').text('50');
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","block");
         window.clearInterval(timeInterval);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91500, function(sym, e) {
         $('#hunt').html("Hunt");
         $('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');
         $('#w_holder #wtotal').text('53');
         $('#b_holder #btotal').text('47');
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","none");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 95000, function(sym, e) {
         $('#hunt').html("Hunt");
         $('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');
         $('#w_holder #wtotal').text('53');
         $('#b_holder #btotal').text('47');
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","none");
         $('#hunt,#resetGameCanvas').css({"background":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"})

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 95500, function(sym, e) {
         $('#hunt').html("Hunt");
         $('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');
         $('#w_holder #wtotal').text('53');
         $('#b_holder #btotal').text('47');
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","none");
         $('#hunt,#resetGameCanvas').css({"background":"rgb(255, 204, 0)","color":"rgb(0, 0, 0)"})
         $('#hunt').html('Hunt');
         window.clearInterval(tiInt);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 107000, function(sym, e) {
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","block");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75500, function(sym, e) {
         $('#hunt,#resetGameCanvas').css({"background":"rgb(146, 148, 150)","color":"rgb(255, 255, 255)"})
         sym.getSymbol("Symbol_1").stop(0);
         window.clearInterval(timeInt);
         $('#hunt').html("Repopulate");
         $('video').trigger('pause');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 110500, function(sym, e) {
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","block");
         $('video').trigger('play');
         sym.getSymbol("Symbol_1").play(0);
         
         var inTi=30;
         $('#hunt').html('Time: 00:<span id="tier">30</span>').css({"cursor":"default"});
         tiInt = window.setInterval(function(){
         inTi--;
         $('#hunt span').text(+inTi);
         },1000);
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 109000, function(sym, e) {
         $('video').prop('currentTime',0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 117000, function(sym, e) {
         $('#hunt').html('Time: 00:<span id="tier">25</span>').css({"cursor":"default"});
         window.clearInterval(tiInt);
         $('video').trigger('pause');
         sym.getSymbol("Symbol_1").stop(0);
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","block");
         $('video').prop('currentTime',ct);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 116000, function(sym, e) {
         window.clearInterval(tiInt);
         $('video').trigger('pause');
         sym.getSymbol("Symbol_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 107500, function(sym, e) {
         $('#hunt').html('Hunt');
         $("#Stage_videoDiv, #Stage_Symbol_1").css("display","block");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 65000, function(sym, e) {
         $('#w_holder #wkilled').text('1');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 68750, function(sym, e) {
         $('#b_holder #bkilled').text('1');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57500, function(sym, e) {
         window.clearInterval(timeInt);
         $('#w_holder #wkilled').text('0');
         $('#b_holder #bkilled').text('0');
         $('#w_holder #wtotal').text('50');
         $('#b_holder #btotal').text('50');
         $('#hunt').css({"background":"#ffcc00","color":"#000000"}).html('Hunt');
         $("#wel_ch1").removeClass("chheader1Act").addClass("chheader1").css("background","rgb(49, 49, 49)")
         $("#wel_ch2").removeClass("chheader2").addClass("chheader2Act").css("background","#6D6E70")
         $('video').prop('currentTime',0);
         $('video').trigger('pause');
         $('#Stage_Symbol_blkrat').css('display','none');
         $('#Stage_Symbol_whiterat').css('display','none');
         $('#Stage_Symbol_1').css('display','none');

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'highAnim'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym,e){this.play(0)});
//Edge binding end
})("highAnim");
   //Edge symbol end:'highAnim'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3020, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_blkrat'
   (function(symbolName) {   
   
   })("Symbol_blkrat");
   //Edge symbol end:'Symbol_blkrat'

   //=========================================================
   
   //Edge symbol: 'Symbol_whiterat'
   (function(symbolName) {   
   
   })("Symbol_whiterat");
   //Edge symbol end:'Symbol_whiterat'

   //=========================================================
   
   //Edge symbol: 'Symbol_blkhigh'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         this.play(0);

      });
      //Edge binding end

   })("Symbol_blkhigh");
   //Edge symbol end:'Symbol_blkhigh'

   //=========================================================
   
   //Edge symbol: 'Symbol_whithigh'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         this.play(0);

      });
      //Edge binding end

   })("Symbol_whithigh");
   //Edge symbol end:'Symbol_whithigh'

})(jQuery, AdobeEdge, "EDGE-1817669");

$(document).ready(function(){	
	$(document).on('keyup', function(e){	
	if($('#Stage_welcomeGroup').css('opacity') == 1)		
	{
		//console.log(parent.parentTab,$('.helpwindow').css('display'))
		if(parent.parentTab == 'welcome' && parent.$('.helpwindow').css('display') == 'none')
			{			
				var ctKeyode = e.which || e.keyCode;			
				if(ctKeyode == 39)
					{
						$('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('#Stage_left_slider_act').trigger('click');
					}
			}
	}	
	})	
})