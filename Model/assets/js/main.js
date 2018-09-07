var game = new Phaser.Game(924, 554, Phaser.CANVAS, 'gameContainer');
var isFirefox = typeof InstallTrigger !== 'undefined';
var isChrome = !!window.chrome && !!window.chrome.webstore;
var Main = {
li:50,
lc:0,
lf:0,
di:50,
dc:0,
df:0,
browser:15,
scale:[],
bg:'forestbg',
top:'forestleaf',
visited:0,
currentPage:'null',
videoPause:false,
activityStep:0,
audioTempStep:-1,
videoStarted:false
};
Main.lf = Main.li-Main.lc;
Main.df = Main.di-Main.dc;
Main.tf = 100-(Main.dc+Main.lc);

if(isFirefox)
	{
	Main.browser = 15;
	}
	else if(isChrome)
	{
	Main.browser = 30;
	}
Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
            game.stage.disableVisibilityChange = true;
            game.renderer.renderSession.roundPixels = true;
            game.load.image('loading', 'assets/images/activity/forestbg.png');
            game.load.onFileComplete.add(this.fileLoadFun, this);  
   },
   gameResized: function(manager, bounds){},
   fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
      if (progress == 100) {
               game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
            }
   }
}
Main.preloader = function(){};

Main.preloader.prototype = {
   init:function()
   {
      this.progressbar;
      this.progress;
	  this.prelogo;
   },
   preload:function(){             
             game.load.crossOrigin='*';
             game.load.audio('desertAudio', 'assets/audio/desertAudio.mp3');
             game.load.audio('forestAudio', 'assets/audio/forestAudio.mp3');
             game.load.audio('hawkAudio', 'assets/audio/hawkAudio.mp3');
             game.load.video('act1Vid', 'assets/video/act1_14-2.mp4');
             game.load.video('act2Vid', 'assets/video/act2_15-2.mp4');
             game.load.video('act3Vid', 'assets/video/act3_10-4.mp4');
             // game.load.spritesheet('soundicon', 'assets/soundicon.png',72,71);
			game.load.image('forestbg', 'assets/images/activity/forestbg.png');
			game.load.image('forestleaf', 'assets/images/activity/forestleaf.png');
			game.load.image('desertbg', 'assets/images/activity/desertbg.png');
			game.load.image('desertleaf', 'assets/images/activity/desertleaf.png');
			game.load.image('arrow', 'assets/images/activity/arrow.png');
            game.load.spritesheet('brat', 'assets/images/activity/blackrat2.png', 100, 50, 30);
            game.load.spritesheet('brat2', 'assets/images/activity/blackrat3.png', 100, 50, 30);
            game.load.spritesheet('eagle', 'assets/images/activity/eaglesprite.png', 200, 100, 98);
             //LLLLL
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             
		  
   },
   fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      // this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               game.load.onFileComplete.removeAll();
               //AAAAAA
               game.state.start('title');  
            }
   },

}










game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);




game.state.start('boot');