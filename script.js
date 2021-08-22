var img = null;
var gimg = null;
var rimg = null;
var raimg = null;
var bimg = null;
var grimg = null;
var img2 = null;
var img1 = null;
var dimg = null;
function loadImage(){
  var file = document.getElementById("im");
  img = new SimpleImage(file);
  gimg = new SimpleImage(file);
  rimg = new SimpleImage(file);
  raimg = new SimpleImage(file);
  bimg = new SimpleImage(file);
  grimg = new SimpleImage(file);
  img2 = new SimpleImage(file);
  img1 = new SimpleImage(file);
  dimg = new SimpleImage(file);
  var canvas = document.getElementById("can");
  img.drawTo(canvas);
}

function GrayScale(){
  if(gimg == null || !gimg.complete()){
    alert("Image is Not Loaded");
  }
  for(var pixel of gimg.values()){
    var avg = (pixel.getRed() + pixel.getGreen() +                    pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas = document.getElementById("can");
  gimg.drawTo(canvas);
}

function Red(){
  if(rimg==null || !rimg.complete()){
    alert("Image Is Not Uploaded!!");
    alert("Upload an Image First");
  }
  for(var pixel of rimg.values()){
    var avg = (pixel.getRed() + pixel.getGreen() +                    pixel.getBlue())/3;
    if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    else{
          pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
    }
  }
  var canvas = document.getElementById("can");
  rimg.drawTo(canvas);
}


function Green(){
  if(grimg==null || !grimg.complete()){
    alert("Image Is Not Uploaded!!");
    alert("Upload an Image First");
  }
  for(var pixel of grimg.values()){
    var avg = (pixel.getRed() + pixel.getGreen() +                    pixel.getBlue())/3;
    if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
    }
    else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setBlue(2*avg-255);
    }
  }
  var canvas = document.getElementById("can");
  grimg.drawTo(canvas);
}


function Blue(){
  if(bimg==null || !bimg.complete()){
    alert("Image Is Not Uploaded!!");
    alert("Upload an Image First");
  }
  for(var pixel of bimg.values()){
    var avg = (pixel.getRed() + pixel.getGreen() +                    pixel.getBlue())/3;
    if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
    }
    else{
          pixel.setRed(2*avg-255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(255);
    }
  }
  var canvas = document.getElementById("can");
  bimg.drawTo(canvas);
}


function Rainbow(){
  if(raimg==null || !raimg.complete()){
    alert("Image Is Not Uploaded!!");
    alert("Upload an Image First");
  }
  for(var pixel of raimg.values()){
    var avg = (pixel.getRed() + pixel.getGreen() +                    pixel.getBlue())/3;
    var y = pixel.getY();
    var h = raimg.getHeight()/7;
    if(y < h){
        if(avg<128){
           pixel.setRed(2*avg);
           pixel.setGreen(0);
           pixel.setBlue(0);
        }
       else{
          pixel.setRed(255 );
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
        }
    }//if bracket
    
    else if(y < 2*h){
        if(avg<128){
           pixel.setRed(2*avg);
           pixel.setGreen(0.8*avg);
           pixel.setBlue(0);
        }
       else{
          pixel.setRed(255 );
          pixel.setGreen(1.2*avg - 51);
          pixel.setBlue(2*avg - 255);
        }
    }//elseif bracket
    
  else if(y < 3*h){
        if(avg<128){
           pixel.setRed(2*avg);
           pixel.setGreen(2*avg);
           pixel.setBlue(0);
        }
       else{
          pixel.setRed(255 );
          pixel.setGreen(255);
          pixel.setBlue(2*avg - 255);
        }
    }//elseif bracket  
  else if(y < 4*h){
        if(avg<128){
           pixel.setRed(0);
           pixel.setGreen(2*avg);
           pixel.setBlue(0);
        }
       else{
          pixel.setRed(2*avg - 255 );
          pixel.setGreen(255);
          pixel.setBlue(2*avg - 255);
        }
    }//elseif bracket
    
  else if(y < 5*h){
        if(avg<128){
           pixel.setRed(0);
           pixel.setGreen(0);
           pixel.setBlue(2*avg);
        }
       else{
          pixel.setRed(2*avg - 255 );
          pixel.setGreen(2*avg - 255);
          pixel.setBlue(255);
        }
    }//elseif bracket 
    
   else if(y < 6*h){
        if(avg<128){
           pixel.setRed(0.8*avg);
           pixel.setGreen(0);
           pixel.setBlue(2*avg);
        }
       else{
          pixel.setRed(1.2*avg - 51 );
          pixel.setGreen(2*avg - 255);
          pixel.setBlue(255);
        }
    }//elseif bracket
    else {
        if(avg<128){
           pixel.setRed(1.6*avg);
           pixel.setGreen(0*avg);
           pixel.setBlue(1.6*avg);
        }
       else{
          pixel.setRed(0.4*avg +153 );
          pixel.setGreen(2*avg-255);
          pixel.setBlue(0.4*avg +153);
        }
    }//else bracket
    
  }//for loop
  var canvas = document.getElementById("can");
  raimg.drawTo(canvas);
}
 


