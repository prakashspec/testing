var timerArr = [50,55,60,65,70,75];
var timerInterval,initTime = 30,timeStarted = false;
Main.title = function(){}
Main.title.prototype = {
create:function(){
this.levelGroup = game.add.group();
this.bg = game.add.sprite(0,0,Main.bg);
this.bgTop = game.add.sprite(0,0,Main.top);
tempLoaded = true;

	
	
	this.levelGroup.add(this.bg);	
	this.levelGroup.add(this.bgTop);
}
}


Main.activityforest = function(){}
Main.activityforest.prototype = {
create:function(){
this.levelGroup = game.add.group();
this.bg = game.add.sprite(0,0,Main.bg);
this.bgTop = game.add.sprite(0,0,Main.top);
this.hawkSound = game.add.audio('hawkAudio',0.5,false);
this.hawkSound.volume = 0.5;
this.hawkSound.play();
	
	
	this.levelGroup.add(this.bg);	
	this.levelGroup.add(this.bgTop);
}
}


Main.forest = function(){}

Main.forest.prototype = {
    create:function(){
	this.levelGroup = game.add.group();
	// if(Main.bg == 'forestbg')
	// {
	// this.bgmusic = game.add.audio('forestAudio',0.5,true);
    // this.bgmusic.play();
	// }
	// else if(Main.bg == 'desertbg')
	// {
	// this.bgmusic = game.add.audio('desertAudio',0.5,true);
    // this.bgmusic.play();
	// }
	
	
	this.hawkSound = game.add.audio('hawkAudio',0.5,false);
	this.hawkSound.volume = 0.5;
    this.hawkSound.play();
	
	
	this.bg = game.add.sprite(0,0,Main.bg);
	this.bgTop = game.add.sprite(0,0,Main.top);
	this.bgTop.inputEnabled = true;
	this.bgTop.input.pixelPerfectClick = true;
	// this.bgTop.input.useHandCursor = true;
	
	this.levelGroup.add(this.bg);	
	this.eagle = game.add.sprite(game.world.centerX,game.world.centerY,'eagle');
	this.eagle.anchor.setTo(0.5);
	// this.eagle.rotation = 280;
	this.eagle.animations.add('fly',[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], 100, true);
	
	
	this.eagle.animations.add('lookLeft',[38,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70], 100, false);
	
	this.eMove = this.eagle.animations.add('flymove',[29,30,31,32,33,34,35], 100, false);
	
	
	this.eL = this.eagle.animations.add('lookRight',[71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98], 100, false);
	this.eL.onComplete.add(function(){
	this.eagle.animations.play('flymove');
	},this)
	
	
	this.eagle.scale.setTo(1)
	this.eagle.animations.play('fly');
	 
	this.ratGroup = game.add.group();
    

	
	if(Main.li>=10)
	{
	for(var i=1; i<=10; i++){
	this.createRat(i);
	}
	}
	else
	{
	for(var i=1; i<=Main.li; i++){
	this.createRat(i);
	}
	}
	
	
	
	if(Main.di>=10)
	{
	for(var i=11; i<=20; i++){
	this.createRat2(i);
	}
	}
	else
	{
	for(var i=1; i<=Main.di; i++){
	this.rare = i+10;
	this.createRat2(this.rare);
	}
	}
	
	
	
	Main.lc = 0;
	Main.dc = 0;
	
	$('#wkilled').text(Main.lc);
	$('#bkilled').text(Main.dc);
	
	$('#wtotal').text(Main.li);
	$('#btotal').text(Main.di);
	
	
	this.blockerGroup = game.add.group();
	
	this.levelGroup.add(this.ratGroup);
	this.levelGroup.add(this.bgTop);
	this.levelGroup.add(this.blockerGroup)
	
	
},

plot: function (n) {
            this['path'+n] = [];
			var ix = 0;
            var x = 1 / game.width;

            for (var i = 0; i <= 1; i += x)
            {
                    var px = this.math.catmullRomInterpolation(this['points'+n].x, i);
                    var py = this.math.catmullRomInterpolation(this['points'+n].y, i);
                
					var node = { x: px, y: py, angle: 0 };

                if (ix > 0)
                {
                    node.angle = this.math.angleBetweenPoints(this['path'+n][ix - 1], node);
                }

                this['path'+n].push(node);

                ix++;
            }

            

        },
createRat:function(n){
        this['rat'+n] = game.add.sprite(-100,-100,'brat');
        this['rat'+n].anchor.setTo(0.5);
		this['rat'+n].id = n;
		this['rat'+n].inputEnabled = true;
		this['rat'+n].events.onInputDown.add(this.listener, this);
		this['rat'+n].animations.add('walk');
		this['rat'+n].animations.play('walk', 85, true);
        
		var rnd = this.rnd.integerInRange(0, 10);
		var rnd2 = this.rnd.integerInRange(0, 10);
		if(rnd%2==0 && rnd2%2==0){
		this['rat'+n].scale.setTo(0.8);
		}
		else if(rnd%2==0)
		{
		this['rat'+n].scale.setTo(0.8);
		}
		else
		{
		this['rat'+n].scale.setTo(0.8);
		}
		
		this.ratGroup.add(this['rat'+n]);
		
		this['points'+n] = {'x':[],'y':[]}
	this.pushPoints(n);
	this['pi'+n] = 0;
	this['path'+n] = [];	
	this.plot(n);
	this['goarr'+n] = game.time.events.loop(timerArr[this.rnd.integerInRange(0, 5)], this['updateCounter'+n], this,n);
},
createRat2:function(n){
        this['rat'+n] = game.add.sprite(-100,-100,'brat2');
        this['rat'+n].anchor.setTo(0.5);
		this['rat'+n].id = n;
		this['rat'+n].inputEnabled = true;
		this['rat'+n].events.onInputDown.add(this.listener, this);
		this['rat'+n].animations.add('walk');
		this['rat'+n].animations.play('walk', 85, true);
        
		var rnd = this.rnd.integerInRange(0, 10);
		var rnd2 = this.rnd.integerInRange(0, 10);
		if(rnd%2==0 && rnd2%2==0){
		this['rat'+n].scale.setTo(0.8);
		}
		else if(rnd%2==0)
		{
		this['rat'+n].scale.setTo(0.8);
		}
		else
		{
		this['rat'+n].scale.setTo(0.8);
		}
		
		
		
		
		this.ratGroup.add(this['rat'+n]);
		
		this['points'+n] = {'x':[],'y':[]}
	this.pushPoints(n);
	this['pi'+n] = 0;
	this['path'+n] = [];	
	this.plot(n);
	this['goarr'+n] = game.time.events.loop(timerArr[this.rnd.integerInRange(0, 5)], this['updateCounter'+n], this,n);
},
pushPoints:function(n){
this['points'+n].x.push(this.rnd.integerInRange(0, 20));
this['points'+n].y.push(this.rnd.integerInRange(50, 400));
for(var i=1; i<=this.rnd.integerInRange(10, 20); i++)
		{
		this['points'+n].x.push(this.rnd.integerInRange(0, 800))
		this['points'+n].y.push(this.rnd.integerInRange(0, 400))
		}
},
pushPointsEagle:function(n,r){
this['points'+n].x.push(game.world.centerX);
this['points'+n].y.push(game.world.centerY);
// this['points'+n].x.push(255);
// this['points'+n].y.push(255);
this['points'+n].x.push(this['rat'+r].x);
this['points'+n].y.push(this['rat'+r].y);
// for(var i=1; i<=this.rnd.integerInRange(10, 20); i++)
		// {
		// this['points'+n].x.push(this.rnd.integerInRange(0, 800))
		// this['points'+n].y.push(this.rnd.integerInRange(0, 400))
		// }
},
listener:function(rat){
// this.hawkSound.play();
this.blocker = game.add.graphics(0, 0);
	this.blocker.beginFill(0xFF700B, 0);
	this.blocker.drawRect(0, 0, 924, 554);
	this.blocker.inputEnabled = true;
	this.blocker.alpha = 1;
	this.blockerGroup.add(this.blocker);
	
game.time.events.remove(this['goarr'+rat.id]);
this.tempId = rat.id;
this['rat'+rat.id].animations.stop(null, true);
this.eagle.animations.play('flymove');
//Second Type Of Animation
this.pi50 = 0;
this.eagle.scale.setTo(1);
this.flag = true;
this.points50 = {'x':[],'y':[]}
this.points50.x[0] = this.eagle.x;
this.points50.y[0] = this.eagle.y;
this.points50.x[2] = this['rat'+this.tempId].x;
this.points50.y[2] = this['rat'+this.tempId].y;





		
		var angleDeg = Math.atan2(this.points50.y[0] - this.points50.y[2], this.points50.x[0] - this.points50.x[2]) * 180 / Math.PI;
		angleDeg = angleDeg+90;
		
		
		this.points50.x[1] = (this.points50.x[0]+this.points50.x[2])/2
		this.points50.y[1] = (this.points50.y[0]+this.points50.y[2])/2
		
		var a = this.points50.x[0] - this.points50.x[2];
		var b = this.points50.y[0] - this.points50.y[2];
		
		var c = Math.sqrt( a*a + b*b );
		
		
		
		this.points50.x[1] = Math.abs(this.points50.x[1]) + c/2 * (Math.cos(angleDeg* Math.PI/180));
		this.points50.y[1] = Math.abs(this.points50.y[1]) + c/2 * (Math.sin(angleDeg* Math.PI/180));






this.eaglePlot();
this.Etween = game.time.events.loop(1, this['updateCounter50'], this,50);




},
removeRat:function(){
this.blockerGroup.remove(this.blocker);
game.time.events.remove(this.Etween);
this.eagle.animations.play('fly');

this.ratGroup.remove(this['rat'+this.tempId]);
if(this.tempId<=10 && Main.lc<=50)
{
Main.lc++;


var wRlimit = Main.lc+10;
if(Main.li>=wRlimit){
this.createRat(this.tempId);
}
}
else if(this.tempId>10 && Main.dc<=50)
{
Main.dc++;

var bRlimit = Main.dc+10;
if(Main.di>=bRlimit){
this.createRat2(this.tempId);
}
}
$('#wkilled').text(Main.lc);
$('#bkilled').text(Main.dc);

Main.lf = Main.li-Main.lc;
Main.df = Main.di-Main.dc;
Main.tf = 100-(Main.dc+Main.lc);



},

}

