var MainNavigations=0;	
var baseConfig = {activityTitle:'Variation And Survival'};
var Tabs=["welcome","explore","activity"];
var TopMenuText=["Forest","Desert"];
var rightMenuText=["Food Web","Tropic Game"];
//label background on top
var labelSettings = {
						0:'#313131', //monteryBay background
						1:'#313131'    //Amazon background
					};

//label background on right
var backgroundNcolor=[
						["#150958","#FFCC00"], //monteryBay background
						['#124521','#FFCC00'], //Amazon background
						["#6d6e71","#fff"]     //default Grey background
					 ];
//array for slider okbtn and img show and hide
var SlideStatusArr=[
						["imghide","okhide","sliderhide"],	// welcome
						["imgshow","okhide","sliderhide"],  //explore
						["imghide","okshow","slidershow"]   //activity
				   ]; 			
//imghide  imgshow
// okhide  okshow
// sliderhide slidershow

//array for topmenu rightmenu and base image show and hide
var topNSideMenu=[
					["topmenuhide","rightmenuhide","baseimghide"], //welcome
					["topmenushow","rightmenuhide","baseimghide"], //explore
					["topmenushow","rightmenuhide","baseimghide"]  //activity
				 ]; 
//topmenuhide  topmenushow
// rightmenuhide  rightmenushow
// baseimghide baseimgshow

var templateHdr = {textActive:'#FFF',textNormal:'#fff'};
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;	
var activitytag = true;	
var currentactivity = 0;
var parentTab;
var imgBase = "assets/images/";
var imgBaseAct = "assets/images/activity/";
var helpimgPath = "assets/images/help/";
var imgBaseWelcome = "assets/images/welcomebg/";
var speechBubblePos = 'bubbleDivNone';
var selBubbleLen = 0;
var bubbleStart = 0;
var imgPng = '.png';
var imgJpg = '.jpg';
var ctAttrExp;
var headerlabel = 'monterey';
var exoploreCtBubble = 'anchovy0';
var templateStateImg = {
	audiopause:'assets/images/template/audio_icon_normal.png',
	audioplay:'assets/images/template/audio_icon_play.png',
	leftslideract:'assets/images/template/left_slider_act.png',
	leftsliderdeact:'assets/images/template/left_slider_deact.png',
	rightslideract:'assets/images/template/right_slider_act.png',
	rightsliderdeact:'assets/images/template/right_slider_deact.png',
};
var imageName="monterey";	
var noOfSteps=16;
var currentStep='welcome';
var wrongResPos=0;
var LengthFind=0;
var AudioText,audioIndex=0,stepIndex=0;
var getIdSplit=0;
var StateCheck=0;
var noStepArr=[];
var totalStepArr=[];
var FeedBack="Step";
var activeIcon="explore";
var slideImg="";
var rotateValue=-280;
var angleRot=180;
//incorrect Audio multiple
var incorrectText = [
						
					];
//shell Audio
var FindState=["MonteryBay","AmazonRainForest"];
var FindLevel=["FoodWeb","TropicLevel"];
var SlideContents_explore = {
	"MonteryBay":
	{
		"FoodWeb":
		{
			'welcome':{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid."],[],['Drag the kelp to the correct trophic level in the pyramid.']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid."],[],['Drag the kelp to the correct trophic level in the pyramid.']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid."],[],['Drag the kelp to the correct trophic level in the pyramid.']]
			  }
		}
	}
};