function Restore(){
  if(img1==null || !img1.complete()){
       alert("Image Is Not Uploaded!!");
       alert("Upload an Image First");
  }
  var canvas = document.getElementById("can");
  img.drawTo(canvas);
}

function Clear(){
  if(img1==null || !img1.complete()){
        alert("Image Is Not Uploaded!!");
        alert("Upload an Image First");
  }
  var ic = document.getElementById("can");
  var ctx = ic.getContext("2d");
   ctx.clearRect(0,0,ic.width,ic.height);
   img = null;
   gimg = null;
   rimg = null;
   raimg = null;
   bimg = null;
   grimg = null;
   blimg = null;
}


// BORDER FILTERS START FROM HERE

function Window(){
  if(img1==null || !img1.complete()){
    alert("Image Is Not Uploaded!!");
    alert("Upload an Image First");
  }
  for(var pixel of img1.values()){
      var x= pixel.getX();
      var y= pixel.getY();
      var w = img1.getWidth()/3;
      var h = img1.getHeight()/2;
      var b = img1.getWidth()/30;
      var c = img1.getHeight()/30;
    if((x<b || x>img.getWidth()-b)||(y<c || y>img.getHeight()-c)){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(255);
    }
    if((x>w && x<w+b)||(y>h&& y<h+c)){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(255);
    }
    if((x>2*w && x<2*w+b)||(y>2*h&& y<2*h+c)){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(255);
    }
  }
  var canvas = document.getElementById("can");
  img1.drawTo(canvas);
}
  

function Diagonal(){
  if(dimg==null || !dimg.complete()){
    alert("Image Is Not Uploaded!!");
    alert("Upload an Image First");
  }
  for(var pixel of dimg.values()){
    var x = pixel.getX();
    var y =pixel.getY();
    var w = dimg.getWidth()/10;
    var h = dimg.getHeight();
    if(y<w && y<x/10){
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(255);
     }
    if(y>h-w && y-x/10>h-w){
         pixel.setRed(255);
         pixel.setGreen(255);
         pixel.setBlue(255);
    }
  }
  var canvas = document.getElementById("can");
  dimg.drawTo(canvas);
}


function Blur(){
  if(img2==null || !img2.complete()){
    alert("Upload An Image First");
  }
   var radius = 9;
   var w = img2.getWidth();
   var h = img2.getHeight();
   for(var pixel of img2.values()) {
     var x = pixel.getX(); 
	   var y = pixel.getY();
	  if(x >= radius && x <= w-radius) { 
		       if(x % radius == 0) { 
			for(var i = 1; i< 2*radius; i++) {
				img2.setPixel(x - radius + i, y,                           img2.getPixel(x, y));
			 }  //for loop
		 }  // if condition 2
	 }  // if condition 1
	   if(y >= radius && y <= h-radius) {
		  if(y % radius == 0) {
			for(var i = 1; i < 2*radius; i++) {
				img2.setPixel(x, y - radius +i,                       img2.getPixel(x, y));
			} //for loop
		} // if condition 2
	 }  // if condition 1
 }// main for loop
  var canvas = document.getElementById("can");
  img2.drawTo(canvas);
} // function closed