game.state.add('title', Main.title);

game.state.add('forest', Main.forest);
game.state.add('activityforest', Main.activityforest);
$(function(){
$('#hunt').off('click').on('click',beginHunt);

})

var beginHunt = function(){
$('#labhilightst').css({'display':'none'});
$(".screenArea").off("click");
if(cpage == "activity")
{

$('#w_holder,#b_holder').css({'display':'none'});

playVideo('act1_14-2');
SliderOkClick("close");
$('.activeSlider').off('click').css('cursor','default');
}
else
{
game.state.start('forest');
startGame();
}


}
var startGame = function(){
$('#hunt').off('click');
$('#resetGameCanvas').off('click').css({'background':'#929496','color':'#ffffff','cursor':'default'});
$('#hunt').html('Time: 00:<span id="timer">30</span>').css({"cursor":"default"});
startTimerFun();
}
var startTimerFun = function(){
timeStarted = true;
timerInterval = setInterval(startTimer,1000);
}
var startTimer = function(){
initTime--;

if(initTime == 0)
{
$('.activeSlider').off('click').on("click",activitySlideDiv).css('cursor','pointer');
Main.audioTempStep++;
currentStep='play'+Main.audioTempStep;
tempcurrentStep = 0;
rightAttemptFun();

timeStarted = false;
window.clearInterval(timerInterval);
if(cpage == 'activity'){
$(".screenArea").off("click").on("click",screenFun1);
$('#canvasContainer').css({'display':'block'});
}
else if(cpage =="explore")
{
$(".screenArea").off("click");
$('#canvasContainer').css({'display':'block'});
}
$('#cclose').off('click').on('click',function(){
$('#canvasContainer').css({'display':'none'});
Main.li = Math.round((Main.lf/Main.tf)*100);
Main.di = Math.round((Main.df/Main.tf)*100);
checkTotal(Main.li,Main.di);

if(cpage == 'explore'){
$('#resetGameCanvas').css({'background':'#ffcc00','color':'#000000','cursor':'pointer'});
$('#resetGameCanvas').off('click').on('click',function(){
resetFullAct(true)
});

$('#hunt').html('Repopulate').css({"cursor":"pointer","background":"#ffcc00","color":"#000000"}).off('click').on('click',repopulateFun);

}
})
Main.lf = Main.li-Main.lc;
Main.df = Main.di-Main.dc;
Main.tf = 100-(Main.dc+Main.lc);
if(cpage == 'activity' && Main.activityStep == 0)
{
$("#huntBlocker").css({'display':'block'});
Main.lc = 14;
Main.dc = 2;
Main.lf = 36;
Main.df = 48;
}
else if(cpage == 'activity' && Main.activityStep == 1)
{
$("#huntBlocker").css({'display':'block'});
Main.lc = 15;
Main.dc = 2;
Main.lf = 28;
Main.df = 55;
}
else if(cpage == 'activity' && Main.activityStep == 2)
{
$("#huntBlocker").css({'display':'block'});
Main.lc = 10;
Main.dc = 4;
Main.lf = 24;
Main.df = 62;
}
drawCanvas();
drawCanvas2();
$('#hunt').html('Repopulate').css({"cursor":"default","background":"#929496","color":"#ffffff"});
if(cpage == 'explore')
{
game.paused = true;
}
}

if(initTime<10)
{
$('#hunt span').text('0'+initTime);
}
else if(initTime>=0)
{
$('#hunt span').text(initTime);
}
}