var SlideContents_activity = {

	"MonteryBay":
	{
		"FoodWeb":
		{
			'welcome':{
				'Image':'',
				'AudioText':[["In this guided activity, you will observe a hawk hunting mice in the forest. This environment has dark brown soil and dark plants that help hide the mice.","Do you think the hawk will catch more mice with light fur or dark fur in this environment? Write down your prediction. Then select Hunt to see what happens."],[],['Select Hunt to continue.']],
				"audio":[["vlvasa_01",'vlvasa_02'],[],['vlvasa_03']]//0
			  },
			'play0':{
				'Image':'',
				'AudioText':[[],['The graphs show the mouse population before and after the hunt. Analyze the graphs.<br><br>Which type of mouse was caught more? Why do you think so?','If the remaining mice reproduce, will there be more light or dark mice? Why?<br><br>Write down your answer. Then select Repopulate to find out.'],[],['Select Repopulate to watch the hawk hunt again.']],
				"audio":[[],["vlvasa_04",'vlvasa_05'],[],['vlvasa_06']]//1
			  },
			'play1':{
				'Image':'',
				'AudioText':[[],['The mice have repopulated. Once again, there are 100 total mice. Before, there were 50 of each color, but now there are just 43 light mice compared to 57 dark. Was your prediction correct?','Let\'s watch the hawk hunt again. Do you think it will catch more light or dark mice? Make a prediction. Then select Hunt to continue.'],[],['Select Hunt to continue.']],
				"audio":[[],["vlvasa_07",'vlvasa_08'],[],['vlvasa_09']]//2
			  },
			'play2':{
				'Image':'',
				'AudioText':[[],['Was your prediction right? Analyze the data.<br><br>Which type of mouse had the greatest population before the hunt?','There were more dark mice than light mice before the hunt. But the hawk still caught more light mice than dark. How can you explain this? Write down your answer.','It is time to repopulate the field again. How do you think the mouse population will change this time? Will there be more light mice than before or fewer? Select Repopulate to find out.'],[],['Select Repopulate to continue.']],
				"audio":[[],["vlvasa_10",'vlvasa_11','vlvasa_12'],[],['vlvasa_13']]//2
			  },
			  'play3':{
				'Image':'',
				'AudioText':[[],['Wow! Once again, there are 100 mice. But now only 34 of them have light fur.<br><br>If the hawk hunts again, do you think it will keep catching mostly light mice? Write down your prediction. Then select Hunt one more time.'],[],['Select Hunt to watch the hawk hunt again.']],
				"audio":[[],["vlvasa_14"],[],['vlvasa_15']]//2
			  },
			  'play4':{
				'Image':'',
				'AudioText':[[],['Examine the data for Hunt 3. How is the mouse population changing? Do you notice any patterns?','If the hawk keeps hunting in this forest, what will eventually happen to the light-colored mice? Write down your prediction in your notebook.','You\'ve reached the end of this guided activity. What have you learned about traits and survival? How does a mouse\'s fur color affect its chances for survival? Do you think the results might be different in a different environment?<br><br>Find out now by selecting Explore. There, you can try hunting mice yourself. Try hunting in the forest as well as the desert. Then compare your results. Good luck!'],[],['Select Hunt to watch the hawk hunt again.']],
				"audio":[[],["vlvasa_16",'vlvasa_17','vlvasa_18'],[],['vlvasa_19']]//2
			  },
			
		}
	},
	"AmazonRainForest":
	{
		"FoodWeb":
		{
			
		}
	}
};
//information icon background text
var info_background = {
	'block0':{
			'img':'audio_icon',
			'text':"A <b>trait</b> is any characteristic of an organism. Fur color in mice is an example of a trait.",
			'audio':'vlvasi_01'
		},
	'block1':{
			'img':'audio_icon',
			'text':"Organisms have <b>variations</b> of traits. Variations are differences between individuals of the same type of organism.",
			'audio':'vlvasi_02'
		},
	'block2':{
			'img':'audio_icon',
			'text':"There are variations in fur color in mice. One mouse might have brown fur. Another mouse might have white fur with black spots.",
			'audio':'vlvasi_03'
		},
	'block3':{
			'img':'audio_icon',
			'text':"Traits can help an organism survive in its environment. For example, prickles are a trait in rose plants. Prickles protect the plant from being eaten by animals.",
			'audio':'vlvasi_04'
			},
	'block4':{
			'img':'audio_icon',
			'text':"Some individuals have traits that make them more likely to survive in a certain environment. Suppose you have two rose plants. One rose plant has dull prickles. The other rose plant has sharp prickles. The rose plant with sharp prickles is less likely to be eaten in an environment with predators.",
			'audio':'vlvasi_05'
			},
	'block5':{
			'img':'audio_icon',
			'text':"A trait that helped an animal to survive in one environment may not help it if the environment changes.",
			'audio':'vlvasi_06'
			}	
		};
//information icon help text
var info_help = {
	'block0':{
			'img':'Info_icon',
			'imgText':'Welcome',
			'text':"This mode shows you how to use the lab.",
			'audio':'vlvash_01'
			},	
	'block1':{
			'img':'Info_icon',
			'imgText':'Explore',
			'text':"This mode lets you explore the lab on your own.",
			'audio':'vlvash_02'
			},	
	'block2':{
			'img':'Info_icon',
			'imgText':'Activity',
			'text':"This mode guides you through an activity with step-by-step instructions.",
			'audio':'vlvash_03'
			},
	'block3':{
			'img':'Info_icon',
			'imgText':'info_icon.png',
			'text':"This button provides Background Information and Help.",
			'audio':'vlvash_04'
			},
	'block4':{
			'img':'Info_icon',
			'imgText':'camera_icon.png',
			'text':"This button takes a picture of your screen and saves it on your device.",
			'audio':'vlvash_05'
		}
	};
