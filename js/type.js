   var e= 0;
var isTag;
var text;
var dialogo;



    function type(){

  text = dialogo.slice(0,++e);
  if (text === dialogo) {clearTimeout(type);return;} 
  document.getElementById('dialogo').innerHTML = text;
  var char = text.slice(-1);
  if( char === '<' ) isTag = true;
  if( char === '>' ) isTag = false;
  if (isTag) return type();
   setTimeout(type, 45);
} 