function checkTotal(s1,s2){
if(s1+s2 == 100)
{

}
else
{
if(s1>s2)
{
Main.di = s2-1;
}
else
{
Main.li = s1-1;
}
}
}

var repopulateFun = function(){
tempcurrentStep = 0;
$('#labhilightst').css({'display':'none'});
game.paused = false;
game.state.start('title');


Main.activityStep++;
Main.audioTempStep++;
currentStep='play'+Main.audioTempStep;
rightAttemptFun();
$('#canvasContainer').css({'display':'none'});
	$('#wkilled').text(0);
	$('#bkilled').text(0);
	if(cpage == 'activity' && Main.activityStep == 1)
		{
		$("#huntBlocker").css({'display':'block'});
		Main.li = 43;
		Main.di = 57;
		$('.videoTag_Middle').attr('src','');
		$('.videoTag_Middle').get(0).currentTime = 0;
		$('.videoTag_Middle').get(0).pause();
		$('.videoTag_Middle').css({"display":"none"});
		}
		else if(cpage == 'activity' && Main.activityStep == 2)
		{
		$("#huntBlocker").css({'display':'none'});
		Main.li = 34;
		Main.di = 66;
		$('.videoTag_Middle').attr('src','');
		$('.videoTag_Middle').get(0).currentTime = 0;
		$('.videoTag_Middle').get(0).pause();
		$('.videoTag_Middle').css({"display":"none"});
		}
		
	$('#wtotal').text(Main.li);
	$('#btotal').text(Main.di);
	$('#w_holder,#b_holder').css({'display':'block'});
	
	if(cpage == 'explore'){
	$('#hunt').html('Hunt').css({"cursor":"pointer"}).off('click').on('click',reHuntFun);
	}
	else if(cpage == 'activity')
	{
				

				if(currentStep == 'play3')
				{
				$('#hunt').html('Hunt').off('click').on('click',reHuntFun).css({'background':'#ffcc00','color':'#000000','cursor':'pointer'});
				}
				else
				{
				$('#hunt').html('Hunt').off('click').css({'background':'#929496','color':'#ffffff','cursor':'default'});
				}
	}
}

