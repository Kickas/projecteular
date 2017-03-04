var myam=document.querySelector('#button');
myam.onclick=function(){

  var naae=document.getElementById("inpute");
  var entered=naae.value;
  var sum=2;

  var aloha=[1,2];
  if (entered==1  || entered==0){
    sum=0;
  }
  else if (entered==2){
    sum=2;
  }
  else{
   
    for(var i=2;i<entered;i++){
      aloha[i]=aloha[i-1]+aloha[i-2];
      if (aloha[i]%2===0){
        sum+=aloha[i];}
 }



  }
  var dood=document.getElementById("outpute");
  dood.setAttribute("value",sum);
}


