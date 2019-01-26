function responsive(){
  if(window.innerHeight < window.innerWidth){plataform="landscape";}
  if(window.innerHeight > window.innerWidth){plataform="portrait";}
  if ( window.innerWidth > 1000) {plataform="desktop";}

  if ( plataform=="portrait") {
  /*  portraitdiv.style.display ="flex";
    noportraitdiv.style.display ="none";*/
    document.getElementById("plataform").innerHTML = "Portrait";
  };
    if ( plataform=="landscape") {
   /* portraitdiv.style.display ="none";
    noportraitdiv.style.display ="inherit";*/
    document.getElementById("plataform").innerHTML = "Landscape"; 
  };
   if ( plataform=="desktop") {
   /* portraitdiv.style.display ="none";
    noportraitdiv.style.display ="inherit";*/
    document.getElementById("plataform").innerHTML = "Desktop";
  };
   console.log(" plataforma :"+ plataform);
};