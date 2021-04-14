// JavaScript Document
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