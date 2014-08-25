var x=[];
var y=[];
var a=0.001;
var ao= 30;
var c=1000-100;
var earth= 1;
var sun= 218;
var planetK=3;
var drag=900;
var y= [900,900,900,900,900,900,900,900];
var x=[1000,1000,1000,1000,1000,1000,1000,1000];
var a=[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001];
var aINC=[0.2,0.18,0.168,0.11,0.016,0.0058,0.002,0.001];
var planetRadius=[1,2,2,	1.5,11.2,9,3.98,3.81]
var planetColor=['red','#B46200','#00936E','#E2C600','#1B543C','#D6B200', '#41CCCC', 'rgb(10, 48, 136)']
var aniRad=[112,127,150,170,220,287,577,750	];

/////// Draw circle///////
var circle = function(x,y,r, color){
	gC.beginPath();
	gC.fillStyle=color;
	gC.arc(x,y,r,0, 2*Math.PI,false);
	gC.fill();
	gC.closePath();
}
///// Graph init //////

///////////////////////

var canvas= document.getElementById('webGL');
var gC= canvas.getContext('2d');
canvas.height=1800;
canvas.width=2000;

// /////////////////////
	
var dTest= function(){
	gC.clearRect(0,0, canvas.width,canvas.height);
	 gC.fillStyle='orange';
	circle(1000,900,earth*sun/2);
	for(var i=0;i<8;i++){
	circle(x[i],y[i],planetRadius[i]*planetK, planetColor[i]);
	y[i]=900+Math.floor(aniRad[i]*Math.sin(a[i]));
	x[i]=1000+Math.floor(aniRad[i]*Math.cos(a[i]));
	a[i]=a[i]+aINC[i];	
	
	}
	
}
setInterval(dTest, 10);


// we have fun but we need realise some easy function animate;
// resourses:
//https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0
//http://www.html5canvastutorials.com/labs/html5-canvas-google-bouncing-balls/