var reHuntFun = function(){
$(".screenArea").off("click");
$('#labhilightst').css({'display':'none'});
$('.activeSlider').off('click').css('cursor','default');
game.paused = false;
initTime = 30;
if(cpage == "activity" && Main.activityStep<=2)
{
SliderOkClick("close");
$('#w_holder,#b_holder').css({'display':'none'});
		if(Main.activityStep == 1)
		{
		playVideo('act2_15-2');
		}
		else if(Main.activityStep == 2)
		{
		playVideo('act3_10-4');
		}

}
else if(cpage == "explore")
{
game.state.start('forest');  
startGame();
}



}

var resetFullAct = function(v){
timeStarted = false;
if(game.paused)
	{
	game.paused = false;
	}
	window.clearInterval(timerInterval);
	initTime = 30;
	if(isFirefox)
	{
	Main.browser = 15;
	}
	else if(isChrome)
	{
	Main.browser = 30;
	}
	Main.li = 50;
	Main.lc = 0;
	Main.lf = 0;
	Main.di = 50;
	Main.dc = 0;
	Main.df = 0;
	Main.lf = Main.li-Main.lc;
	Main.df = Main.di-Main.dc;
	Main.tf = 100-(Main.dc+Main.lc);
	if(cpage == 'explore'){
	$('#hunt').off('click').on('click',beginHunt).html('Hunt').css({"cursor":"pointer","background":"#ffcc00","color":"#000000"});
	}
	$('#canvasContainer').css({'display':'none'});
	$('#wkilled').text(Main.lc);
	$('#bkilled').text(Main.dc);
	
	$('#wtotal').text(Main.li);
	$('#btotal').text(Main.di);
	
	if(v)
	{
	game.state.start('title');
	
	}
	$('#resetGameCanvas').off('click').css({'background':'#929496','color':'#ffffff','cursor':'default'});
}


function playVideo(curVid)
{
$('.videoTag_Middle').css({"display":"block"});
video = document.getElementById('sunamiVideo');
	fetchVideo('assets/video/'+curVid+'.mp4')
      .then(function(blob) {       
        video.src = URL.createObjectURL(blob);
		$("video").prop('muted', true);
		game.state.start('activityforest');
		$('#sunamiVideo').trigger('play');
		$('.videoPreloader').css('display','none');
		startGame();
      })      
      .catch(function(err) {
        console.error('Unable to fetch video: ' + err.message);
    });
}

function fetchVideo(url) {
	  $('.videoPreloader').css('display','block');
      return new Promise(function(resolve, reject) {
        // Usual XMLHttpRequest setup.
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        
        request.onload = function() {
			
          // Check if request status code was successfull.
          if (request.status === 200) {
			
            // Resolve with request response.
            resolve(request.response);
          } else {
            // Otherwise reject with a meaningfull message.
            reject(new Error(req.statusText));
          }      
        };
        
        // Handle any network errors.
        request.onerror = function() {
          reject(new Error('Network error'));
        };
        
        // Send request.
        request.send();
      });
    }