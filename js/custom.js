//Function er noget som skal ske, når man kalder på den

//

$(document).ready(function(){

	$('ul.dropdown').superfish({
		autoArrows: true,
		animation: {height:'show'}
	});  

});

var index=1;

function frem(){
			   if(index<8){
			   index++;
			   }else{
			   index=1;
			   }
			   /*med getElementById udpeger man en specifik id som der skal bruges.*/
			   document.getElementById("fotoserie").setAttribute("src", "images/gallery"+index+".jpg");
			   hiLite();
			   }
/*Conditon(som er en function) er en mÃ¥de at sikre sig pÃ¥ at hvis en variabel har en bestemt vÃ¦rdi skal der ske en ting, og hvis den har en ande, sÃ¥ skal der ske en anden ting*/
function tilbage(){
				  if(index>1){
				  index--;
				  }else{
				  index=8;
				  }
				  document.getElementById("fotoserie").setAttribute("src", "images/gallery"+index+".jpg");
				  hiLite();
				  }

function still(tal){
				   document.getElementById("fotoserie").setAttribute("src", "images/gallery"+tal+".jpg");
				   index=tal;
				   hiLite();
				   }

/*Her bliver der fortÃ¦ller vi at den thumbnail som der er aktiv(bliver vist som stort billede) skal have en border*//*var viser noget, og datatypen er object */
function hiLite(){
				  var thumbListe=document.getElementById("thumbs").getElementsByTagName("img");
	/*Man bruger loop til at lÃ¸be et array igennem */
				  for(i=0; i<thumbListe.length; i++){
				  thumbListe[i].style.border="#666 solid 2px"; 
				 }
				  var aktuelThumb=thumbListe[index-1];
				  aktuelThumb.style.border="#f00 solid 2px";
				 }

				/*Den her function gÃ¸r at man kan skifte billede med piltaster. Der bliver fortalt at med keycode 37, aktivere vi funktionen tilbage, som skifter billede til venstre. Og med der bliver ogsÃ¥ fortalt at med keycode 39, aktivere vi funktionen frem, som sÃ¥ skifter billede til hÃ¸jre*/ 
document.onkeydown = function(e) {
        		if (e.keyCode == '37') {// keycode 37 er 'venstre-pil'
            	tilbage();
        		} else if (e.keyCode == '39') {// keycode 39 er 'hÃ¸jre-pil'
            	frem();
        		}
    			}

function myFunction() {
    			var x = document.getElementById("myTopnav");
    			if (x.className === "topnav") {
        		x.className += " responsive";
    			} else {
        		x.className = "topnav";
    			}
				}


	var besked=document.querySelector("#besked");
	function valider(f){
		if(f.navn.value ==""){
		besked.innerHTML="Angiv navn";
		f.navn.focus();
		return false;
	}
	
		
		var atpos = f.email1.value.indexOf("@");
var dotpos = f.email1.value.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || f.email1.value.length <= dotpos+2){
besked.innerHTML="Skriv en gyldig e-mail adresse";
f.email1.focus();
return false;
}
		return true;
	}

	var besked=document.querySelector("#besked");
	function valider(f){
		if(f.navn.value ==""){
		besked.innerHTML="Angiv navn";
		f.navn.focus();
		return false;
	}
	
		
		var atpos = f.email1.value.indexOf("@");
var dotpos = f.email1.value.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || f.email1.value.length <= dotpos+2){
besked.innerHTML="Skriv en gyldig e-mail adresse";
f.email1.focus();
return false;
}
		return true;
	}



