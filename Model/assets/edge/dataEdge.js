
	var welcomeMode = {
		'step_0':{
				'bgimg':'step_0',
				'text':'Welcome to Variation and Survival!<br/> In this virtual lab, you will learn that animals have characteristics, or traits, that may vary. Some traits help an animal to survive in its environment. Other traits do not.',
				'speechStyle':'bubbleDivNone',
				'position':[274,210],
				'anim':{},
				'AudioNamecon':['vlvasw_01']
				},
		'step_1':{
				'bgimg':'step_1',
				'text':'You are a hawk, a type of predator. You will use your keen vision to hunt for field mice.',
				'speechStyle':'bubbleDivNone',
				'position':[274,260],
				'anim':{},
				'AudioNamecon':['vlvasw_02']
				},
		'step_2':{
				'bgimg':'step_1',
				'text':'Some of the field mice have dark fur. Others have light fur.',
				'speechStyle':'bubbleDivNone',
				'position':[260,64],
				'anim':{},
				'AudioNamecon':['vlvasw_03']
				},
		'step_3':{
				'bgimg':'step_2',
				'text':'You will hunt in two different environments. One is a forest with dark soil and plants.',
				'speechStyle':'bubbleDivMulti',
				'position':[195,85],
				'anim':{},
				'AudioNamecon':['vlvasw_04']
				},				
		'step_4':{
				'bgimg':'step_1',
				'text':'The other is a desert with light-colored soil and plants.',
				'speechStyle':'bubbleDivMultidouble1',
				'position':[305,85],
				'anim':{							
					'flow0':{'highlight':'yes','type':'cursor','from':[480,250],'to':[850,100],'toAnim':'animlabel1','bgChange':'step_4','defShow':'no'}
				},
				'AudioNamecon':['vlvasw_05']
				},		
		'step_5':{
				'bgimg':'step_4',
				'text':'Each hunt starts with a total population of 100 mice.',
				'speechStyle':'bubbleDivBottom1',
				'position':[417,365],
				'anim':{
					'flow0':{'type':'cursor','from':[850,100],'to':[850,50],'toAnim':'animlabel1','bgChange':'step_1','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble'}
				},
				'AudioNamecon':['vlvasw_06']
				},		
		'step_6':{
				'bgimg':'step_1',
				'text':'Select Hunt to begin hunting. Click or tap on a mouse to catch it. Catch as many mice as you can before the timer runs out!',
				'speechStyle':'bubbleDivBottom2',
				'position':[58,362],
				'anim':{
					'flow0':{'type':'cursor','from':[850,50],'to':[500,450],'toAnim':'animlabel1','bgChange':'step_3','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble','highlight':'no'}
				},
				'AudioNamecon':['vlvasw_07']
				},	
		'step_7':{
				'bgimg':'step_1',
				'text':'After the hunt, study the data to see how the mouse population has changed.',
				'speechStyle':'bubbleDivNone',
				'position':[273,22],
				'anim':{},
				'AudioNamecon':['vlvasw_08']
				},
		'step_8':{
				'bgimg':'step_4',
				'text':"When you are ready, you can repopulate the field. The mice you did not catch will reproduce until their total population reaches 100 again.",
				'speechStyle':'bubbleDivBottom3',
				'position':[40,320],
				'anim':{},
				'AudioNamecon':['vlvasw_09']
				},			
		'step_9':{
				'bgimg':'step_5',
				'text':'However, there may no longer be equal numbers of light and dark mice. Their populations will change depending on which type of mouse you catch more of.',
				'speechStyle':'bubbleDivBottom1',
				'position':[410,314],
				'anim':{
					'flow0':{'highlight':'yes','type':'kelp','from':[140,120],'to':[706,388],'toAnim':'','bgChange':'','defShow':'yes'}				
				},
				'AudioNamecon':['vlvasw_10']
				},
		'step_10':{
				'bgimg':'step_6',
				'text':'Continue hunting and repopulating the field to see how the mouse population changes over time. Try hunting in both environments to compare your results.',
				'speechStyle':'bubbleDivNone',
				'position':[278,61],
				'anim':{},
				'AudioNamecon':['vlvasw_11']
				},			
		'step_11':{
				'bgimg':'step_7',
				'text':'When you’re ready to begin, select Explore or Activity. Or go to Information to learn more about traits, variation, and survival.',
				'speechStyle':'bubbleDivNone',
				'position':[538,30],
				'anim':{},
				'AudioNamecon':['vlvasw_12']
				}
		/*'step_12':{
				'bgimg':'step_6',
				'text':'When you have finished, select Reset so that you can try another change to energy values.',
				'speechStyle':'bubbleDivBottom',
				'position':[10,385],
				'anim':{}
				},
		'step_13':{
				'bgimg':'step_1',
				'text':'Select Explore to begin the lab, or select Activity to complete a guided exploration. At any time during the lab, you can select the Information icon to learn more about trophic levels. Good luck!',
				'speechStyle':'bubbleDivTopCustom',
				'position':[487,30],
				'anim':{}
				},*/		
		};
var weltextlen = Number(Object.keys(welcomeMode).length);
var animPlayArr = [0,2000,20000,38000,40000,47000,57000,72000,85000,95000,107000,117000];
var animPlayArrRev = [0,2500,20500,38500,40500,47500,57500,72500,85500,95500,107500,117000];

var welcomeMove = 0;
var speechBubblePos = 'bubbleDivNone';