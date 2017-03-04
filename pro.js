var myam=document.querySelector('button');
myam.onclick=function(){

  var naae=document.getElementById("input");
  var entered=naae.value;
  var sum=0;

  for(var i=1;i<entered;i++){
    if(i%3===0 || i%5===0){
      sum+=i;}



  }
  var dood=document.getElementById("output");
  dood.setAttribute("value",sum);
}


