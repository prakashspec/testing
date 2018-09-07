var pieChartTxt = [];

var drawCanvas = function(){
pieChartTxt= [];
var data = [
  {
    value: Main.li,
    label: Main.li
  },
  {
    value: Main.di,
    label: Main.di
  },
  
];

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
var colors = ['#c2986e','#5e3b1c']

var pieX = 100;
var pieY = 100;
if(cpage == 'explore')
{
var pieSize = 85;
}
else if(cpage == 'activity')
{
var pieSize = 75;
}


var sum = 0;

for (var di = 0; di != data.length; di++){
  var segment = data[di];
  sum += segment.value;
};

var cumulative = 25;

for (var di = 0; di != data.length; di++){
  var segment = data[di];
  var label = segment.label;
  var value = segment.value;
  
  
  var startSegment = cumulative/sum * 2 * Math.PI;
  var endSegment = (cumulative + segment.value)/sum * 2 * Math.PI;
   
  // drawing segments
  ctx.fillStyle = colors[di];
  ctx.beginPath();
  ctx.moveTo(pieX, pieY);
  ctx.arc(pieX, pieY, pieSize, startSegment, endSegment, false);
  ctx.lineTo(pieX, pieY);
  ctx.closePath();
  ctx.fill();
  
  // writing labels
  var diffArc = endSegment - startSegment
  var labelX = pieX + Math.sin(startSegment + Math.PI/2 + diffArc/2) * pieSize * 0.6;
  var labelY = pieY - Math.cos(startSegment + Math.PI/2 + diffArc/2) * pieSize * 0.6;
  
  ctx.textAlign = 'center';
  ctx.font = 'bold 13pt Calibri';
  
  ctx.fillStyle = 'white';
  
  pieChartTxt.push(labelX);
  pieChartTxt.push(labelY);
  // ctx.fillText(segment.label, labelX, labelY);
  
  
  cumulative += segment.value;
 
}

if(data[0].value>0){
ctx.fillText(data[0].value, pieChartTxt[0], pieChartTxt[1]);
}
if(data[1].value>0){
ctx.fillText(data[1].value, pieChartTxt[2], pieChartTxt[3]);
}
}




var drawCanvas2 = function(){
pieChartTxt= [];
var data2 = [
  {
    value: Main.lf,
    label: Main.lf
  },
  {
    value: Main.df,
    label: Main.df
  },
  
];

var canvas = document.getElementById('canvas2');
var ctx = canvas.getContext('2d')
ctx.clearRect(0, 0, canvas.width, canvas.height);
var colors = ['#c2986e','#5e3b1c']

var pieX = 100;
var pieY = 100;
if(cpage == 'explore')
{
var pieSize = 85;
}
else if(cpage == 'activity')
{
var pieSize = 75;
}

var sum = 0;

for (var di = 0; di != data2.length; di++){
  var segment = data2[di];
  sum += segment.value;
};

var cumulative = 25;

for (var di = 0; di != data2.length; di++){
  var segment = data2[di];
  var label = segment.label;
  var value = segment.value;
  
  
  var startSegment = cumulative/sum * 2 * Math.PI;
  var endSegment = (cumulative + segment.value)/sum * 2 * Math.PI;
   
  // drawing segments
  ctx.fillStyle = colors[di];
  ctx.beginPath();
  ctx.moveTo(pieX, pieY);
  ctx.arc(pieX, pieY, pieSize, startSegment, endSegment, false);
  ctx.lineTo(pieX, pieY);
  ctx.closePath();
  ctx.fill();
  
  // writing labels
  var diffArc = endSegment - startSegment
  var labelX = pieX + Math.sin(startSegment + Math.PI/2 + diffArc/2) * pieSize * 0.6;
  var labelY = pieY - Math.cos(startSegment + Math.PI/2 + diffArc/2) * pieSize * 0.6;
  
  ctx.textAlign = 'center';
  ctx.font = 'bold 13pt Calibri';
  
  ctx.fillStyle = 'white';
  
  pieChartTxt.push(labelX);
  pieChartTxt.push(labelY);
  
  
  cumulative += segment.value;
  
}

if(data2[0].value>0){
ctx.fillText(data2[0].value, pieChartTxt[0], pieChartTxt[1]);
}
if(data2[1].value>0){
ctx.fillText(data2[1].value, pieChartTxt[2], pieChartTxt[3]);
}


var tempCalc = Main.li-Main.lc;
var tempCalc2 = Main.di-Main.dc;
var temploop = 0;
var lineCanvasWidth = 0,lineDis = 0,numPosNew = 0;
if(cpage == 'activity')
{
$('#lineCanvas').attr({'width':'250','height':'270'})
lineCanvasWidth = 250;
lineDis = 230;
numPosNew = 224;
}
else if(cpage == 'explore')
{
$('#lineCanvas').attr({'width':'300','height':'270'})
lineCanvasWidth = 300;
lineDis = 280;
numPosNew = 274;
}
ctxLine.clearRect(0, 0, lineCanvas.width, lineCanvas.height);


ctxLine.strokeStyle="#000000";
ctxLine.lineWidth=0.3;
ctxLine.beginPath();
ctxLine.moveTo(0, 0);
ctxLine.lineTo(0, 250);
ctxLine.moveTo(lineCanvasWidth, 0);
ctxLine.lineTo(lineCanvasWidth, 250);
ctxLine.moveTo(25, 240);
ctxLine.lineTo(25, 260);
ctxLine.moveTo(lineDis, 240);
ctxLine.lineTo(lineDis, 260);
ctxLine.stroke();


ctxLine.beginPath();

for(var i=0; i<11; i++){
ctxLine.moveTo(0, temploop);
ctxLine.lineTo(lineCanvasWidth, temploop);
temploop+=25;
}
ctxLine.stroke();

ctxLine.lineWidth=2;
ctxLine.strokeStyle="#c2986e";
ctxLine.beginPath();

if(Main.li>0){
ctxLine.moveTo(25, 250-(Main.li*2.5));
ctxLine.lineTo(lineDis, 250-(tempCalc*2.5));
}
ctxLine.stroke();


ctxLine.strokeStyle="#5e3b1c";
ctxLine.beginPath();
if(Main.di>0){
ctxLine.moveTo(25, 250-(Main.di*2.5));
ctxLine.lineTo(lineDis, 250-(tempCalc2*2.5));
}
ctxLine.stroke();

ctxLine.font = 'bold 10pt Calibri';
  
ctxLine.fillStyle = 'black';

var lightLineStartY =250-(Main.li*2.5);
var darkLineStartY = 250-(Main.di*2.5);
if(lightLineStartY>darkLineStartY)
{
lightLineStartY = lightLineStartY+11;
darkLineStartY = darkLineStartY-5;
}
else
{
lightLineStartY = lightLineStartY-5;
darkLineStartY = darkLineStartY+11;
}



var lightLineEndY = 250-(tempCalc*2.5);
var darkLineEndY = 250-(tempCalc2*2.5);

if(lightLineEndY>darkLineEndY)
{
lightLineEndY = lightLineEndY+11;
darkLineEndY = darkLineEndY-5;
}
else
{
lightLineEndY = lightLineEndY-5;
darkLineEndY = darkLineEndY+11;
}


if(lightLineStartY<=5)
{
lightLineStartY = lightLineStartY+15;
}

if(lightLineEndY<=5)
{
lightLineEndY = lightLineEndY+15;
}


if(darkLineStartY<=5)
{
darkLineStartY = darkLineStartY+15;
}

if(darkLineEndY<=5)
{
darkLineEndY = darkLineEndY+15;
}
 
if(Main.li>0){
ctxLine.fillStyle = '#90663c';
ctxLine.fillText(Main.li, 18, lightLineStartY);
ctxLine.fillText(tempCalc, numPosNew, lightLineEndY);
}

if(Main.di>0){
ctxLine.fillStyle = '#5e3b1c';
ctxLine.fillText(Main.di, 18, darkLineStartY);
ctxLine.fillText(tempCalc2, numPosNew, darkLineEndY);
}

var clabelPos = 30;
$(".num").each(function() {
$(this).css({'top':clabelPos+'px'});
clabelPos+=25;
})
}


/* setTimeout(function(){
drawCanvas();
drawCanvas2();},5000) */

